// const arrayBuffer = new ArrayBuffer(1, { maxByteLength: 20 });
// const array1 = arrayBuffer.transfer();
// const array2 = array1.transferToFixedLength();

// const dataView = new DataView(arrayBuffer);
// dataView.setInt8(0, 1);

// console.log(dataView);

const a = new ArrayBuffer(4);
const view = new DataView(a);
view.setInt8(0, 80); // decimal
view.setInt8(1, 0b1010000); // binary
view.setInt8(2, 0x50); // hex
view.setInt8(3, 0o120); // octal => octal can be written only writing 0 as well but in strict mode we do 0o

console.log(a);
