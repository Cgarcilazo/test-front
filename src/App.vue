<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TutorialList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TutorialList from './components/tutorials/List';

export default {
  name: 'App',
  components: {
    TutorialList,
  }
}
</script>
