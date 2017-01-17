import Ember from 'ember';

export default Ember.Component.extend({

  auth: Ember.inject.service('session'),
  login: null,
  password: null,
  actions: {
    /*authenticate() {

      var options = {username: this.get('login'), password: this.get('password')};

      this.get('auth').authenticate('authenticator:torii', 'mindfish', options ).then( () => {
        alert('Thanks for logging in!');
        this.get('transition')();
      }, () => {
        alert('Wrong user name or password!');
      });
    }
  }*/

});
