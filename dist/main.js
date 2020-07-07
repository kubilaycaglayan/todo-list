/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".project {\r\n  cursor: pointer;\r\n}\r\n\r\n#addTodoButton {\r\n  display: none;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/DOM */ "./src/models/DOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);




const show = Object(_models_DOM__WEBPACK_IMPORTED_MODULE_0__["dom"])();
show.showProject();

/***/ }),

/***/ "./src/models/DOM.js":
/*!***************************!*\
  !*** ./src/models/DOM.js ***!
  \***************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/models/functions.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/models/storage.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/models/events.js");





const dom = function dom() {

  function showProject() {

    const myProjects = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().getStorage();
    const projectsOnPage = document.getElementById('projects');
    projectsOnPage.innerHTML = '';
    myProjects.forEach((project, index) => {
      const {
        name
      } = project;
      const projectLi = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createElement('li', 'project');
      const projectName = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createElementWithInnerText('span', 'project', name);
      const trashIcon = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createElement('i', 'far fa-trash-alt');
      projectLi.appendChild(projectName);
      projectLi.appendChild(trashIcon);

      projectsOnPage.appendChild(projectLi);
      projectName.addEventListener('click', showTodos.bind(this, index));
      trashIcon.addEventListener('click', deleteProjectProcedure.bind(this, index));
    });
  }

  function cleanTodoList() {
    const toDoList = document.getElementById('todoList');
    toDoList.innerHTML = '';
  }

  function showTodos(projectId) {
    cleanTodoList();
    document.getElementById('addTodoButton').style.display = 'block';
    const displayProjectName = document.getElementById('displayProjectName');
    const myProjects = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().getStorage();
    const projectName = myProjects[projectId].name;
    displayProjectName.innerHTML = projectName + ' ToDo´s';
    const projectIdField = document.getElementById('projectId');
    projectIdField.innerHTML = projectId;
    const todoList = document.getElementById('todoList');

    myProjects[projectId].pocket.forEach((todo, todoId) => {
      const {
        trashIcon,
        editIcon
      } = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createCard(todo, todoId);

      trashIcon.addEventListener('click', deleteTodoProcedure.bind(this, projectId, todoId));
      editIcon.addEventListener('click', showEditTodoProcedure.bind(this, projectId, todoId));
    });
  }

  const showEditTodoButton = function showEditTodoButton() {
    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.style.display = 'none';
    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.style.display = 'block';
  }

  const showAddTodoButton = function showAddTodoButton() {
    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.style.display = 'block';
    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.style.display = 'none';
  }


  const deleteProjectProcedure = function deleteProjectProcedure(index) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().deleteProject(index);
    location.reload();
  };

  function showEditTodoProcedure(projectId, todoId) {
    document.getElementById('addTodoButton').click();
    showEditTodoButton();
    const todoIdField = document.getElementById('todoId');
    todoIdField.innerHTML = todoId;
    const todo = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().getStorage()[projectId].pocket[todoId];
    document.getElementById('titleTodo').value = todo.title;
    document.getElementById('descriptionTodo').value = todo.description;
    document.getElementById('notesTodo').value = todo.notes;
    document.getElementById('dueDateTodo').value = todo.dueDate;
    const classNameOfRadioButtonShouldBeChecked = `${todo.priority.toLowerCase()}P`;
    const radioButton = document.getElementsByClassName(classNameOfRadioButtonShouldBeChecked)[0];
    radioButton.checked = true;
  }


  function deleteTodoProcedure(projectId, index) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().deleteTodo(projectId, index);
    showTodos(projectId);
  }

  const addTodoButton = document.getElementById('addTodoButton');
  addTodoButton.addEventListener('click', showAddTodoButton);

  const submitProject = document.getElementById('submitProject');
  submitProject.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().createProjectProcedure()
  };
  const editTodoButton = document.getElementById('editTodo');
  editTodoButton.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().editTodoProcedure()
  };
  const submitTodoButton = document.getElementById('submitTodo');
  submitTodoButton.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().createTodoProcedure()
  };

  return {
    showProject,
    showTodos,
  }

}



/***/ }),

/***/ "./src/models/events.js":
/*!******************************!*\
  !*** ./src/models/events.js ***!
  \******************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/models/storage.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/models/DOM.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCreator */ "./src/models/projectCreator.js");
/* harmony import */ var _toDoItemCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoItemCreator */ "./src/models/toDoItemCreator.js");





