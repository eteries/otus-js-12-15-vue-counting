<template>
  <div class="settings">
    <h3>{{ title }}</h3>
    <div class="form-group">
      <div><input type="range" min="1" max="15" id="time" /></div>
      <div><label for="time">Длительность 7 минут</label></div>
    </div>
    <div class="form-group">
      <div><input type="range" min="1" max="10" id="complexity"></div>
      <div><label for="complexity">Сложность 5</label></div>
    </div>
    <div class="form-group checks">
      <div>
        <input type="checkbox" id="addition">
        <label for="addition">Сложение</label>
      </div>
      <div>
        <input type="checkbox" id="substaction">
        <label for="substaction">Вычитание</label>
      </div>
      <div>
        <input type="checkbox" id="multiplication">
        <label for="multiplication">Умножение</label>
      </div>
      <div>
        <input type="checkbox" id="division">
        <label for="division">Деление</label>
      </div>
      <div>
        <input type="checkbox" id="power">
        <label for="power">Возведение в степень</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameSettings',
  data () {
    return {
      title: 'Настройки'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settings {

}
.form-group {
  margin-bottom: 20px;
}

</style>
