// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const aSet = new Set()

    for (let num of A) {
	    aSet.add(num)
    }

    return aSet.size;
}
