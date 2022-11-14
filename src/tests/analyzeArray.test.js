import {analyzeArray} from '../analyzeArray'

test('Should return an object that contains: min, max, average and length',()=>{
expect(analyzeArray([23,51,63,32,31,55])).toStrictEqual( {min: 23,max: 63, average: 43, length: 6})})
