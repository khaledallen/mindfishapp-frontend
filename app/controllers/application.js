import Ember from 'ember';
import api from 'wordpress-rest-api-oauth-1';

export default Ember.Controller.extend({



  auth: Ember.inject.service('session'),
  actions: {

    signIntoWP() {

      /*var options = {username: 'ember', password: 'password'};
        this.get('auth').authenticate('authenticator:torii', 'mindfish', options).then( () => {
          alert('Thanks for logging in!');
          this.get('transition')();
        }, () => {
          alert('Meep!');
        });

    }*/
      const wpapi = new api({
          url: 'http://mindfishapp.mtndogdevelopment.com/oauth1/authorize',
          credentials: {
              client: {
                  public: '6hnsKjjAdbtj',
                  secret: 'NGXfmyYfAALZGYbJ2a1C3hw088MmyDBlMfAPbHaJYaxZSMdH'
              }
          }
      });

      wpapi.authorize().then( function() {
        console.log( 'All API requests are now authenticated.' )
      });
    },

    logout() {
      this.get('auth').invalidate();
    }
  }
});
