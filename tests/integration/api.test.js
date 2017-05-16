const request = require('supertest');
const app = require('../../index');

const agent = request.agent(app);

describe('API', () => {
  describe('users list', () => {
    it('returns list of users', () => {
      return agent
        .get('/api/v1/users')
        .expect(200)
        .then(responose => {
          expect(responose.body).toEqual([]);
        })
    });
  });

  describe('adding new user', () => {
    it('returns added user in response', () => {
      agent
        .post('/api/v1/users')
        .set('Accept', 'application/json')
        .send({
          username: 'pgol',
          email: 'pgol@pgol.pl'
        })
        .expect(200)
        .then(response => {
          console.log(response);
        });
    })
  })

});
