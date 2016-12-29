import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByType(param) {
      if (param !== '') {
        return this.get('store').query('question', { category_name: param });
      } else {
        return this.get('store').findAll('questions');
      }
    }
  }
});
