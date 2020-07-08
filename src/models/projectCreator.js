// eslint-disable-next-line import/no-cycle
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
  document.getElementById('projectForm').reset();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

export {
  createProject,
  createDefaultProject,
};
