describe('first test suite', function () {
  it('should work', function () {
    expect(true).toEqual(true);
  });

  it('should work again', function () {
    expect(true).toEqual(true);
  });

});

describe('equality test suite', function () {
  it('should check for equal values', function () {
    expect(5).toEqual(5);
  });

  it('should check for equal values using deep equality', function () {
    // [] === [] : false
    expect({ foo: 5}).toEqual({foo: 5});
    expect([1,2,3]).toEqual([1,2,3]);
    expect([1,2,3]).toContain(2);
  });

  it('should check that an array contains a specific object/array', function () {
    // expect([{foo: 5}]).toContain({foo: 5}); // false - check by value
    expect([{foo: 5}]).toContainEqual({foo: 5});
  })
});

describe('mock functions test suite', function () {
  it('should support spies', function () {
    const spy = jest.fn();
    spy('foo');
    expect(spy).toHaveBeenCalledWith('foo');
  });
});

