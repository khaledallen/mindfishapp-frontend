import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

<<<<<<< HEAD
export default Ember.Route.extend(AuthenticatedRouteMixin, {
=======
export default Ember.Route.extend({

>>>>>>> master
    model() {
        return this.get('store').findAll('question');
      }
});
