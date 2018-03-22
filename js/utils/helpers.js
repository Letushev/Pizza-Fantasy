export const bindAll = (context, ...names) => {
  names.forEach(name => {
    context[name] = context[name].bind(context);
  });
};

export const parseHTML = htmlString => {
  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();

  return template.content;
};

export const clearChildren = node => {
  node.innerHTML = '';
  return node;
};

export const append = (node, child) => {
  if (Array.isArray(child)) {
    node.append(...child);
  } else {
    node.append(child);
  }

  return node;
};
