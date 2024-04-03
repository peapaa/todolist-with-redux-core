import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextFilter = (state) => state.filters.search;
export const searchStatusFilter = (state) => state.filters.status;
export const searchStatusPriority = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextFilter,
  searchStatusFilter,
  searchStatusPriority,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
