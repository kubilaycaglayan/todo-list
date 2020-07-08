const functions = function functions() {
  const createElement = function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function createElementWithInnerText(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };

  const whichCardClass = function whichCardClass(priority) {
    let classNames;
    switch (priority) {
      case 'high':
        classNames = {
          cardCN: 'card border-danger mb-3',
          bodyCN: 'card-body text-danger',
          footerCN: 'card-footer bg-transparent border-danger',
          headerCN: 'card-header text-danger border-danger border-bottom',
          iconEditCN: 'far fa-edit text-danger mr-3',
          iconTrashCN: 'far fa-trash-alt text-danger',
        };
        break;
      case 'medium':
        classNames = {
          cardCN: 'card border-primary mb-3',
          bodyCN: 'card-body text-primary',
          footerCN: 'card-footer bg-transparent border-primary',
          headerCN: 'card-header text-primary border-primary border-bottom',
          iconEditCN: 'far fa-edit text-primary mr-3',
          iconTrashCN: 'far fa-trash-alt text-primary',
        };
        break;
      default:
        classNames = {
          cardCN: 'card border-success mb-3',
          bodyCN: 'card-body text-success',
          footerCN: 'card-footer bg-transparent border-success',
          headerCN: 'card-header text-success border-success border-bottom',
          iconEditCN: 'far fa-edit text-success mr-3',
          iconTrashCN: 'far fa-trash-alt text-success',
        };
    }
    return classNames;
  };

  const createCard = function createCard(todo, todoId) {
    const {
      cardCN,
      bodyCN,
      footerCN,
      headerCN,
      iconEditCN,
      iconTrashCN,
    } = whichCardClass(todo.priority);
    const col = createElement('div', 'col-4');
    const card = createElement('div', cardCN);
    card.style = 'max-width: 18rem;';
    const cardHeader = createElementWithInnerText('div', headerCN, todo.title);

    const cardBody = createElement('div', bodyCN);
    const h5 = createElementWithInnerText('h5', 'card-title', todo.description);
    const everything = `${todo.notes} ${todo.dueDate} ${todo.priority}`;
    const cardText = createElementWithInnerText('p', 'card-text', everything);

    const cardFooter = createElement('footer', footerCN);
    const editIcon = createElement('i', iconEditCN);
    const trashIcon = createElement('i', iconTrashCN);

    cardFooter.appendChild(editIcon);
    cardFooter.appendChild(trashIcon);
    card.appendChild(cardHeader);
    todoList.appendChild(col);
    cardBody.appendChild(h5);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    col.appendChild(card);

    return {
      col,
      trashIcon,
      editIcon,
    };
  };

  return {
    createElement,
    createElementWithInnerText,
    createCard,
  };
};


export { functions };