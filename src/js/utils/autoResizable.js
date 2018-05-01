export const makeAutoResizable = element => {
  element.addEventListener("input", () => {
    element.style.height = 'auto';
    element.style.height = `${ element.scrollHeight }px`;
  });
}