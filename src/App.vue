<template>
  <div class="container mt-5">
    <notifications group="foo"  class="mt-3"/>
    <add-task />
    <transition-group enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutRight" class="row justify-content-center mt-3">
        <todo-item v-for="(todo, index) in $store.getters['getTodos']" :key="index" :index="index" :todo="todo"/>
    </transition-group>
  </div>
</template>

<script>
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";

export default {
  name: 'App',
  components: {
    AddTask,
    TodoItem,
  },
  data() {
    return {
      
    }
  },
  methods: {
    // completeTodo(index) {
    //   this.todos[index].done = true;
    //   this.$notify({
    //         group: 'foo',
    //         title: 'Completed!',
    //         text: 'Your Task Is Now Completed!',
    //     });
    // }
  }
}
</script>

<style>
label {
  color: white;
}

.card {
  border-radius: 1rem !important;
}
</style>
