const getRandomNumberBetween = (min, max, { rng = Math.random } = {}) =>
  rng() * (max - min) + min;

export default getRandomNumberBetween;
