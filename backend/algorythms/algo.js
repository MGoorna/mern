// time complexity O(n^2)
// linear time complexity O(n)
// logaritmic time complexity O(logn)

// Factorial of a number
const factorial = (n) => {
  let result = 1;
  for(let i=2; i<n; i++){ result = result*i}
  return result
}

// Factorial of a number recursive
const factorialRecrsive = (n) => {
  if(i==0) return 1
  return n*factorialRecrsive(n-1)
}

// Prime number 
const primeNumber = (n) => {
  if(n<2) {return false}
  for (let i=2; i<n; i++){
    if( n%i == 0 )return true
  }
  return false
}

// Find duplicate elements in a given array

//Count duplicates
const arrDuplicate = ['May','April','July','Feb','April','July','Feb','July','Feb','April','July']
arrDuplicate.reduce((obj, month)=>{
  if(obj[month] == undefined){
    obj[month] = 1
    return obj
  }
  else {
    obj[month]++
    return obj
  }
})

//sort a number array
const unsort = [8,3,2,5,1,4]
unsort.sort((a,b) => a-b)

//max value
const arrMax = [828,12,55,49]
arrMax.reduce((prev,cur) => prev>cur ? prev : cur)

//unic element
const arrUnit = [1,3,4,5,5,4,6,8]
arrUnit.filter((element, index) => arrUnit.indexOf(element) == index)

// remove duplicate elements in a given array
const arr = [2,3,4,4,2,5,9,2,5,6,2,2]
const removeDuplicateElements = (arr) => {
  return arr.filter((element,index)=> arr.indexOf[element] == index)
}

// mul(2)(3)(4) function mul returns anonymous function which takes second parameter
function mul(x){
  return function (y) {
    return function(z) {
      return x*y*z
    }
  }
}

//add(2,3) add(2)(3)
const add = (x,y) => {
  if(y==undefined){
    return function(y){
      return x+y
    }
  }
  return x+y
}

// flattern([[1],[2,3],4])
function flattern(array){
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flattern(toFlatten) : toFlatten)
  })
}

//