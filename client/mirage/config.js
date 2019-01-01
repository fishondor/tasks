export default function() {

  this.namespace = '/api';

  this.get('/tasks', function() {
    let tasks = [{
      id: 0,
      name: "משימה A",
      done: "false"
    }, {
      id: 1,
      name: "משימה B",
      done: "false"
    }, {
      id: 2,
      name: "משימה C",
      done: "true"
    }, {
      id: 3,
      name: "משימה D",
      done: "false"
    }];
    return {
      data: tasks.map(attrs => (
        {type: 'tasks', id: attrs.id, attributes: attrs }
      ))
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
