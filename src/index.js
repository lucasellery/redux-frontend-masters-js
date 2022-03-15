import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// const repeatThreeTimesmakeLouderAndEmbolden = (string) => {
//   embolden(repeatThreeTimes(makeLouder(string)));
// };
const repeatThreeTimesmakeLouderAndEmbolden = compose(
  embolden,
  repeatThreeTimes,
  makeLouder
);

console.log(repeatThreeTimesmakeLouderAndEmbolden("Lucas"));
