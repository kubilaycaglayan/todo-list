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

export {createToDoItem};
