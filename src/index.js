import { storage } from './models/storage.js'
import './style.css';
import firstProject from './models/defaultProject'

console.log('Success');
console.log(firstProject);

const submitProject = document.getElementById('submitProject');

function createProject() {
    const nameProject = document.getElementById('nameProject').value;
    const localStorage = storage();
    let newProject = createProject(nameProject);
    localStorage.addProject(newProject);
}
    
submitProject.addEventListener('click', createProject());
