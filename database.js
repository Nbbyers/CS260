const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAMESIMON;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const driveCollection = client.db('startup').collection('drives');

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addDrive(drive) {
  driveCollection.insertOne(drive);
}

function getDrives() {
  //const userName = localStorage.getItem('userName');
  const query = {};
  const options = {
    sort: { time: -1 },
    limit: 10,
  };
  const cursor = driveCollection.find(query, options);
  return cursor.toArray();
}

function getRides() {
  //const userName = localStorage.getItem('userName');
  const query = {};
  const options = {
    sort: { time: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addDrive,
  getDrives,
  getRides,
};
