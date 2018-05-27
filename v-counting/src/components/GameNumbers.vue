<template>
  <div class="numbers">
      <div class="numbers__inner">
          <ul class="numbers__left">
              <li v-for="n in 9" :key="n">
                  <button class="number" @click="$emit('keyPressed', n)">{{ n }}</button>
              </li>
              <li>
                  <button class="number" @click="$emit('keyPressed', 0)">0</button>
              </li>
          </ul>
          <ul class="numbers__right">
              <li v-for="(symbol, index) in symbols" :key="index">
                  <button class="symbol"
                          @click="$emit('keyPressed', symbol)">
                      {{symbol}}
                  </button>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameNumbers',
  data () {
    return {
      symbols: ['<', '>', '?', '=']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.numbers {
    display: flex;
    margin: 50px 20px;
    justify-content: center;
}

.numbers__inner {
    display: flex;
    max-width: 350px;
}

.numbers__left {
    flex: 0 0 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.numbers__right {
    flex-wrap: wrap;
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.numbers__left li {
    display: flex;
    justify-content: center;
    flex: 0 0 33.33%;
    margin-bottom: 20px;
}

.numbers__right li {
    display: flex;
    justify-content: center;
    flex: 0 0;
    margin-bottom: 20px;
}

button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    border: none;
    transition: box-shadow .1s;
    cursor: pointer;
}

button:focus {
    outline: none;
}

button:active {
    box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
}

.number {
    background: #ed764e;
}

.symbol {
    background: #979494;
}

</style>
