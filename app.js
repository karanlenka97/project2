const readline = require('readline');

const validUser = {
  username: 'admin',
  password: 'secret'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function login() {
  const username = await ask('Username: ');
  const password = await ask('Password: ');

  if (username === validUser.username && password === validUser.password) {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }

  rl.close();
}

login();
