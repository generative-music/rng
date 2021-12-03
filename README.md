# @generative-music/rng

A collection of utilities related to random number generators.

## Installation

```bash
npm install @generative-music/rng
```

## Usage

```javascript
import {
  getRandomNumberBetween,
  getRandomIntegerBetween,
  getRandomElementOf,
  shuffleArray,
  createSeedableRng,
} from '@generative-music/rng';

const randomFrequency = getRandomNumberBetween(50, 20000);
console.log(randomPercent); // can be any value between 50 (inclusive) and 20000 (exclusive), including decimals (e.g. "100.12345")

const randomNumberOfSemitones = getRandomIntegerBetween(0, 13);
console.log(randomNumberOfSemitones); // can be any integer between 0 (inclusive) and 13 (exclusive)

const notes = ['A2', 'A#2', 'B2', 'B#2', 'C2'];
const randomNote = getRandomElementOf(notes);
console.log(randomNote); // can be any one of the notes above

const melody = shuffleArray(notes);
console.log(melody); // an array like "notes" above but probably in a different order (e.g. ['A#2', 'B2', 'A2', 'C2', 'B#2'])

const seed = '0xabcdef0123456789';
const rng = createSeedableRng(seed);
const randomNumber = rng(); // rng behaves just like Math.random, except it will always return the same sequential results given the same seed
console.log(randomNumber);

// all other functions accept an optional last parameter object, which may contain a custom random number generator function.
// this is useful if you need the same sequential results, e.g. a system which should produce the same output on every execution for some input seed
const seededRandomFrequency = getRandomNumberBetween(50, 20000, { rng });
const seededRandomNumderOfSemitones = getRandomIntegerBetween(0, 13, { rng });
const seededRandomNote = getRandomElementOf(notes, { rng });
const seededMelody = shuffleArray(notes, { rng });
```
