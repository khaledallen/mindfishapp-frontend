import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByType(param) {
      if (param !== '') {
        return (this.get('store').query('question', {categories: param}));
      } else {
        return this.get('store').findAll('question');
      }
    },

    setActive() {
      var answeredQuestion;
      answeredQuestion = Ember.$('.question-container:first-of-type').detach();
      answeredQuestion.appendTo(
        Ember.$('.list-filter')
      );
    }
  }
});
