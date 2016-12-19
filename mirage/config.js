export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '/api';

  this.get('/questions', function() {
    return {
      data: [{
        type: 'questions',
        id: '1',
        attributes: {
          directions: 'What is 2 + 2?',
          correctAnswer: 4,
          option1: 2,
          option2: 3,
          option3: 4,
          option4: 5
        }
      }, {
        type: 'questions',
        id: '2',
        attributes: {
          directions: 'What is 2 + 3?',
          correctAnswer: 5,
          option1: 2,
          option2: 3,
          option3: 4,
          option4: 5
        }
      }, {
        type: 'questions',
        id: '3',
        attributes: {
          directions: 'What is 2 + 6?',
          correctAnswer: 6,
          option1: 2,
          option2: 3,
          option3: 4,
          option4: 6
        }
      }]
    };
  });
}
