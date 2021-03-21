// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Codility results: https://app.codility.com/demo/results/trainingERQFSM-56C/

function getShift(shift, A) {
  if (shift >= A.length) {
    shift = shift - (A.length)
  }
  return (shift >= A.length) ? getShift(shift, A) : shift
}

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (A.length === K) {
        return A;
    }

    const shifted = A.slice(0);
    let index = 0;
    let shift = 0;
    while (index < A.length) {
      shift = index + K
      shift = getShift(shift, A);
      shifted[shift] = A[index]
      index++
    }

    return shifted
}
