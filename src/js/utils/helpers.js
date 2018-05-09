export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const removeArrayElement = (el, arr) => {
  const index = arr.indexOf(el);
  if (index !== -1) {
    arr.splice(index, 1);
  }
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

export const makeAutoResizable = element => {
  element.addEventListener("input", () => {
    element.style.height = 'auto';
    element.style.height = `${ element.scrollHeight }px`;
  });
}

export const diffBetweenDates = (date1, date2) => {
  return (date2.getTime() - date1.getTime());
}