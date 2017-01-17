import Ember from 'ember';

export default Ember.Object.extend({
  // Create a new authorization.
  // When your code calls `this.get('torii').open('application', options)`,
  // the `options` will be passed to this provider's `open` method.

  serverTokenEndpoint: "http://mindfishapp.mtndogdevelopment.com/oauth1/authorize",

  open: function(options) {
      // resolve with an authorization object

      var client_id = '6hnsKjjAdbtj';
      var client_secret = 'NGXfmyYfAALZGYbJ2a1C3hw088MmyDBlMfAPbHaJYaxZSMdH';

      var responseData = Ember.$.ajax({
        url: this.serverTokenEndpoint,
        type: 'POST',
        data: options,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        crossDomain: true,
        /*header: {
          Authorization: "Basic " + btoa(client_id + ":" + client_secret)
        }*/
      }, {
        success: function(response) {
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
          }
      });
      debugger;
      console.log(responseData.get(responseText));
      return responseData.get(responseText);
    }
});