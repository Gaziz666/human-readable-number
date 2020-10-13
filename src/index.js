module.exports = function toReadable (number) {
  const str = String(number)
  const arr = str.split('');
  const length = arr.length;
  let result = ''

  const decimalF = number => {
    switch (number) {
      case '0':
        return 'zero'
      case '1':
        return 'one'
      case '2':
        return 'two'
      case '3':
        return 'three'
      case '4':
        return 'four'
      case '5':
        return 'five'
      case '6':
        return 'six'
      case '7':
        return 'seven'
      case '8':
        return 'eight'
      case '9':
        return 'nine'
      default:
    }
  }

  const tenthsF = (number1, number2) => {
    if(number1 === '1') {
      switch (number2) {
        case '0':
            return 'ten'
        case '1':
            return 'eleven'
        case '2':
            return 'twelve'
        case '3':
            return 'thirteen'
        case '4':
            return 'fourteen'
        case '5':
            return 'fifteen'
        case '6':
            return 'sixteen'
        case '7':
            return 'seventeen'
        case '8':
            return 'eighteen'
        case '9':
            return 'nineteen'
        default:
            break;
      }
    }

    switch (number1) {
      case '2':
        return 'twenty'
      case '3':
        return 'thirty'
      case '4':
        return 'forty'
      case '5':
        return 'fifty'
      case '6':
        return 'sixty'
      case '7':
        return 'seventy'
      case '8':
        return 'eighty'
      case '9':
        return 'ninety'
      default:
        break;
    }
  }

const decimalNumber = (tenths, decimal) => {
  if (tenths === '1' || decimal === '0') {
    return tenthsF(tenths, decimal)
  } else if (tenths === '0') {
      return decimalF(decimal)
  }
    return `${tenthsF(tenths, decimal)} ${decimalF(decimal)}`
}


  if (length === 1) {
    return decimalF( arr[0])
  } else if (length === 2) {
    return decimalNumber(arr[0], arr[1])
  } else if (length === 3 && arr[1] === '0' && arr[2] === '0') {
      return `${decimalF( arr[0])} hundred`
  } else if (length === 3) {
      return `${decimalF( arr[0])} hundred ${decimalNumber(arr[1], arr[2])}`
  }
  
}
