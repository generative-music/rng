const getRandomElementOf = (arr = [], { rng = Math.random }) =>
  arr[Math.floor(rng() * arr.length)];

export default getRandomElementOf;
