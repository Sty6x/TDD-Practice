import * as calculator from '../calculator'

test('sum up the numbers',()=>{
  expect(calculator.add(12,3)).toBe(15)
})
test('divide the numbers',()=>{
  expect(calculator.divide(12,3)).toBe(4)
})
test('multiply the numbers',()=>{
  expect(calculator.multiply(12,3)).toBe(36)
})
test('subtract the numbers',()=>{
  expect(calculator.subtract(12,3)).toBe(9)
})
