const b = customLoadModule("./math");

console.log(b);

function customLoadModule(path) {
  const fs = require("fs");
  const vm = require("vm");

  const fileContent = fs
    .readFileSync(path.endsWith(".js") ? path : `${path}.js`)
    .toString();

  return (function (send) {
    const contextObject = vm.createContext({ send, console, customLoadModule });
    // your code lives here
    // vm.runInNewContext(fileContent, { send, console, customLoadModule });
    vm.runInNewContext(fileContent, contextObject);
    // eval(fileContent); // execute js code which is provided in string
    return send;
  })({});
}
