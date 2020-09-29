
exports.min = function min(array) {
  if (array) {
    return array.sort(compare)[0] || [];
  }
  return []
}


exports.max = function max(array) {
  if (array) {
    return array.sort(compare)[array.length - 1] || [];
  }
  return []
}

exports.avg = function avg(array) {
  if (array) {
    return (array.reduce((a, b) => a + b, 0) / (array.length || 1)).toFixed(2);
  }
  return 0;
}

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}