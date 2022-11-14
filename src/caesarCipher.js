let a = 'abcdefghijklmnopqrstuvwxyz!?,.'
console.log(a.length)
function translatetoNum(x) {
  let translated = []
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (x[i] == a[j]) {
        translated.push(j)
      }
    }
  }
  return translated
}
export function encrypt(x,k) {
  let translatedLet = translatetoNum(x)
  let shift = translatedLet.map((letter) => {
    return letter + k 
  })
  let encryptedWord = '';
  for (let i = 0; i < shift.length; i++) {
    if(shift[i] > a.length){
      encryptedWord += a[shift[i] - a.length]
    }else{
      encryptedWord += a[shift[i]]
    }
  }
  return encryptedWord
}

