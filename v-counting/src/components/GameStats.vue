<template>
  <div class="stats">
    <p>Добро пожаловать в {{ day }} тренировочный день.</p>
    <p>Ваш последний результат &ndash; решено {{ solvedCount }} из {{ solvedTotal }}.</p>
    <p>Общая точность {{ precision }}% </p>
  </div>
</template>

<script>
export default {
  name: 'GameStats',
  data () {
    return {
      day: 7,
      solvedCount: 10,
      solvedTotal: 25,
      precision: 80
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats {

}
</style>
