<template>
  <div class="settings">
    <h3>Настройки</h3>
    <form>
      <div class="form-group">
        <div>
          <input type="range" id="time"
                 min="1" max="15"
                 v-model.number="form.time"
                 @change="$emit('change', form)" />
        </div>
        <div>
          <label for="time">Длительность {{ form.time }}
            <span v-if="form.time===1">минута</span>
            <span v-else-if="form.time>=5">минут</span>
            <span v-else>минуты</span>
          </label></div>
        </div>

      <div class="form-group">
        <div>
          <input type="range" id="complexity"
                 min="1" max="10"
                 v-model="form.complexity"
                 @change="$emit('change', form)">
        </div>
        <div><label for="complexity">Сложность {{ form.complexity }}</label></div>
      </div>

      <div class="form-group checks">
        <div>
          <input type="checkbox" id="addition"
                 value="addition"
                 v-model="form.tasks"
                 @change="$emit('change', form)">
          <label for="addition">Сложение</label>
        </div>
        <div>
          <input type="checkbox" id="substaction"
                 value="substaction"
                 v-model="form.tasks"
                 @change="$emit('change', form)">
          <label for="substaction">Вычитание</label>
        </div>
        <div>
          <input type="checkbox" id="multiplication"
                 value="multiplication"
                 v-model="form.tasks"
                 @change="$emit('change', form)">
          <label for="multiplication">Умножение</label>
        </div>
        <div>
          <input type="checkbox" id="division"
                 value="division"
                 v-model="form.tasks"
                 @change="$emit('change', form)">
          <label for="division">Деление</label>
        </div>
        <div>
          <input type="checkbox" id="power"
                 value="power"
                 v-model="form.tasks"
                 @change="$emit('change', form)">
          <label for="power">Возведение в степень</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GameSettings',
  data () {
    return {
      form: {
        tasks: ['addition', 'multiplication'],
        time: 7,
        complexity: 5
      }
    }
  },
  created () {
    this.$emit('change', this.form);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>
