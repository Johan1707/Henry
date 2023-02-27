'use strict';

const BinarioADecimal = (num) => num.split('').reverse().reduce((accumulator, value, index) => value === '0' ? accumulator + 0 : Math.pow(2, index) + accumulator, 0)

const DecimalABinario = (num) => {   
   let result = num
   const binario = []

   while(result != 1) {      
      binario.push(result % 2)
      result = Math.trunc(result / 2)      
   }

   binario.push(1)

   return binario.reverse().join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
