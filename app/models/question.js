import DS from 'ember-data';

export default DS.Model.extend({
  directions: DS.attr(),
  correctAnswer: DS.attr(),
  option1: DS.attr(),
  option2: DS.attr(),
  option3: DS.attr(),
  option4: DS.attr(),

  isCorrect(submittedAnswer){
    return submittedAnswer === this.get('correctAnswer');
  }
});
