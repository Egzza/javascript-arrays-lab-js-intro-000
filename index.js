// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}

function appendKitten(name){
    var arr = kittens
    arr.concat(name)
    return arr
}

function prependKitten(name){

}

function removeLastKitten(name){

}

function removeFirstKitten(name){

}
