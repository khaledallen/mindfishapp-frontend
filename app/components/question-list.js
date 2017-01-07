import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  isIncorrect: false,
  currentAnswer: null,

  actions: {
    setAnswer(answer) {
      this.set('currentAnswer', answer);
      this.$(".answer-option").on("click", function(){
        $(".answer-option").removeClass("clicked");
        $(this).addClass("clicked");
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
