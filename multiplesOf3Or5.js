function solution(number){
  let newArr = []
  for (let i = 0; i < number; i++){
    if (i % 3 === 0 && i % 5=== 0){
      newArr.push(i)
    }else if ( i % 3 === 0){
      newArr.push(i)
    }else if(i % 5 === 0){
      newArr.push(i)
    }
  }
  let sum = newArr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0)
  return sum
}
