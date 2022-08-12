import axios from 'axios'
const state ={
    todos:[]
 }

const getters={
    getAllTodos:(state) =>state.todos
}

const actions  = {
    async fetchTodos({commit}){
        const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log(response.data)
        commit('setTodos',response.data) //COMMIT CALLS THE ACTION IN MUTATION FUNCTIONS
    },

    async AddTodo({commit},title){
        const response=await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,completed:false
        })
        commit('newTodo',response.data)
    },
    async deleteTodo({commit},id){
        await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}') //ye backend se uradega
        commit('deleteATodo',id) //ye UI se uradega

    },
    // {commit},
    async filterTodos({commit},e){

        // GET SELECTED NUMBER IN THE SELECT FIELD.
        const limit=parseInt(e.target.options[ e.target.options.selectedIndex].innerText)
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos',response.data) //COMMIT CALLS THE ACTION IN MUTATION FUNCTIONS

    },
    async updateTodos({commit},updTodo){
        const response=await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo)
        console.log(response.data)
        commit('updateATodo',response.data)  

    } 
}
const mutations ={

    setTodos: function(state,todos){
        state.todos=todos
    },
    newTodo:function(state,todo){
        //Unshift adds value  to the start 
        state.todos.unshift(todo)
    },
    deleteATodo:function(state,id){ //ye UI se uradega
        state.todos=state.todos.filter( (todo)=> todo.id !==id)
    },
    updateATodo:function(state,updTodo){
        const index=state.todos.findIndex( (todo) =>todo.id ===updTodo.id)
        if(index !== -1) {

            state.todos.splice(index,1,updTodo)
        }

    }

}

//THIS SHALL BE NAMED EXPORTS NOT DEFAULT BECAUSE DEFAULT TOU AIK HI HUTA HAI .
export  {
    state,
    getters,
    actions,
    mutations,
}