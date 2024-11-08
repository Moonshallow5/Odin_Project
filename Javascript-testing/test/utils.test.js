import  { calculator,analyzeArray, caesarChiper, capitalise } from "../src/utils";

test('capitalize should capitalize the first letter of a string', () => {
    expect(capitalise('hello')).toBe('Hello');
    expect(capitalise('world')).toBe('World');
    expect(capitalise('')).toBe(''); // Edge case for empty string
  });

  test('add yhings',()=>{
    expect(calculator.add(2,3)).toBe(5)
    expect(calculator.add(3,5)).toBe(8)
  })
  test('subtract things',()=>{
    expect(calculator.subtract(3,5)).toBe(-2)
  })
  test('multiply things',()=>{
    expect(calculator.multiply(3,5)).toBe(15)
  })
  test('divide things',()=>{
    expect(calculator.divide(10,2)).toBe(5)
  })
  test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("cant divide by 0");
  });

  test('caesar chiper',()=>{
    expect(caesarChiper('xyz',3)).toBe('abc')
    expect(caesarChiper("Hello, World!", 3)).toBe('Khoor, Zruog!')
  })
  test('array things',()=>{

    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average:4,min:1,max:8,length:6})




  })


    



  