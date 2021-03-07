module.exports = function reverse (n) {
  let num = n.toString().split('')
  if (num[0] === "-") {
      num.shift()
  }
  num = num.reverse()

  while (num.lenth >= 1) {
    if (num[0] === "0") {
        num.shift()
    } else {
        break
    }
  }
  return parseInt(num.join(''))
}
