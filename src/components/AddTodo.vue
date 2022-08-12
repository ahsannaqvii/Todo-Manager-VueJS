<template>
  <div>
    <h1>Add Todo</h1>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add todo" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["AddTodo"]),
    onSubmit(event) {
      event.preventDefault();
      this.AddTodo(this.title);
    },
  },
  data() {
    return {
      title: "",
    };
  },
  name: "AddTodo",
};
</script>

<style scoped>
h1 {
  display: flex;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  outline: 0;
  border: 1px solid #41b883;
}
input[type="submit"] {
  flex: 2;
  padding: 10px;
  background: #41b883;
  color: #ffffff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
