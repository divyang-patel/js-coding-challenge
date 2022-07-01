const capitalize = (input) =>
  input
    .split("* ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("* ");

console.log(capitalize(
  "* media Costs è 652.7.↵* Product top è Minnki Pälsii con la media Costs uguale a 8.26k."
));