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
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */





const dom = function dom() {
  function showProject() {
    const myProjects = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().getStorage();
    const projectsOnPage = document.getElementById('projects');
    projectsOnPage.innerHTML = '';
    myProjects.forEach((project, index) => {
      const {
        name,
      } = project;
      const projectLi = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createElement('li', 'project list-group-item list-group-item-secondary text-center d-flex justify-content-between');
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
    displayProjectName.innerHTML = `${projectName} ToDo´s`;
    const projectIdField = document.getElementById('projectId');
    projectIdField.innerHTML = projectId;

    myProjects[projectId].pocket.forEach((todo, todoId) => {
      const {
        trashIcon,
        editIcon,
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
  };

  const showAddTodoButton = function showAddTodoButton() {
    const submitTodoButton = document.getElementById('submitTodo');
    submitTodoButton.style.display = 'block';
    const editTodoButton = document.getElementById('editTodo');
    editTodoButton.style.display = 'none';
  };

  const deleteProjectProcedure = function deleteProjectProcedure(index) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().deleteProject(index);
    showProject();
  };

  function deleteTodoProcedure(projectId, index) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_1__["storage"])().deleteTodo(projectId, index);
    showTodos(projectId);
  }

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

  const addTodoButton = document.getElementById('addTodoButton');
  addTodoButton.addEventListener('click', () => { document.getElementById('todoForm').reset(); showAddTodoButton(); });

  const submitProject = document.getElementById('submitProject');
  submitProject.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().createProjectProcedure();
  };
  const editTodoButton = document.getElementById('editTodo');
  editTodoButton.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().editTodoProcedure();
  };
  const submitTodoButton = document.getElementById('submitTodo');
  submitTodoButton.onclick = function () {
    Object(_events__WEBPACK_IMPORTED_MODULE_2__["events"])().createTodoProcedure();
  };

  /* const closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.addEventListener('click', () => { document.getElementById('todoForm').reset(); });
   closeModalButton.onclick = function () {
    document.getElementById('todoForm').reset();
  }; */

  return {
    showProject,
    showTodos,
  };
};



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
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */





