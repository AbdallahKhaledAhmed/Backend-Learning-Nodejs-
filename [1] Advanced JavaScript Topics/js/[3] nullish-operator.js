function sayHello(name) {
  console.log(`Hello ${name || "Dear"}`); // the operator || works with  [ undefined, null, 0 ]
  console.log(`Hello ${name ?? "Dear"}`); // the operator ?? works with  [ undefined, null ]
}
sayHello();
