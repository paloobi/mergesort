function bubbleSort(arr) {

  var result = arr.slice();

  if (arr.length <= 1) {
    return arr;
  }

  while (true) {
    var swapped = 0;
    for (var i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i+1]) {
        swapped++;
        var small = Math.min(result[i], result[i+1]);
        var large = Math.max(result[i], result[i+1]);
        result[i] = small;
        result[i+1] = large;
      }
    }
    
    if (swapped === 0) {
        break;
    }
  }

  return result;
}