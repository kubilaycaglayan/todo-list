import storage from './models/storage';
import createProject from './models/projectCreator';
import { createElement, createElementWithInnerText } from './models/functions';
import './style.css';

const submitProject = document.getElementById('submitProject');

function createProjectFlow() {
  const nameProject = document.getElementById('nameProject').value;
  const ourStore = storage();
  const newProject = createProject(nameProject);
  ourStore.addProject(newProject);
}

submitProject.addEventListener('click', createProjectFlow);

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
  // projectName.addEventListener('click', console.log.bind(this, index));
  trashIcon.addEventListener('click', storage().deleteProject.bind(this, index));
});