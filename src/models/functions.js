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
        headerCN: 'card-header text-danger',
      };
      break;
    case 'medium':
      classNames = {
        cardCN: 'card border-primary mb-3',
        bodyCN: 'card-body text-primary' ,
        footerCN: 'card-footer bg-transparent border-primary',
        headerCN: 'card-header text-primary',
      };
      break;
    default:
      classNames = {
        cardCN: 'card border-success mb-3',
        bodyCN: 'card-body text-success',
        footerCN: 'card-footer bg-transparent border-success',
        headerCN: 'card-header text-success',
      };
  }
  return classNames;
};

const createCard = function createCard(todo, todoId) {
  const { cardCN, bodyCN, footerCN, headerCN } = whichCardClass(todo.priority);
  const card = createElement('div', cardCN);
  card.style = 'max-width: 18rem;';
  const cardHeader = createElementWithInnerText('div', headerCN, todo.title);

  const cardBody = createElement('div', bodyCN);
  const h5 = createElementWithInnerText('h5', 'card-title', todo.description);
  const everything = todo.notes + ' ' + todo.dueDate + ' ' + todo.priority
  const cardText = createElementWithInnerText('p', 'card-text', everything );

  const cardFooter = createElement('footer', footerCN);
  const editIcon = createElement('i', 'far fa-edit');
  const trashIcon = createElement('i', 'far fa-trash-alt');
  const todoIdField = document.getElementById('todoId');

  cardFooter.appendChild(editIcon);
  cardFooter.appendChild(trashIcon);
  card.appendChild(cardHeader);
  todoList.appendChild(card);
  cardBody.appendChild(h5);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  return { card, trashIcon, editIcon };
}

export {
  createElement,
  createElementWithInnerText,
  createCard,
};
