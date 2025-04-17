/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanStrArry = s.split("");

  let romanIntArr = [];
  // console.log(romanStrArry)
  romanStrArry.forEach((element) => {
    console.log(element);
    switch (element) {
      case "I":
        return romanIntArr.push(1);

      case "V":
        return romanIntArr.push(5);

      case "X":
        return romanIntArr.push(10);
      case "L":
        return romanIntArr.push(50);
      case "C":
        return romanIntArr.push(100);
      case "D":
        return romanIntArr.push(500);
      case "M":
        return romanIntArr.push(1000);

      default:
        return element;
    }
  });
  console.log(romanIntArr)
  let romanTotalled = romanIntArr.reduce((acc, item, index, arr)=>{
    let nextItem = arr[index+1]
    console.log(nextItem + "index" + index)
    if(nextItem > item){
        console.log(`Math is ${acc} + (${nextItem} - ${item})`)
        return acc - item
    } else if (nextItem <= item || nextItem == undefined){
        console.log(`Math is ${acc} + ${item}`)
        return acc + item
    }
    
    
   

  },0)
  
  return romanTotalled;
};

console.log(romanToInt("XXVII"))
console.log(romanToInt("MCMXCIV"));
