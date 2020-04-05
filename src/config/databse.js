require('../bootstrap');

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'postgres',
  dialectOptions: {
    ssl: true,
  },
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

// yarn sequelize db:migrate

// dialect: process.env.DB_DIALECT || 'postgres',
// host: process.env.DB_HOST,
// username: process.env.DB_USER,
// password: process.env.DB_PASS,
// database: process.env.DB_NAME,
// storage: './__tests__/database.sqlite',
// logging: false,
// define: {
//   timestamps: true,
//   underscored: true,
//   underscoredAll: true,
// },
// port: 5432,
// ssl: true,
