import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  actions: {
    checkCorrect(answer) {
      if (answer == this.correctAnswer) {
        this.toggleProperty('isCorrect');
      }
    }
  }
});


//
