// eslint-disable-next-line import/no-cycle
import { storage } from './storage';
import { dom } from './DOM';

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
  document.getElementById('projectForm').reset();
  dom().showProject();
};

export {
  createProject,
  createDefaultProject,
};
