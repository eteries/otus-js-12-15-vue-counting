<template>
  <div class="card">
    <template v-if="game">
      <game-counting :game="settings" @cancel="game=0"></game-counting>
    </template>
    <template v-else>
      <game-start @start="game=1"></game-start>
    </template>
  </div>
</template>

<script>
import GameStart from './GameStart.vue'
import GameCounting from './GameCounting.vue'

export default {
  name: 'GameScreen',
  components: {
    GameStart, GameCounting
  },
  data () {
    return {
      game: 0,
      settings: {
        size: 2,
        result: 4199,
        operator: '*',
        questions: [
          { value: 13, userValue: '' },
          { value: 17, userValue: '' },
          { value: 19, userValue: '' }
        ],
        help: 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .6);
  width: 500px;
  height: 620px;
  padding: 20px;
}
h1 {
text-transform: uppercase;
}
h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
