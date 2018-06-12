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
import { createTask } from '../utils/tasks'

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
      this.$emit('created', game);
      this.$router.push({name: 'Game', params: {task: 1, total: game.tasks.length}});
    },
    createGame (settings) {
      const tasks = [];
      for (let i = 0; i < settings.complexity; i++) {
        tasks.push(createTask(settings.operations));
      }
      return {
        size: 2,
        tasks,
        help: settings.complexity,
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
