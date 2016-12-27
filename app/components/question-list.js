import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  currentAnswer: null,
  actions: {
    setAnswer(answer) {
      this.set('currentAnswer', answer);
      console.log(answer);
    },
    checkCorrect(check) {
      if (this.currentAnswer == check) {
        this.set('isCorrect',true);
      } else {this.set('isCorrect',false);}
      console.log(this.isCorrect);
      console.log(check);
    }


  }
});
