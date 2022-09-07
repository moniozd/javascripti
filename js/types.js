function out(any) {console.log(any)}

function showTypes(lst){
  out('START Showing Types')
  for (const obj of lst){
    out(obj + " is of the type=" + typeof obj)
  }
}
let arr = [1,2]
out(arr)

arr = [1,5,'hello',5.5,4>3,{firstName:'Erik'}]
out(arr)

showTypes((arr))
out('hello there')

let aa
arr.push(aa)
showTypes(arr)
