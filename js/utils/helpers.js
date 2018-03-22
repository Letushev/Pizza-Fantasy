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

const URL_PARAM_REGEXP = /:\w+/g; // matches all(beacuse of g) combinations with 'A-Za-z0-9_' after ':'

const isUrlParam = path => URL_PARAM_REGEXP.test(path);

const pathToRegExp = path => RegExp(`^${path.replace(URL_PARAM_REGEXP, '(.*)')}$`); // ^ - beginning, $ - finish

export const isEqualPaths = (template, path) => pathToRegExp(template).test(path);
