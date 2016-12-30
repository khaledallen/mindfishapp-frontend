import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(), //Does not need to be a number
  direction: DS.attr('string'),
  categories: DS.attr(), //We want this to return an array (e.g. DS.attr(array),) if possible
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr(),
});
