const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "learn java",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "learn React",
      completed: false,
      priority: "Low",
    },
    {
      id: 3,
      name: "learn javascript",
      completed: false,
      priority: "High",
    },
  ],
};

export const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todo/addTodo":
      return { ...state, todoList: [...state.todoList, action.payload] };

    case "todo/toggleCheckbox":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "filter/filtersSearch":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };

    case "filter/filtersStatus":
      return {
        ...state,
        filters: { ...state.filters, status: action.payload },
      };

    case "filter/filtersPriority":
      return {
        ...state,
        filters: { ...state.filters, priority: action.payload },
      };

    default:
      return state;
  }
};
