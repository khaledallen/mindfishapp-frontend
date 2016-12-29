import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'wp-json/wp/v2',
  host: 'http://mindfishapp.mtndogdevelopment.com'
});
