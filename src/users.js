const users = [
  {
    username: 'admin',
    password: 'admin',
    firstName: 'Min',
    age: 18,
    lastName: 'AD',
  },
  {
    username: 'qwerty',
    password: '123456',
    firstName: 'QWE',
    age: 33,
    lastName: 'RTY',
  },
];

export const auth = (username, password) => {
  console.log(username, 'USER JSON NAME');
  console.log(username, 'USER JSON PASSWORD');

  const results = users.filter(
    i => i.username.toLowerCase() === username.toLowerCase() && i.password === password,
  );
  console.log(results[0]);
  if (results.length === 0) {
    throw new Error('Not found');
  }
  delete results[0].password;
  return results[0];
};
