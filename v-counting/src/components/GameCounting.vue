<template>
  <div class="game">
    <div class="game-top">
        <button @click="$emit('cancel')">Cancel</button>
        <game-timer :go="gameIsOn"></game-timer>
    </div>
    <div class="task">
      <div class="fields">
      <span v-for="(question,index) in game.questions" :key="index">
        <span v-if="index !== 0" class="has-value"> {{ game.operator }} </span>
        <input :class="{ 'has-value': question.userValue.length }"
               :maxlength="game.size" :size="game.size"
               ref="inputs"
               v-model="question.userValue"
               @focus="edit(index)" />
      </span>
      </div>
      <div class="result">= {{ game.result }}?</div>
    </div>
    <div class="game-numbers">
      <game-numbers @keyPressed="handleInput"></game-numbers>
    </div>

  </div>
</template>

<script>
import GameTimer from './GameTimer'
import GameNumbers from './GameNumbers'

export default {
  name: 'GameCounting',
  components: {
    GameTimer, GameNumbers
  },
  props: ['game'],
  data () {
    return {
      currentId: 0,
      gameIsOn: true
    }
  },
  methods: {
    handleInput (n) {
      if (typeof n === 'number') {
        this.printNumber(n);
        return;
      }
      switch (n) {
        case ('='):
          this.finish();
          break;
        case ('?'):
          this.getHelp();
          break;
        case ('>'):
          this.goNext();
          break;
        case ('<'):
          this.goPrevious();
          break;
      }
    },
    printNumber (n) {
      const input = this.$refs.inputs[this.currentId];

      input.value = (input.value.length < input.maxLength) ? input.value + n : input.value;
      this.game.questions[this.currentId].userValue = input.value;
    },
    goNext () {
      if (this.currentId++ < this.game.questions.length - 1) {
        this.edit(this.currentId);
        this.$refs.inputs[this.currentId].focus();
      }
    },
    goPrevious () {
      if (this.currentId-- > 0) {
        this.edit(this.currentId);
        this.$refs.inputs[this.currentId].focus();
      }
    },
    edit (id) {
      this.currentId = id;
      this.game.questions[this.currentId].userValue = '';
    },
    getHelp () {
      if (!this.game.help) return;

      const input = this.$refs.inputs[this.currentId];
      input.value = this.game.questions[this.currentId].value;
      this.game.questions[this.currentId].userValue = input.value;
      this.game.help--;
    },
    finish () {
      this.gameIsOn = false;
      this.$emit('cancel');
      console.log('game is over');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.fields {
   font-size: 20px;
   margin: 50px 0 20px;
 }

input {
  border: none;
  border-bottom: 2px solid #797979;
  color: #797979;
  text-align: center;
  font-size: 20px;
}

input:focus {
  outline: none;
  border-bottom-color: #ed764e;
}

input.has-value {
  border: none;
  color: black;
}

.result {
  color: #797979;
  margin-bottom: 50px;
  font-size: 20px;
}

.has-value {
  color: black;
}

button {
  font-size: 18px;
  padding: 5px 15px;
}
</style>
