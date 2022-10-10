// grab the dom element in which i'll add the classes according to the case
const row = document.querySelector(".row");
// declare the variables for each innerHtml content
const fizzBuzz = "FizzBuzz";
const fizz = "Fizz";
const buzz = "Buzz";

// iterate for each number from 1 to 100
for (let i = 1; i <= 100; i++) {
  // create the div cell
  const cell = document.createElement("div");
  // add the class cell to it
  cell.classList.add("cell");

  // if i is a multiple of 3 and 5 then fizzbuzz into cell
  if (i % 3 === 0 && i % 5 === 0) {
    // add the according class to cell
    cell.classList.add("fizz-buzz");
    cell.innerHTML = fizzBuzz;
    row.append(cell);
    console.log(fizzBuzz);
  } else if (i % 3 === 0 && !(i % 5 === 0)) {
    // if i is a multiple of 3  but not of 5 then fizz into cell
    cell.classList.add("fizz");
    cell.innerHTML = fizz;
    row.append(cell);
    console.log(fizz);
  } else if (i % 5 === 0 && !(i % 3 === 0)) {
    // if i is a multiple of 5  but not of 3 then buzz into cell
    cell.classList.add("buzz");
    cell.innerHTML = buzz;
    row.append(cell);
    console.log(buzz);
  } else {
    // if i is not a multiple of 5 or 3 then i into cell
    cell.innerHTML = i;
    row.append(cell);
    console.log(i);
  }
}
