// set NODE_ENV to test
process.env.NODE_ENV = 'test';

// requiring jest
const jest = require('jest');

// get arg from cmd
const argv = process.argv.slice(2);

// running jest passing the argments
jest.run(argv);
