import DS from 'ember-data';

//TODO configure to match question custom post type

export default DS.Model.extend({
  answer: DS.attr('number'),
  direction: DS.attr('string'),
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr(),
});
