export const addTodo = (payload) => {
  return {
    type: "todo/addTodo",
    payload: payload,
  };
};

export const filtersSearch = (payload) => {
  return {
    type: "filter/filtersSearch",
    payload: payload,
  };
};

export const filtersStatus = (payload) => {
  return {
    type: "filter/filtersStatus",
    payload: payload,
  };
};

export const filtersPriority = (payload) => {
  return {
    type: "filter/filtersPriority",
    payload: payload,
  };
};

export const toggleCheckboxId = (payload) => {
  return {
    type: "todo/toggleCheckbox",
    payload: payload,
  };
};
