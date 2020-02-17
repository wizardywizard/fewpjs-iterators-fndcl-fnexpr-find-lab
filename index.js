const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){  
  let a = array.find(w => w.result === "W")
  if (!!a){
    console.log(a)
    console.log(!!a)
    return a.year
  }else{
    return undefined
  }
}