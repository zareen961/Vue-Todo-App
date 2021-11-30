<template>
    <div :class="[task.status,'task__cardContainer']" @dblclick="toggleTask(task.id)">
        <p>{{task.name}}</p>
        <div v-if="task.status === 'todo'" @click="completeTask(task.id)">
            <i class="fa fa-check pointer"></i> 
        </div>
        <div v-else>
            <i class="fa fa-check pointer"></i> 
        </div>
        <div @click="deleteTask(task.id)">
              <i class="fa fa-trash pointer"></i>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'Task',
        props:{
            task:Object,            
        },
        methods:{
            deleteTask(id){
                this.$store.dispatch("deleteTodo",id)               
            },
            completeTask(id){
                this.$store.dispatch("completeTodo",id)               
            },
            toggleTask(id){
                this.$store.dispatch("toggleTodo",id)               
            }
        },
    }
</script>

<style scoped>
.task__cardContainer{
    display: flex;
    border-left: 5px solid transparent;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: cadetblue;
    transition: all 0.3s ease-in-out;
}

.task__cardContainer.done{
   background-color: #444;
}

.task__cardContainer > p{
    color: #fff;
    margin-top: 5px;
    font-weight: 500;
    word-wrap: break-word;
    max-width: 80%;
}


.task__cardContainer.done p{
    text-decoration: line-through;
}

.task__cardContainer > div{
    cursor: pointer;
    border-radius: 50%;
    padding: 10px;
    transition: all 0.3s ease-in;
}

.task__cardContainer > div:hover{
    background: rgba(128, 128, 128, 0.315);
}

.task__cardContainer > div:first-of-type{
    margin: 0 10px 0 auto;
    color: green;
}

.task__cardContainer.done > div:first-of-type{
    visibility: hidden;
}

.task__cardContainer > div:last-of-type{
    color: crimson;
}
</style>