<template>
  <div>
    <p>Добро пожаловать в {{ stats.day || 1 }} тренировочный день.</p>
    <div v-if="stats.total">
      <p>Ваш последний результат &ndash; решено {{ stats.solvedCount || 0}} из {{ stats.total || 0 }}.</p>
      <p>Общая точность {{ stats.precision || 0 }}% </p>
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
