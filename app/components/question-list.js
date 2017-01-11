import Ember from 'ember';

export default Ember.Component.extend({
  isCorrect: false,
  isIncorrect: false,
  currentAnswer: null,

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
        }
    }
  },

  didInsertElement: function() {
            Ember.run.scheduleOnce('afterRender', this, function() {
              this.$(".answer-option").on("click", function(){
                this.$(this).siblings().removeClass("clicked");
                this.$(this).addClass("clicked");
              });
            });
    }

});
