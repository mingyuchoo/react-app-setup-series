import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';
import { config } from '../config/config';


// http://docs.sequelizejs.com/en/latest/docs/getting-started/
const Conn = new Sequelize(
  config.postgreParams.database,
  config.postgreParams.username,
  config.postgreParams.password,
  {
    dialect: 'postgres',
    host: config.postgreParams.hostname
  }
);

const Person = Conn.define('person', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, validate: { isEmail: true } }
});

const Post = Conn.define('post', {
  title: { type: Sequelize.STRING, alowNull: false },
  content: { type: Sequelize.STRING, allowNull: false }
});

// Relations
Person.hasMany(Post);
Post.belongsTo(Person);

// 테스트하는 동안 적용 안 하는 걸로...
//
// Conn.sync({ force: true })
// .then(() => {
//   _.times(10, () => {
//     return Person.create({
//       firstName: Faker.name.firstName(),
//       lastName: Faker.name.lastName(),
//       email: Faker.internet.email()
//     }).then(person => {
//       return person.createPost({
//         title: `Sample post by ${person.firstName}`,
//         content: 'here is some content'
//       })
//     })
//   })
// })

export default Conn;