const events = function events() {

  function createProjectProcedure() {
    const nameProject = document.getElementById('nameProject').value;
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    const newProject = Object(_projectCreator__WEBPACK_IMPORTED_MODULE_2__["createProject"])(nameProject);
    ourStore.addProject(newProject);
    const closeModalButton = document.getElementById('closeModalButton1');
    closeModalButton.click();
    document.getElementById("projectForm").reset();
    Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showProject();
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
    const newTodo = Object(_toDoItemCreator__WEBPACK_IMPORTED_MODULE_3__["createToDoItem"])(todoValues[0], todoValues[1], todoValues[2], todoValues[3], todoValues[4]);
    const projectId = document.getElementById('projectId').innerHTML;
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    ourStore.addTodo(projectId, newTodo);
    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.click();
    document.getElementById("todoForm").reset();
    Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showTodos(projectId);
  }

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
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    ourStore.updateTodo(projectId, todoId, editedTodo);
    document.getElementById('todoId').innerHTML = '';
    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.click();
    document.getElementById("todoForm").reset();
    Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showTodos(projectId);
  };

  return {
    editTodoProcedure,
    createTodoProcedure,
    createProjectProcedure,
  }
}



/***/ }),

/***/ "./src/models/functions.js":
/*!*********************************!*\
  !*** ./src/models/functions.js ***!
  \*********************************/
/*! exports provided: functions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
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
          headerCN: 'card-header text-danger',
        };
        break;
      case 'medium':
        classNames = {
          cardCN: 'card border-primary mb-3',
          bodyCN: 'card-body text-primary',
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
    const {
      cardCN,
      bodyCN,
      footerCN,
      headerCN
    } = whichCardClass(todo.priority);
    const card = createElement('div', cardCN);
    card.style = 'max-width: 18rem;';
    const cardHeader = createElementWithInnerText('div', headerCN, todo.title);

    const cardBody = createElement('div', bodyCN);
    const h5 = createElementWithInnerText('h5', 'card-title', todo.description);
    const everything = todo.notes + ' ' + todo.dueDate + ' ' + todo.priority
    const cardText = createElementWithInnerText('p', 'card-text', everything);

    const cardFooter = createElement('footer', footerCN);
    const editIcon = createElement('i', 'far fa-edit');
    const trashIcon = createElement('i', 'far fa-trash-alt');

    cardFooter.appendChild(editIcon);
    cardFooter.appendChild(trashIcon);
    card.appendChild(cardHeader);
    todoList.appendChild(card);
    cardBody.appendChild(h5);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    return {
      card,
      trashIcon,
      editIcon
    };
  }

  return {
    createElement,
    createElementWithInnerText,
    createCard,
  }
}





/***/ }),

/***/ "./src/models/projectCreator.js":
/*!**************************************!*\
  !*** ./src/models/projectCreator.js ***!
  \**************************************/
/*! exports provided: createProject, createDefaultProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultProject", function() { return createDefaultProject; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/models/storage.js");


const createProject = function createProject(name, pocket = []) {
  return {
    name,
    pocket,
  };
};

const createDefaultProject = function createDefaultProject() {
  const newProject = createProject('Default Project');
  const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
  ourStore.addProject(newProject);
  console.log('Success')
  document.getElementById("projectForm").reset();
  location.reload();
};




/***/ }),

/***/ "./src/models/storage.js":
/*!*******************************!*\
  !*** ./src/models/storage.js ***!
  \*******************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreator */ "./src/models/projectCreator.js");


const storage = function storage() {
  function getStorage() {
    let toDoList;
    if (window.localStorage.getItem('todolist') === null) {
      toDoList = [];
      window.localStorage.setItem('todolist', JSON.stringify(toDoList));
      Object(_projectCreator__WEBPACK_IMPORTED_MODULE_0__["createDefaultProject"])();
    } else {
      toDoList = JSON.parse(window.localStorage.getItem('todolist'));
    }
    return toDoList;
  }

  function addProject(newProject) {
    const storage = getStorage();
    storage.push(newProject);
    window.localStorage.setItem('todolist', JSON.stringify(storage));
  }

  function deleteProject(projectId) {
    const confirmation = window.confirm('Do you want to remove that project?');
    if (confirmation) {
      const storage = getStorage();
      storage.splice(projectId, 1);
      window.localStorage.setItem('todolist', JSON.stringify(storage));
    }
  }

  function addTodo(projectId, newTodo) {
    const storage = getStorage();
    storage[projectId].pocket.push(newTodo);
    window.localStorage.setItem('todolist', JSON.stringify(storage));
  }

  function deleteTodo(projectId, todoId) {
    const confirmation = window.confirm('Do you want to remove that task?');
    if (confirmation) {
      const storage = getStorage();
      storage[projectId].pocket.splice(todoId, 1);
      window.localStorage.setItem('todolist', JSON.stringify(storage));
    }
  }

  function updateTodo(projectId, todoId, editedTodo) {
    const confirmation = window.confirm('Do you want to edit that task?');
    if (confirmation) {
      const storage = getStorage();
      storage[projectId].pocket[todoId] = editedTodo;
      window.localStorage.setItem('todolist', JSON.stringify(storage));
    }
  }

  return {
    getStorage,
    addProject,
    deleteProject,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};



/***/ }),

