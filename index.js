module.exports = function(num, max){
  max = max || 100
  if(typeof(num)==='string'){
    num += num.charAt(num.length-1)=='%' ? '' : '%'
    return num
  }
  var percent = Math.round((num/max)*100)
  percent = isNaN(percent) ? 0 : percent
  return percent + '%'
}