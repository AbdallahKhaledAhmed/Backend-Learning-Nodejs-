// Promises is a  container for a future value
let myMood = "Very Good";
const p = new Promise((res, rej) => {
  if (myMood === "Good") {
    res("Very Nice");
  } else {
    rej("Come Later");
  }
});

// Usage :
// ============== First Way =================
p.then((res) => {
  console.log(`He Said ${res}`);
}).catch((res) => {
  console.log(`No Way He Said ${res}`);
});
// =============== Second Way ==============
try {
  const res = await p;
  console.log(res);
} catch (err) {
  console.error(err);
}
