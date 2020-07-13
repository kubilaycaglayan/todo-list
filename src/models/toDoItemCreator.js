/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
const createToDoItem = function createToDoItem(title, description, dueDate, priority, notes) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
  };
};

export { createToDoItem };
