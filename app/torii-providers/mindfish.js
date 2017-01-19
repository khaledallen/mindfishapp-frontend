import Ember from 'ember';

export default Ember.Object.extend({
  // Create a new authorization.
  // When your code calls `this.get('torii').open('application', options)`,
  // the `options` will be passed to this provider's `open` method.

  serverTokenEndpoint: "http://mindfishapp.mtndogdevelopment.com/oauth1/request",

  open: function(options) {
      // resolve with an authorization object

        var parameters = {
        oauth_consumer_key : '6hnsKjjAdbtj',
        oauth_nonce: nonce,
        oauth_version:1.0,
        oauth_timestamp : timestamp,
        oauth_signature_method : 'HMAC-SHA1'
      };

      var tokenSecret = null;
      var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);

        var responseData = Ember.$.ajax({
        url: this.serverTokenEndpoint,
        type: 'POST',
        data: {
          oauth_consumer_key: '6hnsKjjAdbtj',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_signature: signature,
          oauth_version:1.0,
          oauth_timestamp : timestamp,
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        crossDomain: true,
        header: {
          Authorization: "Basic " + btoa(consumerKey + ":" + consumerSecret)
        }
    });
    
  }
});
