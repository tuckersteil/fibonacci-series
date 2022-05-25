function fibonacci(num) {
  if(num === 0){
    return num
  }
  else if (num === 1){
    return num
  }
  else{
      let array = []
  for (let i = 0; i < num; i++){
    array.push(i - 0)
  }
  let newA = []
  for(let i = 0; i < array.length; i++){
    if(array[i] === array[0]){
      array[i] = 0
      newA.push(array[i])
    } 
    else if(array[i] === array[1]){
      array[i] = 1
      newA.push(array[i])
    }
    else{
      array[i] = array[i-1] + array[i-2]
      newA.push(array[i])
    }
   }
    return (newA[newA.length - 1] + newA[newA.length - 2])
  }  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));
  
  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
