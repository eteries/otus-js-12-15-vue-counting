<template>
  <div class="start">
    <h1>{{ title }}</h1>
    <game-stats :stats="stats"></game-stats>
    <game-settings @change="updateForm"></game-settings>
    <div class="align-right">
      <button @click="startGame(settings)">Play</button>
    </div>
  </div>
</template>

<script>
import GameStats from './GameStats'
import GameSettings from './GameSettings'

export default {
  name: 'GameStart',
  components: {
    GameStats, GameSettings
  },
  props: ['stats'],
  data () {
    return {
      title: 'Привет!',
      settings: {}
    }
  },
  methods: {
    updateForm (form) {
      this.settings = form;
    },
    startGame (settings) {
      const game = this.createGame(settings);
      this.$emit('created', game)
    },
    createGame (settings) {
      // ToDo: Create Game based on settings, for now it's hardcoded
      return {
        size: 2,
        result: 4199,
        operator: '*',
        questions: [
          { value: 13, userValue: '' },
          { value: 17, userValue: '' },
          { value: 19, userValue: '' }
        ],
        help: 1,
        time: settings.time,
        stats: this.stats
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start {
  margin: 20px 20px 0;
  text-align: left;
}

.align-right {
  margin-top: 30px;
  text-align: right;
}

button {
  font-size: 18px;
  padding: 5px 15px;
}
</style>
