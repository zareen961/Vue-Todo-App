<template>
    <div class="tasks__container">
        <div class="tasks__legend">
            <h6>Double click to change status</h6>
            <h5><div></div> Pending</h5>
            <h5><div></div> Completed</h5>
        </div>
        <div v-for="(task) in allTodos" :key="task.id">
            <Task :task="task" @delete-task="$emit('delete-task', task.id)" @complete-task="$emit('complete-task', task.id)"/>
        </div>
    </div>
</template>

<script>
    import Task from './Task.vue'
    export default {
    name:'Tasks',
    components:{
        Task
    },
    computed: {
        allTodos(){
            return this.$store.getters.allTodos
        }
    },
    created() {
        this.$store.dispatch("fetchTodos")
    },
   
   

}
</script>

<style scoped>
    .tasks__container{
        background-color: #f0f0f0;
        padding: 30px 0;
        min-height: 75vh;
    }

    .tasks__container > div{
        max-width: 577px;
        margin: 0 auto;
    }

    .tasks__container .tasks__legend{
        display: flex;
        margin-bottom: 20px;
    }

    .tasks__legend h5{
        display: flex;
        align-items: center;
    }

    .tasks__legend h5:first-of-type{
        margin-left: auto;
        margin-right: 5px;
    }
    .tasks__legend h5 > div{
         height: 12px;
         width: 12px;
         border-radius: 50%;
         background-color: #444;
         margin-right: 5px;
     }

     .tasks__legend h5:first-of-type > div{
         height: 12px;
         width: 12px;
         border-radius: 50%;
         background-color: cadetblue;
         margin-right: 5px;
     }

</style>