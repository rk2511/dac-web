var env = process.env.NODE_ENV || 'development';

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// } else if (env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }

process.env.MONGODB_URI = 'mongodb://dac:just4fun@ds241055.mlab.com:41055/mymongo';