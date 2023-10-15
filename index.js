// function getCommon(a, b) {
//     let arr1 = a.sort((a, b) => (a - b));                    
//     let arr2 = b.sort((a, b) => (a - b));

const { boolean } = require("yargs");

//     let common = [];                  
//     let i = 0, j = 0;    
  
//     while(i<arr1.length && j<arr2.length) {
      
//       if(arr1[i] == arr2[j]) {        
//         common.push(arr1[i]);
//         i++;
//         j++;
//         console.log('common');
//       }
//       else if(arr1[i] < arr2[j]) {  
//         i++; 
//         console.log('arr1');                       
//       }                             
//       else {
//         j++;
//         console.log('arr2');    
//       }
//     }
    
//     return common;
      
//     }
  // ----------------------------------------------

  // 
// function myFunc(obj, ...args){
//   const newObject = { ...obj };

//   args.forEach((arg) => {
//     delete newObject[arg];
//   });

//   return newObject;
// }
// console.log(myFunc({ a: 1, b: 2 }, 'b'));


function isPositive(a) {
    try{
      if(a <= 0){
        throw new Error(a === 0 ? 'Zero Error' : 'Negative Error')
      } 
      else return 'YES'
    }catch(e){
      return e.message
    }
}
console.log(isPositive(5));


