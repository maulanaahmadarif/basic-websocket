const expect = require('expect');

const Users = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Lobby'
    }, {
      id: 2,
      name: 'Tyson',
      room: 'Ring'
    }, {
      id: 3,
      name: 'Abraham',
      room: 'Ring'
    }]
  });

  it('should add new user', () => {
    const users =  new Users();
    const user = {
      id: 123,
      name: 'Arif',
      room: 'Lobby'
    }
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should remove a user', () => {
    const userId = 1;
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = 4;
    const user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = 2;
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = 4;
    const user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for ring room', () => {
    const userList = users.getUserList('Ring');

    expect(userList).toEqual(['Tyson', 'Abraham'])
  })
})