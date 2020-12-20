<template>
    <div class="col-11 mt-3">
            <div class="card">
                <div class="row p-2 align-items-center">
                    <div class="col-7" :class="{taskCompleted: todo.done}" @dblclick="editToggle = true">
                        <input type="text" v-model="todo.task" class="form-control" v-if="editToggle" @keydown.enter="editTodo" v-focus>
                        <strong v-else>{{ todo.task }}</strong>
                    </div>
                    
                    <div class="col text-right">
                        <button class="btn btn-success mr-3" @click="todo.done = !todo.done">
                        <i class="material-icons mt-1">check</i>
                        </button>
                        <button class="btn btn-danger mr-3" @click="deleteTodo(index)">
                        <i class="material-icons mt-1">delete</i>
                        </button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    directives: {
        focus: {
            inserted: function (el) {
                // Focus the element
                el.focus()
            },
        }
    },
    name: "TodoItem",
    data() {
        return {
            editToggle: false,
        }
    },
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteTodo(index) {
            // this.$emit("deleteTask", index);
            this.$store.commit('deleteTodo', index);
            this.$notify({
                group: 'foo',
                title: 'Deleted!',
                text: 'Your Task Is Now Deleted!',
                type: 'error'
            });
        },
        editTodo() {
            // this.$emit("editTodo", {todo: this.todo, index: this.index});
            this.$store.commit('editTodo', {todo: this.todo, index: this.index});
            this.$notify({
                group: 'foo',
                title: 'Edited!',
                text: 'Your Task Is Now Edited!',
                type: 'info'
            });
            this.editToggle = false;
        }
    }
}
</script>

<style>

</style>