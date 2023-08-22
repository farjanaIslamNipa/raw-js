function myFunction(a, b) {
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
  

  console.log(myFunction([1, 9, 3, 5], [ 6, 2, 3, 4, 7, 9]));