import DS from 'ember-data';

export default DS.Model.extend({
  directions: DS.attr(),
  correct: DS.attr(),
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr()
});
