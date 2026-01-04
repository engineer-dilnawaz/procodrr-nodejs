import { num } from "./math.js";

console.log(import.meta);

import.meta.userName = "Dilnawaz";
const { filename, dirname, userName } = import.meta;

console.log(filename, dirname, userName);