/***/ "./src/models/toDoItemCreator.js":
/*!***************************************!*\
  !*** ./src/models/toDoItemCreator.js ***!
  \***************************************/
/*! exports provided: createToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToDoItem", function() { return createToDoItem; });
const createToDoItem = function createToDoItem(title, description, dueDate, priority, notes, checklist = false) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90b0RvSXRlbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGRUb2RvQnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgIHtkb219IGZyb20gJy4vbW9kZWxzL0RPTSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IHNob3cgPSBkb20oKTtcclxuc2hvdy5zaG93UHJvamVjdCgpOyIsImltcG9ydCB7XHJcbiAgZnVuY3Rpb25zXHJcbn1cclxuZnJvbSAnLi9mdW5jdGlvbnMnXHJcbmltcG9ydCB7XHJcbiAgc3RvcmFnZVxyXG59IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7XHJcbiAgZXZlbnRzXHJcbn0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IGRvbSA9IGZ1bmN0aW9uIGRvbSgpIHtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1Byb2plY3QoKSB7XHJcblxyXG4gICAgY29uc3QgbXlQcm9qZWN0cyA9IHN0b3JhZ2UoKS5nZXRTdG9yYWdlKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0c09uUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG4gICAgcHJvamVjdHNPblBhZ2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH0gPSBwcm9qZWN0O1xyXG4gICAgICBjb25zdCBwcm9qZWN0TGkgPSBmdW5jdGlvbnMoKS5jcmVhdGVFbGVtZW50KCdsaScsICdwcm9qZWN0Jyk7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZnVuY3Rpb25zKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ3NwYW4nLCAncHJvamVjdCcsIG5hbWUpO1xyXG4gICAgICBjb25zdCB0cmFzaEljb24gPSBmdW5jdGlvbnMoKS5jcmVhdGVFbGVtZW50KCdpJywgJ2ZhciBmYS10cmFzaC1hbHQnKTtcclxuICAgICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XHJcblxyXG4gICAgICBwcm9qZWN0c09uUGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xyXG4gICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2Rvcy5iaW5kKHRoaXMsIGluZGV4KSk7XHJcbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RQcm9jZWR1cmUuYmluZCh0aGlzLCBpbmRleCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhblRvZG9MaXN0KCkge1xyXG4gICAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3QnKTtcclxuICAgIHRvRG9MaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1RvZG9zKHByb2plY3RJZCkge1xyXG4gICAgY2xlYW5Ub2RvTGlzdCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5UHJvamVjdE5hbWUnKTtcclxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBzdG9yYWdlKCkuZ2V0U3RvcmFnZSgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBteVByb2plY3RzW3Byb2plY3RJZF0ubmFtZTtcclxuICAgIGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZSArICcgVG9Eb8K0cyc7XHJcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SWQnKTtcclxuICAgIHByb2plY3RJZEZpZWxkLmlubmVySFRNTCA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0Jyk7XHJcblxyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnBvY2tldC5mb3JFYWNoKCh0b2RvLCB0b2RvSWQpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRyYXNoSWNvbixcclxuICAgICAgICBlZGl0SWNvblxyXG4gICAgICB9ID0gZnVuY3Rpb25zKCkuY3JlYXRlQ2FyZCh0b2RvLCB0b2RvSWQpO1xyXG5cclxuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kb1Byb2NlZHVyZS5iaW5kKHRoaXMsIHByb2plY3RJZCwgdG9kb0lkKSk7XHJcbiAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0VkaXRUb2RvUHJvY2VkdXJlLmJpbmQodGhpcywgcHJvamVjdElkLCB0b2RvSWQpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0VkaXRUb2RvQnV0dG9uID0gZnVuY3Rpb24gc2hvd0VkaXRUb2RvQnV0dG9uKCkge1xyXG4gICAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvJyk7XHJcbiAgICBzdWJtaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kbycpO1xyXG4gICAgZWRpdFRvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93QWRkVG9kb0J1dHRvbiA9IGZ1bmN0aW9uIHNob3dBZGRUb2RvQnV0dG9uKCkge1xyXG4gICAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvJyk7XHJcbiAgICBzdWJtaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgY29uc3QgZWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG8nKTtcclxuICAgIGVkaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdFByb2NlZHVyZSA9IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RQcm9jZWR1cmUoaW5kZXgpIHtcclxuICAgIHN0b3JhZ2UoKS5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dFZGl0VG9kb1Byb2NlZHVyZShwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdXR0b24nKS5jbGljaygpO1xyXG4gICAgc2hvd0VkaXRUb2RvQnV0dG9uKCk7XHJcbiAgICBjb25zdCB0b2RvSWRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSWQnKTtcclxuICAgIHRvZG9JZEZpZWxkLmlubmVySFRNTCA9IHRvZG9JZDtcclxuICAgIGNvbnN0IHRvZG8gPSBzdG9yYWdlKCkuZ2V0U3RvcmFnZSgpW3Byb2plY3RJZF0ucG9ja2V0W3RvZG9JZF07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVUb2RvJykudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uVG9kbycpLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc1RvZG8nKS52YWx1ZSA9IHRvZG8ubm90ZXM7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZVRvZG8nKS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZU9mUmFkaW9CdXR0b25TaG91bGRCZUNoZWNrZWQgPSBgJHt0b2RvLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9UGA7XHJcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lT2ZSYWRpb0J1dHRvblNob3VsZEJlQ2hlY2tlZClbMF07XHJcbiAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUb2RvUHJvY2VkdXJlKHByb2plY3RJZCwgaW5kZXgpIHtcclxuICAgIHN0b3JhZ2UoKS5kZWxldGVUb2RvKHByb2plY3RJZCwgaW5kZXgpO1xyXG4gICAgc2hvd1RvZG9zKHByb2plY3RJZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdXR0b24nKTtcclxuICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FkZFRvZG9CdXR0b24pO1xyXG5cclxuICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFByb2plY3QnKTtcclxuICBzdWJtaXRQcm9qZWN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBldmVudHMoKS5jcmVhdGVQcm9qZWN0UHJvY2VkdXJlKClcclxuICB9O1xyXG4gIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb2RvJyk7XHJcbiAgZWRpdFRvZG9CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGV2ZW50cygpLmVkaXRUb2RvUHJvY2VkdXJlKClcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VG9kbycpO1xyXG4gIHN1Ym1pdFRvZG9CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGV2ZW50cygpLmNyZWF0ZVRvZG9Qcm9jZWR1cmUoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93UHJvamVjdCxcclxuICAgIHNob3dUb2RvcyxcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGRvbVxyXG59OyIsImltcG9ydCB7XHJcbiAgc3RvcmFnZVxyXG59XHJcbmZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7XHJcbiAgZG9tXHJcbn1cclxuZnJvbSAnLi9ET00nO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVByb2plY3RcclxufSBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVUb0RvSXRlbVxyXG59IGZyb20gJy4vdG9Eb0l0ZW1DcmVhdG9yJztcclxuXHJcbmNvbnN0IGV2ZW50cyA9IGZ1bmN0aW9uIGV2ZW50cygpIHtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb2NlZHVyZSgpIHtcclxuICAgIGNvbnN0IG5hbWVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVQcm9qZWN0JykudmFsdWU7XHJcbiAgICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWVQcm9qZWN0KTtcclxuICAgIG91clN0b3JlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24xJyk7XHJcbiAgICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpLnJlc2V0KCk7XHJcbiAgICBkb20oKS5zaG93UHJvamVjdCgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcygpIHtcclxuICAgIGNvbnN0IHRpdGxlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVRvZG8nKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uVG9kbycpLnZhbHVlO1xyXG4gICAgY29uc3Qgbm90ZXNUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzVG9kbycpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZVRvZG8nKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gW3RpdGxlVG9kbywgZGVzY1RvZG8sIGR1ZURhdGVUb2RvLCBwcmlvcml0eVRvZG8sIG5vdGVzVG9kb107XHJcbiAgICByZXR1cm4gdG9kb1ZhbHVlcztcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVUb2RvUHJvY2VkdXJlKCkge1xyXG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IGdldEZvcm1WYWx1ZXMoKTtcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb0RvSXRlbSh0b2RvVmFsdWVzWzBdLCB0b2RvVmFsdWVzWzFdLCB0b2RvVmFsdWVzWzJdLCB0b2RvVmFsdWVzWzNdLCB0b2RvVmFsdWVzWzRdKTtcclxuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SWQnKS5pbm5lckhUTUw7XHJcbiAgICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcclxuICAgIG91clN0b3JlLmFkZFRvZG8ocHJvamVjdElkLCBuZXdUb2RvKTtcclxuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbEJ1dHRvbicpO1xyXG4gICAgY2xvc2VNb2RhbEJ1dHRvbi5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybVwiKS5yZXNldCgpO1xyXG4gICAgZG9tKCkuc2hvd1RvZG9zKHByb2plY3RJZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0VG9kb1Byb2NlZHVyZSA9IGZ1bmN0aW9uIGVkaXRUb2RvUHJvY2VkdXJlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJZCcpLmlubmVySFRNTDtcclxuICAgIGNvbnN0IHRvZG9JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSWQnKS5pbm5lckhUTUw7XHJcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gZ2V0Rm9ybVZhbHVlcygpO1xyXG4gICAgY29uc3QgZWRpdGVkVG9kbyA9IHtcclxuICAgICAgdGl0bGU6IHRvZG9WYWx1ZXNbMF0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0b2RvVmFsdWVzWzFdLFxyXG4gICAgICBkdWVEYXRlOiB0b2RvVmFsdWVzWzJdLFxyXG4gICAgICBwcmlvcml0eTogdG9kb1ZhbHVlc1szXSxcclxuICAgICAgbm90ZXM6IHRvZG9WYWx1ZXNbNF1cclxuICAgIH07XHJcbiAgICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcclxuICAgIG91clN0b3JlLnVwZGF0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQsIGVkaXRlZFRvZG8pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JZCcpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uJyk7XHJcbiAgICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtXCIpLnJlc2V0KCk7XHJcbiAgICBkb20oKS5zaG93VG9kb3MocHJvamVjdElkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWRpdFRvZG9Qcm9jZWR1cmUsXHJcbiAgICBjcmVhdGVUb2RvUHJvY2VkdXJlLFxyXG4gICAgY3JlYXRlUHJvamVjdFByb2NlZHVyZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZXZlbnRzXHJcbn07IiwiY29uc3QgZnVuY3Rpb25zID0gZnVuY3Rpb24gZnVuY3Rpb25zKCkge1xyXG5cclxuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2hpY2hDYXJkQ2xhc3MgPSBmdW5jdGlvbiB3aGljaENhcmRDbGFzcyhwcmlvcml0eSkge1xyXG4gICAgbGV0IGNsYXNzTmFtZXM7XHJcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XHJcbiAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgIGNsYXNzTmFtZXMgPSB7XHJcbiAgICAgICAgICBjYXJkQ046ICdjYXJkIGJvcmRlci1kYW5nZXIgbWItMycsXHJcbiAgICAgICAgICBib2R5Q046ICdjYXJkLWJvZHkgdGV4dC1kYW5nZXInLFxyXG4gICAgICAgICAgZm9vdGVyQ046ICdjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItZGFuZ2VyJyxcclxuICAgICAgICAgIGhlYWRlckNOOiAnY2FyZC1oZWFkZXIgdGV4dC1kYW5nZXInLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgY2xhc3NOYW1lcyA9IHtcclxuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXByaW1hcnkgbWItMycsXHJcbiAgICAgICAgICBib2R5Q046ICdjYXJkLWJvZHkgdGV4dC1wcmltYXJ5JyxcclxuICAgICAgICAgIGZvb3RlckNOOiAnY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXByaW1hcnknLFxyXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXByaW1hcnknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY2xhc3NOYW1lcyA9IHtcclxuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXN1Y2Nlc3MgbWItMycsXHJcbiAgICAgICAgICBib2R5Q046ICdjYXJkLWJvZHkgdGV4dC1zdWNjZXNzJyxcclxuICAgICAgICAgIGZvb3RlckNOOiAnY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXN1Y2Nlc3MnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lcztcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVDYXJkID0gZnVuY3Rpb24gY3JlYXRlQ2FyZCh0b2RvLCB0b2RvSWQpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2FyZENOLFxyXG4gICAgICBib2R5Q04sXHJcbiAgICAgIGZvb3RlckNOLFxyXG4gICAgICBoZWFkZXJDTlxyXG4gICAgfSA9IHdoaWNoQ2FyZENsYXNzKHRvZG8ucHJpb3JpdHkpO1xyXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNhcmRDTik7XHJcbiAgICBjYXJkLnN0eWxlID0gJ21heC13aWR0aDogMThyZW07JztcclxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnZGl2JywgaGVhZGVyQ04sIHRvZG8udGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRCb2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYm9keUNOKTtcclxuICAgIGNvbnN0IGg1ID0gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2g1JywgJ2NhcmQtdGl0bGUnLCB0b2RvLmRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGV2ZXJ5dGhpbmcgPSB0b2RvLm5vdGVzICsgJyAnICsgdG9kby5kdWVEYXRlICsgJyAnICsgdG9kby5wcmlvcml0eVxyXG4gICAgY29uc3QgY2FyZFRleHQgPSBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgncCcsICdjYXJkLXRleHQnLCBldmVyeXRoaW5nKTtcclxuXHJcbiAgICBjb25zdCBjYXJkRm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgZm9vdGVyQ04pO1xyXG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpJywgJ2ZhciBmYS1lZGl0Jyk7XHJcbiAgICBjb25zdCB0cmFzaEljb24gPSBjcmVhdGVFbGVtZW50KCdpJywgJ2ZhciBmYS10cmFzaC1hbHQnKTtcclxuXHJcbiAgICBjYXJkRm9vdGVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcik7XHJcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGg1KTtcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJkLFxyXG4gICAgICB0cmFzaEljb24sXHJcbiAgICAgIGVkaXRJY29uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUVsZW1lbnQsXHJcbiAgICBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCxcclxuICAgIGNyZWF0ZUNhcmQsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZnVuY3Rpb25zfTsiLCJpbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBwb2NrZXQgPSBbXSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgcG9ja2V0LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcclxuICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcclxuICBvdXJTdG9yZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gIGNvbnNvbGUubG9nKCdTdWNjZXNzJylcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpLnJlc2V0KCk7XHJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVByb2plY3QsXHJcbiAgY3JlYXRlRGVmYXVsdFByb2plY3QsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRGVmYXVsdFByb2plY3RcclxufSBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBmdW5jdGlvbiBzdG9yYWdlKCkge1xyXG4gIGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgdG9Eb0xpc3Q7XHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvbGlzdCcpID09PSBudWxsKSB7XHJcbiAgICAgIHRvRG9MaXN0ID0gW107XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xyXG4gICAgICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9Eb0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb2xpc3QnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9Eb0xpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICBzdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IHdpbmRvdy5jb25maXJtKCdEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhhdCBwcm9qZWN0PycpO1xyXG4gICAgaWYgKGNvbmZpcm1hdGlvbikge1xyXG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xyXG4gICAgICBzdG9yYWdlLnNwbGljZShwcm9qZWN0SWQsIDEpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0SWQsIG5ld1RvZG8pIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICBzdG9yYWdlW3Byb2plY3RJZF0ucG9ja2V0LnB1c2gobmV3VG9kbyk7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gd2luZG93LmNvbmZpcm0oJ0RvIHlvdSB3YW50IHRvIHJlbW92ZSB0aGF0IHRhc2s/Jyk7XHJcbiAgICBpZiAoY29uZmlybWF0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICAgIHN0b3JhZ2VbcHJvamVjdElkXS5wb2NrZXQuc3BsaWNlKHRvZG9JZCwgMSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb0lkLCBlZGl0ZWRUb2RvKSB7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSB3aW5kb3cuY29uZmlybSgnRG8geW91IHdhbnQgdG8gZWRpdCB0aGF0IHRhc2s/Jyk7XHJcbiAgICBpZiAoY29uZmlybWF0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICAgIHN0b3JhZ2VbcHJvamVjdElkXS5wb2NrZXRbdG9kb0lkXSA9IGVkaXRlZFRvZG87XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RvcmFnZSxcclxuICAgIGFkZFByb2plY3QsXHJcbiAgICBkZWxldGVQcm9qZWN0LFxyXG4gICAgYWRkVG9kbyxcclxuICAgIGRlbGV0ZVRvZG8sXHJcbiAgICB1cGRhdGVUb2RvLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHN0b3JhZ2VcclxufTsiLCJjb25zdCBjcmVhdGVUb0RvSXRlbSA9IGZ1bmN0aW9uIGNyZWF0ZVRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QgPSBmYWxzZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXMsXHJcbiAgICBjaGVja2xpc3QsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlVG9Eb0l0ZW19O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9