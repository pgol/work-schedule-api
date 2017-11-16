describe('usersController', () => {
  const usersServiceMock = {
    getUsers: jest.fn(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve('users'), 500);
      });
    })
  };

  const reqMock = {};
  const resMock = {
    json: jest.fn()
  };

  const initUsersController = require('../../controllers/users-controller');
  const usersController = initUsersController({
    usersService: usersServiceMock
  });

  describe('getUsers', () => {
    it('sends back json response', () => {
      expect.assertions(1);
      return usersController.getUsers(reqMock, resMock).then(() => {
        return expect(resMock.json).lastCalledWith('users');
      });
    });

    it('calls method form service', () => {
      usersController.getUsers(reqMock, resMock);
      expect(usersServiceMock.getUsers).toBeCalled();
    });
  });
});
