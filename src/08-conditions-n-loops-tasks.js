/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) { return 'FizzBuzz'; }
  if (num % 5 === 0) { return 'Buzz'; }
  if (num % 3 === 0) { return 'Fizz'; }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 0) { return 1; }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let start = n1;
  let sum = 0;
  do {
    sum += start;
    start += 1;
  } while (n2 >= start);
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) { return true; }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let baseRect;
  let secRect;
  const square1 = rect1.width * rect1.height;
  const square2 = rect2.width * rect2.height;
  if (square1 === square2) {
    if (rect1.width > rect2.width) {
      baseRect = rect1;
      secRect = rect2;
    } else {
      baseRect = rect2;
      secRect = rect1;
    }
  } else if (square1 > square2) {
    baseRect = rect1;
    secRect = rect2;
  } else if (square2 > square1) {
    baseRect = rect2;
    secRect = rect1;
  }
  const exampleRect = {
    x1: baseRect.left,
    x2: baseRect.left + baseRect.width,
    y1: baseRect.top,
    y2: baseRect.top + baseRect.height,
  };
  const vertex = {
    topLeft: { x: secRect.left, y: secRect.top },
    topRight: { x: secRect.left + secRect.width, y: secRect.top },
    botLeft: { x: secRect.left, y: secRect.top + secRect.height },
    botRight: { x: secRect.left + secRect.width, y: secRect.top + secRect.height },
  };
  let compareX = false;
  let compareY = false;
  const key = Object.keys(vertex);
  for (let i = 0; i < key.length; i += 1) {
    compareX = false;
    compareY = false;
    if (vertex[key[i]].x >= exampleRect.x1 && vertex[key[i]].x <= exampleRect.x2) {
      compareX = true;
    }
    if (vertex[key[i]].y >= exampleRect.y1 && vertex[key[i]].y <= exampleRect.y2) {
      compareY = true;
    }
    if (compareX && compareY) { return true; }
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const dist = Math.sqrt(((circle.center.x - point.x) ** 2) + ((circle.center.y - point.y) ** 2));
  if (dist < circle.radius) { return true; }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const chars = new Map();
  const arr = Array.from(str.trim());
  arr.map((item) => {
    if (!chars.has(item)) {
      chars.set(item, [item]);
    } else {
      chars.get(item).push(item);
    }
    return item;
  });
  // eslint-disable-next-line
  for (const key of chars.keys()) {
    if (chars.get(key).length === 1) {
      return key;
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startInt = a < b ? a : b;
  const endInt = a === startInt ? b : a;
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${startInt}, ${endInt}${endBracket}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return Array.from(str.split('')).reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +Array.from(num.toString().split('')).reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const num = String(ccn);
  let nCheck = 0;
  let bEven = false;
  for (let n = num.length - 1; n >= 0; n -= 1) {
    const cDigit = num.charAt(n);
    let nDigit = parseInt(cDigit, 10);
    // eslint-disable-next-line
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  if (num < 10) return num;
  const numberOfn = String(num).length;
  const numbersofn = [];
  const p = 10;
  let newnumber = num;
  for (let i = 1; i <= numberOfn; i += 1) {
    numbersofn.push(newnumber % p);
    newnumber = Math.floor(newnumber / p);
  }
  let sum = 0;
  for (let i = 0; i < numbersofn.length; i += 1) {
    sum += numbersofn[i];
  }
  return getDigitalRoot(sum);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const array = Array.from(str);
  const brackets = ['(', ')', '[', ']', '{', '}', '<', '>'];
  const stack = [];

  if (array.length % 2 !== 0) { return false; }

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < brackets.length; j += 1) {
      if (array[i] === brackets[j] && (j === 0 || j % 2 === 0)) {
        stack.push(array[i]);
        // eslint-disable-next-line
      } else if (array[i] === brackets[j] && (j % 2 !== 0) && stack[stack.length - 1] === brackets[j - 1]) {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) { return true; }
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let commonPath = '';
  const [[...first], ...[...rest]] = [...pathes];
  let repeat = false;
  for (let i = 0; i < first.length; i += 1) {
    for (let j = 0; j < rest.length; j += 1) {
      if (rest[j][i] === first[i]) {
        repeat = true;
      } else {
        repeat = false;
        break;
      }
    }
    if (repeat) {
      commonPath += first[i];
    } else {
      break;
    }
  }
  if (!commonPath.endsWith('/') && commonPath.length !== 0) {
    const idx = commonPath.lastIndexOf('/');
    commonPath = commonPath.slice(0, idx + 1);
  }
  return commonPath;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const rowsFirstM = m1.length;
  const colsFirstM = m1[0].length;
  const rowsSecondM = m2.length;
  const colsSecondM = m2[0].length;
  const result = [];
  if (colsFirstM !== rowsSecondM) { return false; }
  for (let i = 0; i < rowsFirstM; i += 1) {
    result[i] = [];
  }
  for (let k = 0; k < colsSecondM; k += 1) {
    for (let i = 0; i < rowsFirstM; i += 1) {
      let t = 0;
      for (let j = 0; j < rowsSecondM; j += 1) {
        t += m1[i][j] * m2[j][k];
        result[i][k] = t;
      }
    }
  }
  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  let result;
  if (((position[0][0] === position[1][1] && position[0][0] === position[2][2])
      || (position[0][2] === position[1][1] && position[0][2] === position[2][0]))
      && position[1][1] !== undefined) {
    [, [, result]] = position;
  } else if (((position[0][0] === position[0][1] && position[0][0] === position[0][2])
      || (position[0][0] === position[1][0] && position[0][0] === position[2][0]))
      && position[0][0] !== undefined) {
    [[result]] = position;
  } else if (((position[1][0] === position[1][1] && position[1][0] === position[1][2])
      || (position[0][1] === position[1][1] && position[0][1] === position[2][1]))
      && position[1][1]) {
    [, [, result]] = position;
  } else if (((position[2][0] === position[2][1] && position[2][0] === position[2][2])
      || (position[0][2] === position[1][2] && position[0][2] === position[2][2]))
      && position[2][2] !== undefined) {
    [, , [, , result]] = position;
  }
  return result;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
