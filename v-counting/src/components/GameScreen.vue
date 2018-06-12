<template>
  <div class="card">
    <template v-if="screen">
      <game-counting :game="game" @cancel="stop"></game-counting>
    </template>
    <template v-else>
      <game-start :stats="stats" @created="start"></game-start>
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
      screen: 0,
      game: {},
      stats: {
        day: 1,
        gameSolved: 0,
        gameTried: 0,
        totalSolved: 0,
        totalTried: 0,
        totalPrecision: 0
      }
    }
  },
  methods: {
    start (game) {
      this.screen = 1;
      this.game = game;
    },
    stop (stats) {
      this.screen = 0;
      this.stats = stats;
    }
  },
  mounted: function () {
    if (!this.screen) this.$router.push('/');
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
