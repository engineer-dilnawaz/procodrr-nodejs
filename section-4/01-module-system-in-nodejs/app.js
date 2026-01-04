var num = 101; // local scope even if var is used

num2 = 201; //this adds into global scope
globalThis.num3 = 202; //this is imperatively added

console.log(num);
