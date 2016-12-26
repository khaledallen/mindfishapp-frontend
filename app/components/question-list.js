import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  actions: {
    checkCorrect(submittedAnswer) {
      if (submittedAnswer == correctAnswer) {
        isCorrect = true;
      }
    }
  }

});
