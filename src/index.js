import storage from './models/storage';
import createProject from './models/projectCreator';
import { createElement, createElementWithInnerText } from './models/functions';
import './style.css';

const submitProject = document.getElementById('submitProject');

function createProjectProcedure() {
  const nameProject = document.getElementById('nameProject').value;
  const ourStore = storage();
  const newProject = createProject(nameProject);
  ourStore.addProject(newProject);
}

submitProject.addEventListener('click', createProjectProcedure);



function showProject() {
  const myProjects = storage().getStorage();
  const projectsOnPage = document.getElementById('projects');
  
  myProjects.forEach((project, index) => {
    const { name } = project;
    const projectLi = createElement('li', 'project');
    const projectName = createElementWithInnerText('span', 'project', name);
    const trashIcon = createElement('i', 'far fa-trash-alt');
    projectLi.appendChild(projectName);
    projectLi.appendChild(trashIcon);
  
    projectsOnPage.appendChild(projectLi);
    projectName.addEventListener('click', showTodos.bind(this, index));
    trashIcon.addEventListener('click', storage().deleteProject.bind(this, index));
  });
}


function showTodos(index) {
  const displayProjectName = document.getElementById('displayProjectName');
  const myProjects = storage().getStorage();
  const projectName = myProjects[index].name;
  displayProjectName.innerHTML = projectName + ' ToDo´s';
  myProjects[index].pocket.forEach((todo, index)=>{

  });
}


function createTodoProcedure(projectId) {
  const titleTodo = document.getElementById('titleTodo').value;
  const descTodo = document.getElementById('descriptionTodo').value;
  const notesTodo = document.getElementById('notesTodo').value;
  const dueDateTodo = document.getElementById('dueDateTodo').value;
  const priorityTodo = document.querySelector('input[name="priority"]:checked').value;

  const newTodo = createToDoItem(titleTodo, descTodo, dueDateTodo, priorityTodo, notesTodo);
  const ourStore = storage();
  ourStore.addTodo(projectId, newTodo);
}

showProject();