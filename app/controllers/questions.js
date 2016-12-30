import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByType(param) {
      if (param !== '') {
        return this.get('store').query('question', {per_page: 99, filter: {categories: param}}).
      } else {
        return this.get('store').findAll('question');
      }
    }
  }
});
