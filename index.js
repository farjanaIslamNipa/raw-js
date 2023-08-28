function getCommon(a, b) {
    let arr1 = a.sort((a, b) => (a - b));                    
    let arr2 = b.sort((a, b) => (a - b));

    let common = [];                  
    let i = 0, j = 0;    
  
    while(i<arr1.length && j<arr2.length) {
      
      if(arr1[i] == arr2[j]) {        
        common.push(arr1[i]);
        i++;
        j++;
        console.log('common');
      }
      else if(arr1[i] < arr2[j]) {  
        i++; 
        console.log('arr1');                       
      }                             
      else {
        j++;
        console.log('arr2');    
      }
    }
    
    return common;
      
    }
  

  //  const makePairs = (object) => Object.keys(object).map((el) => [el, object[el]]);

  //  const makePairs =(object) => Object.keys(object).map(el => [el, object[el]])

  //  console.log(makePairs({ a: 1, b: 2 }));

  const myFunc = (obj) => {
    const objectKeys = Object.keys(obj);
    if(objectKeys.length === 0) return true;

    return !objectKeys.filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length;
     
  }
  console.log(myFunc({ a: undefined}));