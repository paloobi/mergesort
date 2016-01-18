function merge(arr1,arr2) {
  var sortedArray = [];

  while (arr1.length > 0 && arr2.length > 0) {
 
    sortedArray.push((arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift());

  }

  sortedArray = (arr1.length === 0 ? sortedArray.concat(arr2) : sortedArray.concat(arr1));

  return sortedArray;
}


function split(wholeArray) {

  var length = Math.round(wholeArray.length / 2);

  var firstHalf = wholeArray.slice(0,length);
  var secondHalf = wholeArray.slice(length);
  
  return [firstHalf, secondHalf];
}

function mergeSort(arr) {

  if (arr.length === 0 || arr.length === 1) {
    return arr;
  // } else
  // if (arr.length === 2) {
    // var toMerge = split(arr);
    // return merge( toMerge[0], toMerge[1] );
  } else {
    // split the array in half
    // take each half and run merge sort on it
    var toMerge = split(arr);
    return merge( mergeSort( toMerge[0] ), mergeSort(toMerge[1]) );
  }
  //   // merging arrays that are length 1+ together

  // }

}