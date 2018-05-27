<template>
  <div class="start">
    <h1>{{ title }}</h1>
    <game-stats></game-stats>
    <game-settings></game-settings>
    <div class="align-right">
      <button @click="$emit('start')">Play</button>
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
  data () {
    return {
      title: 'Привет!'
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
