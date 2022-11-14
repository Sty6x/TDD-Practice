import {encrypt} from '../caesarCipher'

test('Shift must be 1', ()=>{
  expect(encrypt('word',1)).toBe('xpse')
})
test('Shift must be 2', ()=>{
  expect(encrypt('word',2)).toBe('yqtf')
})
test('Shift must be 10', ()=>{
  expect(encrypt('word',10)).toBe('cy?n')
})

