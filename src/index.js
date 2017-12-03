const a = () => {
  alert(1)
}

let arr = [1,2,3]
arr = arr.map(el => ++el)

let other = {a:1}
let another = {b: 1}

Object.assign(other, another)

let abc = new Promise((resolve) => {
  setTimeout(function() {
    resolve()
  }, 1000);
})