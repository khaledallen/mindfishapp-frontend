import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
  answer: DS.attr(),
  direction: DS.attr('string'),
  options: DS.attr(),
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr(),
});
