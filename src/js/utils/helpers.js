export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const findDifference = (arr1, arr2) => {
  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  return arr1.filter(x => !arr2.includes(x))[0];
}

export const formDataToObject = formData => {
  const result = {};
  for (const [key, value] of formData) {
    result[key] = value;
  }
  return result;
}

export const canvasToBlob = canvas => {
  return new Promise(resolve => {
    canvas.toBlob(resolve);
  });
}