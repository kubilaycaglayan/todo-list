const storage = function storage() {
  function getStorage() {
    let toDoList;
    if (window.localStorage.getItem('todolist') === null) {
      toDoList = [];
      window.localStorage.setItem('todolist', JSON.stringify(toDoList));
    } else {
      toDoList = JSON.parse(window.localStorage.getItem('todolist'));
    }
    return toDoList;
  }

  function addProject(newProject) {
    const storage = getStorage();
    storage.push(newProject);
    window.localStorage.setItem('todolist', JSON.stringify(storage));
  }

  function deleteProject(projectId) {
    const confirmation = window.confirm;
    if (confirmation) {
      const storage = getStorage();
      storage.splice(projectId, 1);
      window.localStorage.setItem('todolist', JSON.stringify(storage));
    }
  }

  function addTodo(projectId, item) {
    const storage = getStorage();
    storage[projectId].pocket.push(item);
    window.localStorage.setItem('todolist', JSON.stringify(storage));
  }

  function deleteTodo(projectId, itemId) {
    const confirmation = window.confirm;
    if (confirmation) {
      const storage = getStorage();
      storage[projectId].pocket.splice(itemId, 1);
      window.localStorage.setItem('todolist', JSON.stringify(storage));
    }
  }

  return {
    getStorage,
    addProject,
    deleteProject,
    addTodo,
    deleteTodo,
  };
};

export { storage as default };