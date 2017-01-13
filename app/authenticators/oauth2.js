import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: "http://mindfishapp.mtndogdevelopment.com/oauth1/authorize",


  makeRequest(url, data) {

    var client_id = '6hnsKjjAdbtj';
    var client_secret = 'NGXfmyYfAALZGYbJ2a1C3hw088MmyDBlMfAPbHaJYaxZSMdH';
    data.grant_type = 'password';

    console.log('After variables set');

    return Ember.$.ajax({
      url: this.serverTokenEndpoint,
      type: 'POST',
      data: data,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      crossDomain: true,
      header: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret)
      }
    });
  }
});
