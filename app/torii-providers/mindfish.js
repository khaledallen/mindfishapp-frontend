import Ember from 'ember';

export default Ember.Object.extend({
  // Create a new authorization.
  // When your code calls `this.get('torii').open('application', options)`,
  // the `options` will be passed to this provider's `open` method.

  serverTokenEndpoint: "http://mindfishapp.mtndogdevelopment.com/oauth1/request",

  open: function(options) {
      // resolve with an authorization object

      var client_id = '6hnsKjjAdbtj';
      var client_secret = 'NGXfmyYfAALZGYbJ2a1C3hw088MmyDBlMfAPbHaJYaxZSMdH';

      var timeStamp = Math.floor(new Date().getTime()/1000);

      var responseData = Ember.$.ajax({
        url: this.serverTokenEndpoint,
        type: 'POST',
        data: {
          oauth_consumer_key: '6hnsKjjAdbtj',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_signature: null,
          oauth_timestamp: timeStamp,
          oauth_nonce: null//TODO generate a random string
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        crossDomain: true,
        header: {
          Authorization: "Basic " + btoa(client_id + ":" + client_secret)
        }
    });
  }
});