const events = function events() {
  function createProjectProcedure() {
    const nameProject = document.getElementById('nameProject').value;
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    const newProject = Object(_projectCreator__WEBPACK_IMPORTED_MODULE_2__["createProject"])(nameProject);
    ourStore.addProject(newProject);
    const closeModalButton = document.getElementById('closeModalButton1');
    closeModalButton.click();
    document.getElementById('projectForm').reset();
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
  }

  function createTodoProcedure() {
    const todoValues = getFormValues();
    const newTodo = Object(_toDoItemCreator__WEBPACK_IMPORTED_MODULE_3__["createToDoItem"])(todoValues[0], todoValues[1], todoValues[2], todoValues[3], todoValues[4]);
    const projectId = document.getElementById('projectId').innerHTML;
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    ourStore.addTodo(projectId, newTodo);
    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.click();
    document.getElementById('todoForm').reset();
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
      notes: todoValues[4],
    };
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    ourStore.updateTodo(projectId, todoId, editedTodo);
    document.getElementById('todoId').innerHTML = '';
    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.click();
    document.getElementById('todoForm').reset();
    Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showTodos(projectId);
  };

  return {
    editTodoProcedure,
    createTodoProcedure,
    createProjectProcedure,
  };
};



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
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
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

  // eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line import/no-cycle


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
  document.getElementById('projectForm').reset();
  // eslint-disable-next-line no-restricted-globals
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
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle


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
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90b0RvSXRlbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixXQUFXLEdBQUcsYUFBYSxHQUFHLGNBQWM7QUFDdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7Ozs7Ozs7Ozs7OztBQ3RCRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNEVBQW9CO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7O0FDYjFCLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2plY3Qge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVG9kb0J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9tb2RlbHMvRE9NJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IHNob3cgPSBkb20oKTtcbnNob3cuc2hvd1Byb2plY3QoKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBmdW5jdGlvbnMsXG59XG4gIGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIHN0b3JhZ2UsXG59IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQge1xuICBldmVudHMsXG59IGZyb20gJy4vZXZlbnRzJztcblxuXG5jb25zdCBkb20gPSBmdW5jdGlvbiBkb20oKSB7XG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0KCkge1xuICAgIGNvbnN0IG15UHJvamVjdHMgPSBzdG9yYWdlKCkuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2plY3RzT25QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgcHJvamVjdHNPblBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgbXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBuYW1lLFxuICAgICAgfSA9IHByb2plY3Q7XG4gICAgICBjb25zdCBwcm9qZWN0TGkgPSBmdW5jdGlvbnMoKS5jcmVhdGVFbGVtZW50KCdsaScsICdwcm9qZWN0IGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5IHRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBmdW5jdGlvbnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnc3BhbicsICdwcm9qZWN0JywgbmFtZSk7XG4gICAgICBjb25zdCB0cmFzaEljb24gPSBmdW5jdGlvbnMoKS5jcmVhdGVFbGVtZW50KCdpJywgJ2ZhciBmYS10cmFzaC1hbHQnKTtcbiAgICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcblxuICAgICAgcHJvamVjdHNPblBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcbiAgICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG9zLmJpbmQodGhpcywgaW5kZXgpKTtcbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RQcm9jZWR1cmUuYmluZCh0aGlzLCBpbmRleCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5Ub2RvTGlzdCgpIHtcbiAgICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTGlzdCcpO1xuICAgIHRvRG9MaXN0LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RvZG9zKHByb2plY3RJZCkge1xuICAgIGNsZWFuVG9kb0xpc3QoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5UHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBteVByb2plY3RzID0gc3RvcmFnZSgpLmdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG15UHJvamVjdHNbcHJvamVjdElkXS5uYW1lO1xuICAgIGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBgJHtwcm9qZWN0TmFtZX0gVG9Eb8K0c2A7XG4gICAgY29uc3QgcHJvamVjdElkRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElkJyk7XG4gICAgcHJvamVjdElkRmllbGQuaW5uZXJIVE1MID0gcHJvamVjdElkO1xuXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnBvY2tldC5mb3JFYWNoKCh0b2RvLCB0b2RvSWQpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJhc2hJY29uLFxuICAgICAgICBlZGl0SWNvbixcbiAgICAgIH0gPSBmdW5jdGlvbnMoKS5jcmVhdGVDYXJkKHRvZG8sIHRvZG9JZCk7XG5cbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG9Qcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9qZWN0SWQsIHRvZG9JZCkpO1xuICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFRvZG9Qcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9qZWN0SWQsIHRvZG9JZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2hvd0VkaXRUb2RvQnV0dG9uID0gZnVuY3Rpb24gc2hvd0VkaXRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IHN1Ym1pdFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VG9kbycpO1xuICAgIHN1Ym1pdFRvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kbycpO1xuICAgIGVkaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IHNob3dBZGRUb2RvQnV0dG9uID0gZnVuY3Rpb24gc2hvd0FkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvJyk7XG4gICAgc3VibWl0VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kbycpO1xuICAgIGVkaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdFByb2NlZHVyZSA9IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RQcm9jZWR1cmUoaW5kZXgpIHtcbiAgICBzdG9yYWdlKCkuZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgc2hvd1Byb2plY3QoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkZWxldGVUb2RvUHJvY2VkdXJlKHByb2plY3RJZCwgaW5kZXgpIHtcbiAgICBzdG9yYWdlKCkuZGVsZXRlVG9kbyhwcm9qZWN0SWQsIGluZGV4KTtcbiAgICBzaG93VG9kb3MocHJvamVjdElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dFZGl0VG9kb1Byb2NlZHVyZShwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnV0dG9uJykuY2xpY2soKTtcbiAgICBzaG93RWRpdFRvZG9CdXR0b24oKTtcbiAgICBjb25zdCB0b2RvSWRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSWQnKTtcbiAgICB0b2RvSWRGaWVsZC5pbm5lckhUTUwgPSB0b2RvSWQ7XG4gICAgY29uc3QgdG9kbyA9IHN0b3JhZ2UoKS5nZXRTdG9yYWdlKClbcHJvamVjdElkXS5wb2NrZXRbdG9kb0lkXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVUb2RvJykudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvblRvZG8nKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzVG9kbycpLnZhbHVlID0gdG9kby5ub3RlcztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZVRvZG8nKS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICBjb25zdCBjbGFzc05hbWVPZlJhZGlvQnV0dG9uU2hvdWxkQmVDaGVja2VkID0gYCR7dG9kby5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVBgO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVPZlJhZGlvQnV0dG9uU2hvdWxkQmVDaGVja2VkKVswXTtcbiAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J1dHRvbicpO1xuICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZXNldCgpOyBzaG93QWRkVG9kb0J1dHRvbigpOyB9KTtcblxuICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFByb2plY3QnKTtcbiAgc3VibWl0UHJvamVjdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGV2ZW50cygpLmNyZWF0ZVByb2plY3RQcm9jZWR1cmUoKTtcbiAgfTtcbiAgY29uc3QgZWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRvZG8nKTtcbiAgZWRpdFRvZG9CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBldmVudHMoKS5lZGl0VG9kb1Byb2NlZHVyZSgpO1xuICB9O1xuICBjb25zdCBzdWJtaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFRvZG8nKTtcbiAgc3VibWl0VG9kb0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGV2ZW50cygpLmNyZWF0ZVRvZG9Qcm9jZWR1cmUoKTtcbiAgfTtcblxuICAvKiBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24nKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykucmVzZXQoKTsgfSk7XG4gICBjbG9zZU1vZGFsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykucmVzZXQoKTtcbiAgfTsgKi9cblxuICByZXR1cm4ge1xuICAgIHNob3dQcm9qZWN0LFxuICAgIHNob3dUb2RvcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGRvbSxcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBzdG9yYWdlLFxufVxuICBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZG9tLFxufVxuICBmcm9tICcuL0RPTSc7XG5pbXBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcbmltcG9ydCB7XG4gIGNyZWF0ZVRvRG9JdGVtLFxufSBmcm9tICcuL3RvRG9JdGVtQ3JlYXRvcic7XG5cbmNvbnN0IGV2ZW50cyA9IGZ1bmN0aW9uIGV2ZW50cygpIHtcbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb2NlZHVyZSgpIHtcbiAgICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lUHJvamVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IG91clN0b3JlID0gc3RvcmFnZSgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWVQcm9qZWN0KTtcbiAgICBvdXJTdG9yZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbEJ1dHRvbjEnKTtcbiAgICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJykucmVzZXQoKTtcbiAgICBkb20oKS5zaG93UHJvamVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcygpIHtcbiAgICBjb25zdCB0aXRsZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVUb2RvJykudmFsdWU7XG4gICAgY29uc3QgZGVzY1RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Ub2RvJykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXNUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzVG9kbycpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVUb2RvJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHlUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gW3RpdGxlVG9kbywgZGVzY1RvZG8sIGR1ZURhdGVUb2RvLCBwcmlvcml0eVRvZG8sIG5vdGVzVG9kb107XG4gICAgcmV0dXJuIHRvZG9WYWx1ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUb2RvUHJvY2VkdXJlKCkge1xuICAgIGNvbnN0IHRvZG9WYWx1ZXMgPSBnZXRGb3JtVmFsdWVzKCk7XG4gICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvRG9JdGVtKHRvZG9WYWx1ZXNbMF0sIHRvZG9WYWx1ZXNbMV0sIHRvZG9WYWx1ZXNbMl0sIHRvZG9WYWx1ZXNbM10sIHRvZG9WYWx1ZXNbNF0pO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SWQnKS5pbm5lckhUTUw7XG4gICAgY29uc3Qgb3VyU3RvcmUgPSBzdG9yYWdlKCk7XG4gICAgb3VyU3RvcmUuYWRkVG9kbyhwcm9qZWN0SWQsIG5ld1RvZG8pO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbEJ1dHRvbicpO1xuICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZXNldCgpO1xuICAgIGRvbSgpLnNob3dUb2Rvcyhwcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgZWRpdFRvZG9Qcm9jZWR1cmUgPSBmdW5jdGlvbiBlZGl0VG9kb1Byb2NlZHVyZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElkJykuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHRvZG9JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSWQnKS5pbm5lckhUTUw7XG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IGdldEZvcm1WYWx1ZXMoKTtcbiAgICBjb25zdCBlZGl0ZWRUb2RvID0ge1xuICAgICAgdGl0bGU6IHRvZG9WYWx1ZXNbMF0sXG4gICAgICBkZXNjcmlwdGlvbjogdG9kb1ZhbHVlc1sxXSxcbiAgICAgIGR1ZURhdGU6IHRvZG9WYWx1ZXNbMl0sXG4gICAgICBwcmlvcml0eTogdG9kb1ZhbHVlc1szXSxcbiAgICAgIG5vdGVzOiB0b2RvVmFsdWVzWzRdLFxuICAgIH07XG4gICAgY29uc3Qgb3VyU3RvcmUgPSBzdG9yYWdlKCk7XG4gICAgb3VyU3RvcmUudXBkYXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCwgZWRpdGVkVG9kbyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JZCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbEJ1dHRvbicpO1xuICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5yZXNldCgpO1xuICAgIGRvbSgpLnNob3dUb2Rvcyhwcm9qZWN0SWQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZWRpdFRvZG9Qcm9jZWR1cmUsXG4gICAgY3JlYXRlVG9kb1Byb2NlZHVyZSxcbiAgICBjcmVhdGVQcm9qZWN0UHJvY2VkdXJlLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgZXZlbnRzLFxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuY29uc3QgZnVuY3Rpb25zID0gZnVuY3Rpb24gZnVuY3Rpb25zKCkge1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IHdoaWNoQ2FyZENsYXNzID0gZnVuY3Rpb24gd2hpY2hDYXJkQ2xhc3MocHJpb3JpdHkpIHtcbiAgICBsZXQgY2xhc3NOYW1lcztcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgY2xhc3NOYW1lcyA9IHtcbiAgICAgICAgICBjYXJkQ046ICdjYXJkIGJvcmRlci1kYW5nZXIgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtZGFuZ2VyJyxcbiAgICAgICAgICBmb290ZXJDTjogJ2NhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1kYW5nZXInLFxuICAgICAgICAgIGhlYWRlckNOOiAnY2FyZC1oZWFkZXIgdGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlciBib3JkZXItYm90dG9tJyxcbiAgICAgICAgICBpY29uRWRpdENOOiAnZmFyIGZhLWVkaXQgdGV4dC1kYW5nZXIgbXItMycsXG4gICAgICAgICAgaWNvblRyYXNoQ046ICdmYXIgZmEtdHJhc2gtYWx0IHRleHQtZGFuZ2VyJyxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBjbGFzc05hbWVzID0ge1xuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXByaW1hcnkgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtcHJpbWFyeScsXG4gICAgICAgICAgZm9vdGVyQ046ICdjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItcHJpbWFyeScsXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXByaW1hcnkgYm9yZGVyLXByaW1hcnkgYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICAgaWNvbkVkaXRDTjogJ2ZhciBmYS1lZGl0IHRleHQtcHJpbWFyeSBtci0zJyxcbiAgICAgICAgICBpY29uVHJhc2hDTjogJ2ZhciBmYS10cmFzaC1hbHQgdGV4dC1wcmltYXJ5JyxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjbGFzc05hbWVzID0ge1xuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXN1Y2Nlc3MgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtc3VjY2VzcycsXG4gICAgICAgICAgZm9vdGVyQ046ICdjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2VzcycsXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXN1Y2Nlc3MgYm9yZGVyLXN1Y2Nlc3MgYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICAgaWNvbkVkaXRDTjogJ2ZhciBmYS1lZGl0IHRleHQtc3VjY2VzcyBtci0zJyxcbiAgICAgICAgICBpY29uVHJhc2hDTjogJ2ZhciBmYS10cmFzaC1hbHQgdGV4dC1zdWNjZXNzJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IGNyZWF0ZUNhcmQgPSBmdW5jdGlvbiBjcmVhdGVDYXJkKHRvZG8sIHRvZG9JZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcmRDTixcbiAgICAgIGJvZHlDTixcbiAgICAgIGZvb3RlckNOLFxuICAgICAgaGVhZGVyQ04sXG4gICAgICBpY29uRWRpdENOLFxuICAgICAgaWNvblRyYXNoQ04sXG4gICAgfSA9IHdoaWNoQ2FyZENsYXNzKHRvZG8ucHJpb3JpdHkpO1xuICAgIGNvbnN0IGNvbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2wtNCcpO1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjYXJkQ04pO1xuICAgIGNhcmQuc3R5bGUgPSAnbWF4LXdpZHRoOiAxOHJlbTsnO1xuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnZGl2JywgaGVhZGVyQ04sIHRvZG8udGl0bGUpO1xuXG4gICAgY29uc3QgY2FyZEJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBib2R5Q04pO1xuICAgIGNvbnN0IGg1ID0gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2g1JywgJ2NhcmQtdGl0bGUnLCB0b2RvLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBldmVyeXRoaW5nID0gYCR7dG9kby5ub3Rlc30gJHt0b2RvLmR1ZURhdGV9ICR7dG9kby5wcmlvcml0eX1gO1xuICAgIGNvbnN0IGNhcmRUZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ3AnLCAnY2FyZC10ZXh0JywgZXZlcnl0aGluZyk7XG5cbiAgICBjb25zdCBjYXJkRm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgZm9vdGVyQ04pO1xuICAgIGNvbnN0IGVkaXRJY29uID0gY3JlYXRlRWxlbWVudCgnaScsIGljb25FZGl0Q04pO1xuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2knLCBpY29uVHJhc2hDTik7XG5cbiAgICBjYXJkRm9vdGVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBjYXJkRm9vdGVyLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjb2wpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGg1KTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRm9vdGVyKTtcbiAgICBjb2wuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sLFxuICAgICAgdHJhc2hJY29uLFxuICAgICAgZWRpdEljb24sXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQsXG4gICAgY3JlYXRlQ2FyZCxcbiAgfTtcbn07XG5cblxuZXhwb3J0IHsgZnVuY3Rpb25zIH07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIHBvY2tldCA9IFtdKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBwb2NrZXQsXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gIGNvbnN0IG91clN0b3JlID0gc3RvcmFnZSgpO1xuICBvdXJTdG9yZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKS5yZXNldCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgY3JlYXRlRGVmYXVsdFByb2plY3QsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7XG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcblxuY29uc3Qgc3RvcmFnZSA9IGZ1bmN0aW9uIHN0b3JhZ2UoKSB7XG4gIGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgbGV0IHRvRG9MaXN0O1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykgPT09IG51bGwpIHtcbiAgICAgIHRvRG9MaXN0ID0gW107XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbiAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9MaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpO1xuICAgIH1cbiAgICByZXR1cm4gdG9Eb0xpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgIHN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSB3aW5kb3cuY29uZmlybSgnRG8geW91IHdhbnQgdG8gcmVtb3ZlIHRoYXQgcHJvamVjdD8nKTtcbiAgICBpZiAoY29uZmlybWF0aW9uKSB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgICAgc3RvcmFnZS5zcGxpY2UocHJvamVjdElkLCAxKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0SWQsIG5ld1RvZG8pIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgIHN0b3JhZ2VbcHJvamVjdElkXS5wb2NrZXQucHVzaChuZXdUb2RvKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IHdpbmRvdy5jb25maXJtKCdEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhhdCB0YXNrPycpO1xuICAgIGlmIChjb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICBzdG9yYWdlW3Byb2plY3RJZF0ucG9ja2V0LnNwbGljZSh0b2RvSWQsIDEpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb0lkLCBlZGl0ZWRUb2RvKSB7XG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gd2luZG93LmNvbmZpcm0oJ0RvIHlvdSB3YW50IHRvIGVkaXQgdGhhdCB0YXNrPycpO1xuICAgIGlmIChjb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICBzdG9yYWdlW3Byb2plY3RJZF0ucG9ja2V0W3RvZG9JZF0gPSBlZGl0ZWRUb2RvO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFN0b3JhZ2UsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICB1cGRhdGVUb2RvLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgc3RvcmFnZSxcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmNvbnN0IGNyZWF0ZVRvRG9JdGVtID0gZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCA9IGZhbHNlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBjaGVja2xpc3QsXG4gIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUb0RvSXRlbSB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==