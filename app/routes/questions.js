import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').findAll('post');
      //TODO set this to query for 'question'
      }
});
