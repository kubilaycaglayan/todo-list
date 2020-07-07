import { storage } from './storage';

const createProject = function createProject(name, pocket = []) {
  return {
    name,
    pocket,
  };
};

const createDefaultProject = function createDefaultProject() {
  const newProject = createProject('Default Project');
  const ourStore = storage();
  ourStore.addProject(newProject);
  console.log('Success');
  document.getElementById('projectForm').reset();
  location.reload();
};

export {
  createProject,
  createDefaultProject,
};
