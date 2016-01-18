describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it('handles a single-item array', function() {
      expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('array returned has same length as input', function() {
      expect( bubbleSort( [1,2,3] ).length ).toEqual( 3 );
      expect( bubbleSort( [3,6,4,5,8] ).length ).toEqual( 5 );
    });

    it('sorts an array of numbers', function() {
      expect( bubbleSort( [3, 2, 6, 4] ) ).toEqual( [2, 3, 4, 6] );
      expect( bubbleSort( [6, 5, 4, 3] ) ).toEqual( [3, 4, 5, 6] );
    });

});