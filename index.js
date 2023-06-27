javascript
function sortStudents(students) {
   students.sort(function(a,b) {
  if (a["chemistry marks"] +
a["biology marks"] > b ["chemistry marks"] + b["biology marks"]) {
  return -1;
 } else if (a["chemistry marks"] + a["biology marks"] < b["chemistry marks"] + b["biology marks"]) {
  return 1;
 }
 if (a["biology marks"] > b["biology marks"]) {
   return -1;
 } else if (a["biology marks"] < b["biology marks"]) {
   return 1;
 }
 var aDob = new Date(a["date of birth"].split("-").reverse().join("-"));
 var bDob = new Date(b["date of birth"].split("-").reverse().join("-"));
 if (aDob > bDob) {
   return 1;
 } else if (aDob < bDob) {
   return -1;
 }
   return 0;
 });
   return students;
}