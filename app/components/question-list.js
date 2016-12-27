import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  actions: {
    checkCorrect(submittedAnswer) {
      
      if (submittedAnswer == this.correctAnswer) {
        console.log(submittedAnswer);
        console.log(this.correctAnswer);
        this.toggleProperty('isCorrect');
      }
    }
  }
});


//
