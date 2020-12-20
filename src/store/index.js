import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    editTodo(state, payload) {
      state.todos[payload.index] = payload.todo;
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1);
    }
  },
  actions: {
  },
  getters: {
    getTodos: state => state.todos
  },
  modules: {
  }
})
