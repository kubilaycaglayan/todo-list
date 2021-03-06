/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import {
  functions,
}
  from './functions';
import {
  storage,
} from './storage';
import {
  events,
} from './events';


const dom = function dom() {
  function showProject() {
    const myProjects = storage().getStorage();
    const projectsOnPage = document.getElementById('projects');
    projectsOnPage.innerHTML = '';
    myProjects.forEach((project, index) => {
      const {
        name,
      } = project;
      const projectLi = functions().createElement('li', 'project list-group-item list-group-item-secondary text-center d-flex justify-content-between');
      const projectName = functions().createElementWithInnerText('span', 'project', name);
      const trashIcon = functions().createElement('i', 'far fa-trash-alt');
      projectLi.appendChild(projectName);
      projectLi.appendChild(trashIcon);
      projectsOnPage.appendChild(projectLi);
      projectName.addEventListener('click', showTodos.bind(this, index));
      trashIcon.addEventListener('click', deleteProjectProcedure.bind(this, index));
    });
  }

  function cleanTodoList() {
    const toDoList = document.getElementById('todoList');
    toDoList.innerHTML = '';
    const displayProjectName = document.getElementById('displayProjectName');
    displayProjectName.innerHTML = '';
    const addTodoButton = document.getElementById('addTodoButton');
    addTodoButton.style.display = 'none';
  }

  function showTodos(projectId) {
    cleanTodoList();
    document.getElementById('addTodoButton').style.display = 'block';
    const displayProjectName = document.getElementById('displayProjectName');
    const myProjects = storage().getStorage();
    const projectName = myProjects[projectId].name;
    displayProjectName.innerHTML = `${projectName} ToDo´s`;
    const projectIdField = document.getElementById('projectId');
    projectIdField.innerHTML = projectId;

    myProjects[projectId].pocket.forEach((todo, todoId) => {
      const {
        trashIcon,
        editIcon,
      } = functions().createCard(todo);

      trashIcon.addEventListener('click', deleteTodoProcedure.bind(this, projectId, todoId));
      editIcon.addEventListener('click', showEditTodoProcedure.bind(this, projectId, todoId));
    });
  }

  const showEditTodoButton = function showEditTodoButton() {
    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.style.display = 'none';
    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.style.display = 'block';
  };

  const showAddTodoButton = function showAddTodoButton() {
    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.style.display = 'block';
    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.style.display = 'none';
  };

  const deleteProjectProcedure = function deleteProjectProcedure(index) {
    storage().deleteProject(index);
    cleanTodoList();
    showProject();
  };

  function deleteTodoProcedure(projectId, index) {
    storage().deleteTodo(projectId, index);
    showTodos(projectId);
  }

  function showEditTodoProcedure(projectId, todoId) {
    document.getElementById('addTodoButton').click();
    showEditTodoButton();
    const todoIdField = document.getElementById('todoId');
    todoIdField.innerHTML = todoId;
    const todo = storage().getStorage()[projectId].pocket[todoId];
    document.getElementById('titleTodo').value = todo.title;
    document.getElementById('descriptionTodo').value = todo.description;
    document.getElementById('notesTodo').value = todo.notes;
    document.getElementById('dueDateTodo').value = todo.dueDate;
    const classNameOfRadioButtonShouldBeChecked = `${todo.priority.toLowerCase()}P`;
    const radioButton = document.getElementsByClassName(classNameOfRadioButtonShouldBeChecked)[0];
    radioButton.checked = true;
  }

  const addTodoButton = document.getElementById('addTodoButton');
  addTodoButton.addEventListener('click', () => { document.getElementById('todoForm').reset(); showAddTodoButton(); });

  const submitProject = document.getElementById('submitProject');
  submitProject.onclick = function () {
    events().createProjectProcedure();
  };
  const editTodoButton = document.getElementById('editTodo');
  editTodoButton.onclick = function () {
    events().editTodoProcedure();
  };
  const submitTodoButton = document.getElementById('submitTodo');
  submitTodoButton.onclick = function () {
    events().createTodoProcedure();
  };

  return {
    showProject,
    showTodos,
  };
};

export {
  dom,
};