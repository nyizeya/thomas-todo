<template>
    <div class="row justify-content-center">
      <div class="col-11">
        <img class="d-block mx-auto" src="./../assets/logo.png" alt="" width="100" height="100">
        <label for="">New Task</label>
        <input class="form-control" type="text" v-model="task" @keydown.enter="addTodo">
        <button class="btn btn-success btn-lg d-block mx-auto mt-4" @click="addTodo">Add New Task</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            task: '',
        }
    },
    methods: {
        addTodo() {
            if (this.task.trim().length < 1) {
                return alert("You gotta write something");
            }
            // this.$emit("addTask", {task: this.task, done: false});
            this.$store.commit('addTodo', {task: this.task, done: false});
            this.$notify({
                group: 'foo',
                title: 'Added!',
                text: 'Your Task Is Now Added!',
                // type: 'success'
            });
            this.task = '';
        },
    }
}
</script>

<style>

</style>