import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  direction: DS.attr('string'),
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr(),
});
