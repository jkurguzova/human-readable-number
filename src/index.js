module.exports = function toReadable (num) {
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let numStr = num.toString();
  if (num == 0) {
      return 'zero';
  } else if (num < 20) {
      return ones[num];
  } else if (numStr.length == 2 && numStr[1] === '0') {
      return tens[numStr[0]];
  } else if (numStr.length == 2 && numStr[1] !== '0') {
      return tens[numStr[0]]+' '+ ones[numStr[1]];
  } else if (numStr.length == 3) {
      if (numStr[1] === '0' && numStr[2] === '0') {
        return ones[numStr[0]] + ' hundred';
      } else {
      return ones[numStr[0]] + ' hundred ' + toReadable(+(numStr[1] + numStr[2]));
    }
  }
}

