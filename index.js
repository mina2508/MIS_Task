//Task 1
function sumMatrix(matrix) {
  const rowSum = [];
  const columnSum = [];
  matrix.forEach((sub, i) => {
    sub.forEach((num, index) => {
      if (columnSum[index]) {
        columnSum[index] += num;
      } else {
        columnSum[index] = num;
      }
      if (rowSum[i]) {
        rowSum[i] += num;
      } else {
        rowSum[i] = num;
      }
    });
  });
  console.log(rowSum);

  console.log(columnSum);
}
const matrix = [
  [1, 4, 2],
  [1, 3, 5],
  [6, 3, 4],
];
sumMatrix(matrix);
/******************************************* */
//Task2
let scores = [2, 5, 3, 4, 1];
const formTeams = (scores) => {
  const teams = [];
  scores.forEach((num, index) => {
    for (let i = index + 1; i < scores.length; i++) {
      const iElem = scores[i];
      for (let j = i + 1; j < scores.length; j++) {
        const jElem = scores[j];

        if (num > iElem && iElem > jElem) {
          teams.push([num, iElem, jElem]);
        }
        if (num < iElem && iElem < jElem) {
          teams.push([num, iElem, jElem]);
        }
      }
    }
  });
  return teams.length;
};
console.log(`Number of teams is ${formTeams(scores)}`);
