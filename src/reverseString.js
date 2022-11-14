export function reverseString(word){
 let newS ='' 
 let i = word.length;
  while(i !== 0){
    i--;
    newS += word[i]
  }
  return newS
}
