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