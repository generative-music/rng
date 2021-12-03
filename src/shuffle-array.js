const shuffleArray = (arr = [], { rng = Math.random } = {}) => {
  const remainingElements = arr.slice();
  return arr.map(
    () =>
      remainingElements.splice(
        Math.floor(rng() * remainingElements.length),
        1
      )[0]
  );
};

export default shuffleArray;
