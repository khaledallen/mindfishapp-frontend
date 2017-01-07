import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  isIncorrect: false,
  currentAnswer: null,
  option1: null,
  option2: null,
  option3: null,
  option4: null,

  init () {
    this._super(...arguments);
    this.setup();
  },

  actions: {
    setAnswer(answer) {
      this.set('currentAnswer', answer);
    },

    checkCorrect(check) {
      if (this.currentAnswer === check) {
        this.set('isCorrect',true);
        this.set('isIncorrect',false);
        } else {
          this.set('isCorrect',false);
          this.set('isIncorrect',true);
        };
    }
  },

    setup() {
      this.set('option1', this.options[0]);
      this.set('option2', this.options[1]);
      this.set('option3', this.options[2]);
      this.set('option4', this.options[3]);
//TODO Make this a loop so it accounts for any size array
    }

});
