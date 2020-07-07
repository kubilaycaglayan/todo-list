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
  myProjects[projectId].pocket.forEach((todo, index)=>{
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

    trashIcon.addEventListener('click', deleteTodoProcedure.bind(this, projectId, index));
    editIcon.addEventListener('click', editTodoProcedure);
  });
}

function deleteTodoProcedure(projectId, index) {
  storage().deleteTodo(projectId, index);
  showTodos(projectId);
}

function editTodoProcedure() {

}


function createTodoProcedure() {
  const titleTodo = document.getElementById('titleTodo').value;
  const descTodo = document.getElementById('descriptionTodo').value;
  const notesTodo = document.getElementById('notesTodo').value;
  const dueDateTodo = document.getElementById('dueDateTodo').value;
  const priorityTodo = document.querySelector('input[name="priority"]:checked').value;
  const projectId = document.getElementById('projectId').innerHTML;

  const newTodo = createToDoItem(titleTodo, descTodo, dueDateTodo, priorityTodo, notesTodo);
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

