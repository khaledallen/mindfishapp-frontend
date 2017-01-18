import Ember from 'ember';

export default Ember.Component.extend({

  auth: Ember.inject.service('session'),
  login: null,
  password: null,
  actions: {
    authenticate() {
<<<<<<< HEAD

      var options = {username: this.get('login'), password: this.get('password')};

      this.get('auth').authenticate('authenticator:torii', 'mindfish', options ).then( () => {
=======
      this.get('auth').authenticate('authenticator:torii', this.get('login'), this.get('password')).then( () => {
>>>>>>> parent of c70e8bf... We now have a response from WP using OAuth1
        alert('Thanks for logging in!');
        this.get('transition')();
      }, () => {
        alert('Wrong user name or password!');
      });
    }
  }

});
