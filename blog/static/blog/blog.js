for (let i=0;i<10;i+=1){
  console.log('for loop i: '+i)
}

let j=0
while(j<10){
  console.log('while loop j: '+j)
  j+=1
}

let k=0
do{
  console.log('do while k: '+k)
  k+=1
}while(k<10)

const numbers=[0,1,2,3,4,5,6,7,8,9]
numbers.forEach(value=>{
  console.log('for each value '+value)
})

const doubled=numbers.map(value=>value*2)
console.log('here are the doubled numbers')
console.log(doubled)