const createProject = function createProject(name, pocket = []) {
  return {
    name,
    pocket,
  };
};

export {
  createProject as default,
};
