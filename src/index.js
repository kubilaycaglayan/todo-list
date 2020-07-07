import storage from './models/storage';
import createToDoItem from './models/toDoItemCreator';
import createProject from './models/projectCreator';
import { createElement, createElementWithInnerText } from './models/functions';
import './style.css';

const submitProject = document.getElementById('submitProject');

function createProjectProcedure() {
  const nameProject = document.getElementById('nameProject').value;
  const ourStore = storage();
  const newProject = createProject(nameProject);
  ourStore.addProject(newProject);
  const closeModalButton = document.getElementById('closeModalButton1');
  closeModalButton.click();
  document.getElementById("projectForm").reset();
  showProject();
}

submitProject.addEventListener('click', createProjectProcedure);

const deleteProjectProcedure = function deleteProjectProcedure(index) {
  storage().deleteProject(index);
  location.reload();
};

function showProject() {

  const myProjects = storage().getStorage();
  const projectsOnPage = document.getElementById('projects');
  projectsOnPage.innerHTML = '';
  myProjects.forEach((project, index) => {
    const { name } = project;
    const projectLi = createElement('li', 'project');
    const projectName = createElementWithInnerText('span', 'project', name);
    const trashIcon = createElement('i', 'far fa-trash-alt');
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
}

function showTodos(projectId) {
  cleanTodoList();
  document.getElementById('addTodoButton').style.display = 'block';
  const displayProjectName = document.getElementById('displayProjectName');
  const myProjects = storage().getStorage();
  const projectName = myProjects[projectId].name;
  displayProjectName.innerHTML = projectName + ' ToDo´s';
  const projectIdField = document.getElementById('projectId');
  projectIdField.innerHTML = projectId;
  const todoList = document.getElementById('todoList');
  myProjects[projectId].pocket.forEach((todo, todoId)=>{
    const card = createElement('div', 'card border-primary mb-3');
    card.style = 'max-width: 18rem;';
    const cardHeader = createElementWithInnerText('div', 'card-header', todo.title);
    const cardBody = createElement('div', 'card-body text-primary');
    const h5 = createElementWithInnerText('h5', 'card-title', todo.description);
    const everything = todo.notes + ' ' + todo.dueDate + ' ' + todo.priority
    const cardText = createElementWithInnerText('p', 'card-text', everything );
    const cardFooter = createElement('footer', 'card-footer bg-transparent border-primary');
    const editIcon = createElement('i', 'far fa-edit');
    const trashIcon = createElement('i', 'far fa-trash-alt');

    cardFooter.appendChild(editIcon);
    cardFooter.appendChild(trashIcon);

    card.appendChild(cardHeader);
    todoList.appendChild(card);
    cardBody.appendChild(h5);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    trashIcon.addEventListener('click', deleteTodoProcedure.bind(this, projectId, todoId));
    editIcon.addEventListener('click', showEditTodoProcedure.bind(this, projectId, todoId));
  });
}

function deleteTodoProcedure(projectId, index) {
  storage().deleteTodo(projectId, index);
  showTodos(projectId);
}

function showEditTodoProcedure(projectId, todoId) {
  document.getElementById('addTodoButton').click();
  showEditTodoButton();
  const todo = storage().getStorage()[projectId].pocket[todoId];
  document.getElementById('titleTodo').value = todo.title;
  document.getElementById('descriptionTodo').value = todo.description;
  document.getElementById('notesTodo').value = todo.notes;
  document.getElementById('dueDateTodo').value = todo.dueDate;
  const classNameOfRadioButtonShouldBeChecked = `${todo.priority.toLowerCase()}P`;
  const radioButton = document.getElementsByClassName(classNameOfRadioButtonShouldBeChecked)[0];
  radioButton.checked = true;
}

function getFormValues() {
  const titleTodo = document.getElementById('titleTodo').value;
  const descTodo = document.getElementById('descriptionTodo').value;
  const notesTodo = document.getElementById('notesTodo').value;
  const dueDateTodo = document.getElementById('dueDateTodo').value;
  const priorityTodo = document.querySelector('input[name="priority"]:checked').value;
  const todoValues = [titleTodo, descTodo, dueDateTodo, priorityTodo, notesTodo];
  return todoValues;
};

function createTodoProcedure() {
  const todoValues = getFormValues();
  const newTodo = createToDoItem(todoValues[0],todoValues[1],todoValues[2],todoValues[3],todoValues[4]);
  const projectId = document.getElementById('projectId').innerHTML;
  const ourStore = storage();
  ourStore.addTodo(projectId, newTodo);
  const closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.click();
  document.getElementById("todoForm").reset();
  showTodos(projectId);
}

showProject();

const submitTodoButton = document.getElementById('submitTodo');
submitTodoButton.addEventListener('click', createTodoProcedure);

const showEditTodoButton = function showEditTodoButton () {
  const submitTodoButton = document.getElementById('submitTodo');
  submitTodoButton.style.display = 'none';
  const editTodoButton = document.getElementById('editTodo');
  editTodoButton.style.display = 'block';
}

const showAddTodoButton = function showAddTodoButton () {
  const submitTodoButton = document.getElementById('submitTodo');
  submitTodoButton.style.display = 'block';
  const editTodoButton = document.getElementById('editTodo');
  editTodoButton.style.display = 'none';
}

const addTodoButton = document.getElementById('addTodoButton');
addTodoButton.addEventListener('click', showAddTodoButton)

const editTodoProcedure = function editTodoProcedure() {
  const projectId = document.getElementById('projectId').innerHTML;
  const todoValues = getFormValues();
  const editedTodo = {title:todoValues[0], description:todoValues[1], dueDate:todoValues[2], priority:todoValues[3], notes:todoValues[4]};
  const ourStore = storage();
  ourStore.updateTodo(projectId, todoId, editedTodo);
  const closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.click();
  document.getElementById("todoForm").reset();
  showTodos(projectId);
};
const editTodoButton = document.getElementById('editTodo');
editTodoButton.addEventListener('click', editTodoProcedure);

