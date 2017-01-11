import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'wp-json/wp/v2',
  host: 'http://mindfishapp.mtndogdevelopment.com',
  authorizer: 'authorizer:application'
});
