<template>
  <div class="game">
    <div class="game-top">
        <button @click="$emit('cancel', calcStats(game.stats))">Cancel</button>
        <game-timer :go="gameIsOn"
                    :time="game.time"
                    @timeIsUp="finish(true)">
        </game-timer>
    </div>
    <div class="task" @submit="finish">
      <div class="fields">
      <span v-for="(question,index) in task.questions" :key="index">
        <span v-if="index !== 0" class="has-value"> {{ task.operator }} </span>
        <input :class="{ 'has-value': question.userValue.length }"
               :maxlength="game.size" :size="game.size"
               ref="inputs"
               v-model="question.userValue"
               @focus="edit(index)"
               @keyup.enter="finish(false)"/>
      </span>
      </div>
      <div class="result">= {{ task.result }}?</div>
    </div>
    <div class="game-numbers">
      <game-numbers @keyPressed="handleInput"></game-numbers>
    </div>

  </div>
</template>

<script>
import GameTimer from './GameTimer'
import GameNumbers from './GameNumbers'
import { checkTask } from '../utils/tasks'

export default {
  name: 'GameCounting',
  components: {
    GameTimer, GameNumbers
  },
  props: ['game'],
  data () {
    return {
      currentId: 0,
      currentTask: 0,
      gameIsOn: true,
      stats: {
        day: this.game.stats.day,
        gameSolved: 0,
        gameTried: 0,
        totalSolved: this.game.stats.totalSolved,
        totalTried: this.game.stats.totalTried,
        totalPrecision: this.game.stats.totalPrecision
      }
    }
  },
  computed: {
    task () {
      return this.game.tasks[this.currentTask];
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
      this.task.questions[this.currentId].userValue = input.value;
    },
    goNext () {
      if (this.currentId++ < this.task.questions.length - 1) {
        this.edit(this.currentId);
        this.$refs.inputs[this.currentId].focus();
      }
    },
    goPrevious () {
      this.currentId = this.$refs.inputs[this.currentId].value ? this.currentId : --this.currentId;
      this.currentId = (this.currentId > 0) ? this.currentId : 0;
      this.edit(this.currentId);
      this.$refs.inputs[this.currentId].focus();
    },
    edit (id) {
      this.currentId = id;
      this.task.questions[this.currentId].userValue = '';
    },
    getHelp () {
      if (!this.game.help) {
        console.info('Подсказок больше нет!');
        return;
      }
      const input = this.$refs.inputs[this.currentId];
      input.value = this.task.questions[this.currentId].value;
      this.task.questions[this.currentId].userValue = input.value;
      this.game.help--;
    },
    openFirst () {
      const input = this.$refs.inputs[0];
      input.value = this.task.questions[0].value;
      this.task.questions[0].userValue = input.value;
    },
    nextTask () {
      this.currentTask++;
      if (this.currentTask >= this.game.tasks.length) return;
      this.openFirst();
      this.$refs.inputs[1].focus();
      return true;
    },
    finish (timeIsUp) {
      const userAnswers = this.task.questions.map(question => question.userValue);
      checkTask(userAnswers, this.task.operator, this.task.result)
        ? alert('Победа!') || this.stats.gameSolved++
        : alert('Повезёт в другой раз!');
      this.stats.gameTried++;

      if (!this.nextTask() || timeIsUp) {
        this.gameIsOn = false;
        this.$emit('cancel', this.calcStats(this.stats));
        this.$router.push('/');
      } else {
        this.$router.push({name: 'Game', params: {task: this.currentTask + 1, total: this.game.tasks.length}});
      }
    },
    calcStats (prevStats) {
      this.stats.totalSolved = this.stats.totalSolved + this.stats.gameSolved;
      this.stats.totalTried = this.stats.totalTried + this.stats.gameTried;
      return {
        day: ++prevStats.day,
        gameSolved: this.stats.gameSolved,
        gameTried: this.stats.gameTried,
        totalSolved: this.stats.totalSolved,
        totalTried: this.stats.totalTried,
        totalPrecision: this.stats.totalSolved ? Math.round(this.stats.totalSolved / this.stats.totalTried * 100) : 0
      }
    }
  },
  mounted: function () {
    this.openFirst();
    this.$refs.inputs[1].focus();
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
