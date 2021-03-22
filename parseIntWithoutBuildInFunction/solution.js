
// Original First Thought
function stringtoIntCheat(num) {
   return (+num);
}

// If  you know the "secret sauce" or approach the implementation is easy,
function stringtoInt(str) {
  let num = 0;
  const zero = 48

  for (let char of str) {
    num = (num * 10) + (char.charCodeAt(0) - zero);
    //console.log(num);
  }
  return num;
}
