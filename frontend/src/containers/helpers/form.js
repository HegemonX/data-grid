export const parse = form => {
  return Object.keys(form.elements).reduce((res, id) => {
    const name = form.elements[id].name;
    if (name === "submit") return res;
    res[name] = form.elements[id].value;
    return res;
  }, {});
};

export const fill = (form, data) => {
  const { elements } = form;
  for (let key in data) {
    if (!(key in elements)) continue;
    elements[key].value = data[key];
  }
};

export const lock = (form, data) => {
  const { elements } = form;
  for (let key in data) {
    if (!(key in elements)) continue;
    elements[key].disabled = true;
  }
};
