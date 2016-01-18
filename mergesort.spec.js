describe('merge two sorted arrays', function(){
    it('is able to merge two sorted arrays', function(){
      expect( merge( [1,3,5],[2,4,6] ) ).toEqual( [1,2,3,4,5,6] );
    });
});


describe('Split Array function', function() {
  
  it('is able to split an array of even length into equal halves', function() {
    expect( split([1,2,3,4])).toEqual([[1,2],[3,4]]); 
  });
  
  it('is able to split an array of odd length into two unequal halves, with the extra item in the first array', function() {
    expect( split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
  });

});

describe('Merge sort function', function() {
  
  it('is able to sort an empty array', function () {
    expect( mergeSort( [] )).toEqual( [] );
  });

  it('is able to sort an array with 1 element', function() {
    expect( mergeSort( [1] )).toEqual( [1] );
  });

  it('is able to sort an array with 2 elements', function() {
    expect( mergeSort( [2,1] )).toEqual( [1,2] );
  });

  it('is able to sort arrays with even lengths', function() {
    expect( mergeSort( [3,2,6,4] )).toEqual( [2,3,4,6] );
    expect( mergeSort( [5,3,7,4,8,1] )).toEqual( [1,3,4,5,7,8] );
  });

  it('is able to sort arrays with odd lengths', function() {
    expect( mergeSort( [5,3,2,6,4] )).toEqual( [2,3,4,5,6] );
    expect( mergeSort( [9,5,3,7,4,8,1] )).toEqual( [1,3,4,5,7,8,9] );
  });

});