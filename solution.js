/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let numberOfTimes = 0;
  let result;
  return function (...args) {
    if (numberOfTimes >= n) {
      return result;
    } else {
      numberOfTimes++;
      result = func.apply(this, args);
      return result;
    }
  };
}
