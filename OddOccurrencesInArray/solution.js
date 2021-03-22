// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Codility results: https://app.codility.com/demo/results/trainingU2FQPQ-7Y4/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

	const charMap = {}

    for (let i= 0; i < A.length; i++) {
    	 if (charMap[A[i]]) {
         charMap[A[i]]++
       } else {
       	 charMap[A[i]] = 1
       }
    }

    for (let char in charMap) {
       if ((charMap[char] % 2) !== 0)
         return +char
    }

}
