<template>
    <div class="inputTask__container">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
      />
      <button  @click="submitTask">
        SUBMIT
      </button>
    </div>
</template>

<script>
    export default {
    name:'InputTask',
    data() {
        return{
            task: ''
        }
    },
    methods:{
        submitTask() {
            if (this.task.length === 0) return;
            this.$store.dispatch("addTodo",this.task)
            this.task = "";

        },
    },
}
</script>

<style  scoped>
    .inputTask__container{
        background-color: cadetblue;
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
    }

    .inputTask__container input{
        border:none;
        margin: 10px 0 0;
        width:477px;
        height: 2.5rem;
        padding: 5px 5px 5px 15px;
        border-radius: 5px 0 0 5px;
        border-bottom: 1px solid cadetblue;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }

    .inputTask__container button{
        cursor: pointer;
        display: block;
        background: #111;
        border: 0;
        margin: 10px 0 0;
        color: #fff;
        padding: 5px;
        height: 2.5rem;
        min-width: 100px;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
    }

    .inputTask__container button:hover{
        background: #222;
    }
</style>