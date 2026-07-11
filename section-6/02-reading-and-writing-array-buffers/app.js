const arrayBuffer = new ArrayBuffer(1, { maxByteLength: 20 });
const array1 = arrayBuffer.transfer();
const array2 = array1.transferToFixedLength();

// const dataView = new DataView(arrayBuffer);
// dataView.setInt8(0, 1);

// console.log(dataView);
