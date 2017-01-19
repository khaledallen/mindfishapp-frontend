import Ember from 'ember';
//import api from 'wordpress-rest-api-oauth-1';

export default Ember.Controller.extend({

  auth: Ember.inject.service('session'),
  actions: {

    signIntoWP() {
      var options = {username: 'ember', password: 'password'};
        this.get('auth').authenticate('authenticator:torii', 'mindfish', options).then( () => {
          alert('Thanks for logging in!');
          this.get('transition')();
        }, () => {
          alert('Meep!');
        });
    },

    logout() {
      this.get('auth').invalidate();
    }
  }
});
