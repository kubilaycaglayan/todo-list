import 
    {storage}
 from './storage';
import 
    {dom}
 from './DOM';
import {
    createProject
} from './projectCreator';
import {
    createToDoItem
} from './toDoItemCreator';

const events = function events() {

    const submitProject = document.getElementById('submitProject');

    function createProjectProcedure() {
        const nameProject = document.getElementById('nameProject').value;
        const ourStore = storage();
        const newProject = createProject(nameProject);
        ourStore.addProject(newProject);
        const closeModalButton = document.getElementById('closeModalButton1');
        closeModalButton.click();
        document.getElementById("projectForm").reset();
        dom().showProject();
    }

    submitProject.addEventListener('click', createProjectProcedure);


    function showEditTodoProcedure(projectId, todoId) {
        document.getElementById('addTodoButton').click();
        dom().showEditTodoButton();
        const todoIdField = document.getElementById('todoId');
        todoIdField.innerHTML = todoId;
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
        const newTodo = createToDoItem(todoValues[0], todoValues[1], todoValues[2], todoValues[3], todoValues[4]);
        const projectId = document.getElementById('projectId').innerHTML;
        const ourStore = storage();
        ourStore.addTodo(projectId, newTodo);
        const closeModalButton = document.getElementById('closeModalButton');
        closeModalButton.click();
        document.getElementById("todoForm").reset();
        dom().showTodos(projectId);
    }

    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.addEventListener('click', createTodoProcedure);

    const editTodoProcedure = function editTodoProcedure() {
        const projectId = document.getElementById('projectId').innerHTML;
        const todoId = document.getElementById('todoId').innerHTML;
        const todoValues = getFormValues();
        const editedTodo = {
            title: todoValues[0],
            description: todoValues[1],
            dueDate: todoValues[2],
            priority: todoValues[3],
            notes: todoValues[4]
        };
        const ourStore = storage();
        ourStore.updateTodo(projectId, todoId, editedTodo);
        document.getElementById('todoId').innerHTML = '';
        const closeModalButton = document.getElementById('closeModalButton');
        closeModalButton.click();
        document.getElementById("todoForm").reset();
        dom().showTodos(projectId);
    };

    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.addEventListener('click', editTodoProcedure.bind(this));

    return {
      showEditTodoProcedure,      
    }
}

export {events};