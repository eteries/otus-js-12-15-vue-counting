<template>
  <div>
    <p>Добро пожаловать в {{ stats.day || 1 }} тренировочный день.</p>
    <div v-if="stats.gameTried">
      <p>Ваш последний результат &ndash; решено {{ stats.gameSolved || 0}} из {{ stats.gameTried || 0 }}.</p>
      <p>Общая точность {{ stats.totalPrecision || 0 }}% </p>
    </div>
    <div v-else>
      <p>Начало - половина успеха. Удачи!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameStats',
  props: ['stats']
}
</script>
