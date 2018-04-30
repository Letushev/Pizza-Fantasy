

export const removeArrayElement = (el, arr) => {
  const index = arr.indexOf(el);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}