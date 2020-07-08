/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
const createToDoItem = function createToDoItem(title, description, dueDate, priority, notes, checklist = false) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};

export { createToDoItem };
