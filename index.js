// function getCommon(a, b) {
//     let arr1 = a.sort((a, b) => (a - b));                    
//     let arr2 = b.sort((a, b) => (a - b));

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
  var expect = function(val) {
    return {
      toBe: (val2) => {
        if(val2 !== val) throw new Error('Not Equal')
        else return true;
      },
      notToBe: (val2) => {
        if(val === val2) throw new Error('Equal')
        else return true;
      }
    }
 };

 console.log(expect(5).toBe(null));
 
 /**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
  */


