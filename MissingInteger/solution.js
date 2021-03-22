function solution(A) {
  const intMap = {}

  var present =[]

  for (let x = 0;x < A.length + 1; x++) {
    present.push(0);
  }

  A.forEach(num => {
    if ((num > 0) && (num < present.length)) {
      console.log(num);
      present[num] = 1
    }
  })
  console.log(present);

  for (let i = 1;i < present.length; i++) {
      if (present[i] === 0) {
        return i;
      }
  }
  return present.length

}
