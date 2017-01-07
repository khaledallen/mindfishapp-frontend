import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  isIncorrect: false,
  currentAnswer: null,

  init () {
    this._super(...arguments);
  },

  actions: {
    setAnswer(answer) {
      this.set('currentAnswer', answer);
    },
    didInsertElement() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          this.$('.answer-option').on('click' , function() {
            $('.answer-option').addClass('clicked');
          });
        });
      },

    checkCorrect(check) {
      if (this.currentAnswer === check) {
        this.set('isCorrect',true);
        this.set('isIncorrect',false);
        } else {
          this.set('isCorrect',false);
          this.set('isIncorrect',true);
        }
    }
  }

});
