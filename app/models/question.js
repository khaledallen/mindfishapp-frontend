import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
  answer: DS.attr(),
  direction: DS.attr('string'),
  options: DS.attr(),
});
