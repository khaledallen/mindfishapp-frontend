import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  isImageQuestion: true, //logic if question has an image. TODO: to be alterated accroding to whether or not question.image exists for the particular question
  isSelected: null,
  isCorrect: false,
  isIncorrect: false,
  currentAnswer: null,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    setAnswer(answer) {
      this.set('currentAnswer', answer);
      this.set('isSelected', answer);
      console.log(answer);
    },
    checkCorrect(check) {
      if (this.currentAnswer == check) {
        this.set('isCorrect',true);
        this.set('isIncorrect',false);
      } else {this.set('isCorrect',false);this.set('isIncorrect',true);}
      console.log(this.isCorrect);
      console.log(this.isIncorrect);
      console.log(check);
    }


  }
});
