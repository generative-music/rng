import getRandomNumberBetween from './get-random-number-between.js';

const getRandomIntegerBetween = (min, max, { rng = Math.random } = {}) =>
  Math.floor(getRandomNumberBetween(min, max, { rng }));

export default getRandomIntegerBetween;
