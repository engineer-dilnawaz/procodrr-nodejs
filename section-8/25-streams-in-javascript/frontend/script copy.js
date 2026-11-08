const input = document.querySelector("input");

const decoder = new TextDecoder();

input.addEventListener("change", async () => {
  const file = input.files[0];
  // const fileText = await file.text();
  // console.log(fileText);
  const readStream = file.stream();

  // const reader = readStream.getReader();
  // while (true) {
  //   const { done, value } = await reader.read();
  //   if (done) {
  //     break;
  //   }
  //   console.log(decoder.decode(value));
  // }

  for await (const chunk of readStream) {
    console.log(decoder.decode(chunk));
  }
});
