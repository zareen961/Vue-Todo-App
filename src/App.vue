<template>
  <div id="app">
    <Header/>
    <InputTask />
    <Tasks />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import InputTask from './components/InputTask.vue'


export default {
  name: 'App',
  components: {
    Header,
    InputTask,
    Tasks,
  },  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}

</style>