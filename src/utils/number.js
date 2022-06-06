function formatter (number,digit = 3) { //千位分隔符
  const numbers = number.toString().split('').reverse()
  const segs = []
  while (numbers.length) segs.push(numbers.splice(0, digit).join(''))
  return segs.join(',').split('').reverse().join('')
}
function toThousands(num,digit = 3) { //正则千位分隔符
    return (num || 0).toString().replace(/(\d)(?=(?:\d{digit})+$)/g, '$1,');
}