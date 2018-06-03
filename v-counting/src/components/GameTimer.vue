<template>
  <div class="hello">
    <div>{{ timer }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameTimer',
  props: {
    go: Boolean,
    time: Number
  },
  data () {
    return {
      m: this.time,
      timer: '00:00'
    }
  },
  created: function () {
    const m = this.m;
    let elapsedTime = m * 60;
    const t = setInterval(
      function () {
        elapsedTime--;
        const m = Math.floor((elapsedTime % (60 * 60)) / 60);
        const s = ('0' + elapsedTime % 60).slice(-2);
        this.timer = m + ':' + s;

        if (elapsedTime < 0) {
          this.stop(t);
          this.$emit('timeIsUp');
        }

        if (!this.go) {
          this.stop(t);
        }
      }.bind(this), 1000);
  },
  methods: {
    stop (t) {
      clearInterval(t);
      this.timer = '00:00';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
