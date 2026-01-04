// const timer = require('./timer.js') => common js
// import timer from './timer.js' => module js

// Common js vs. Es6

// Common JS Modules //
// Synchronous File Loading (loads and executes file on main thread)
// File exetnsion is optional
// file extension can be anything e.g. .abc .xyz .png (it executes file code if js)
// it is convention to add .cjs as extension
// it is optional to add "type": "commonjs" in package.json (as common js is default module system of Node.js)
// in cjs 'this' keyword points to module.exports by default
// cjs imports aren't hoisted
// await cannot be used outside of async function
// only one value can be exported

////////////////////////////

// ES6 JS Modules //
// Asynchronous File Loading (loads file in different thread and execute on main thread)
// File exetnsion is mandatory
// file extension can be only be .js or .mjs
// it is convention to add .mjs as extension
// it is mandatory to add "type": "module" in package.json
// in mjs 'this' keyword is undefined
// mjs imports are hoisted
// await can be used outside of async function - top level await is allowed
// can be exported multiple values, one export default and unlimitted named exports
