<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
  </div>
</template>

<script>
import TutorialDataService from '../../services/tutorial';

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  created () {
    TutorialDataService.create();
  },
}
</script>
