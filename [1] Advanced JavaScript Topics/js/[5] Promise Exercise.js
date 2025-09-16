fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.error(err);
  });
// ===========================================================================
try {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
} catch (err) {
  console.error(err);
}

const numbers = [1, 2, 3, 4, 5];

console.log(...numbers);
