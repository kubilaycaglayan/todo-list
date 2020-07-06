const createProject = function createProject(name, pocket = []) {
  return {
    name,
    pocket,
  };
};

export default createProject;
