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
exports.push([module.i, ".project {\n  cursor: pointer;\n}\n\n#addTodoButton {\n  display: none;\n}\n", ""]);
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
    const displayProjectName = document.getElementById('displayProjectName');
    displayProjectName.innerHTML = '';
    const addTodoButton = document.getElementById('addTodoButton');
    addTodoButton.style.display = 'none';
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
      } = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["functions"])().createCard(todo);

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
    cleanTodoList();
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
    if (nameProject !== '') {
      const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
      const newProject = Object(_projectCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(nameProject);
      ourStore.addProject(newProject);
      const closeModalButton = document.getElementById('closeModalButton1');
      closeModalButton.click();
      document.getElementById('projectForm').reset();
      Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showProject();
    }
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
    if (!todoValues.includes('')) {
      const newTodo = Object(_toDoItemCreator__WEBPACK_IMPORTED_MODULE_3__["createToDoItem"])(todoValues[0], todoValues[1], todoValues[2], todoValues[3], todoValues[4]);
      const projectId = document.getElementById('projectId').innerHTML;
      const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
      ourStore.addTodo(projectId, newTodo);
      const closeModalButton = document.getElementById('closeModalButton');
      closeModalButton.click();
      document.getElementById('todoForm').reset();
      Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"])().showTodos(projectId);
    }
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

  const createDefaultProject = function createDefaultProject() {
    const newProject = Object(_projectCreator__WEBPACK_IMPORTED_MODULE_2__["default"])('Default Project');
    const ourStore = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"])();
    ourStore.addProject(newProject);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    document.getElementById('projectForm').reset();
  };


  return {
    editTodoProcedure,
    createTodoProcedure,
    createProjectProcedure,
    createDefaultProject,
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
  const createCard = function createCard(todo) {
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
    const everything = `${todo.notes} ${todo.dueDate}`;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createProject; });
const createProject = function createProject(name, pocket = []) {
  return {
    name,
    pocket,
  };
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/models/events.js");
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle


const storage = function storage() {
  function getStorage() {
    let toDoList;
    if (window.localStorage.getItem('todolist') === null) {
      toDoList = [];
      window.localStorage.setItem('todolist', JSON.stringify(toDoList));
      Object(_events__WEBPACK_IMPORTED_MODULE_0__["events"])().createDefaultProject();
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
const createToDoItem = function createToDoItem(title, description, dueDate, priority, notes) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90b0RvSXRlbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVyxHQUFHLGFBQWE7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7OztBQ1RGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBTTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7OztBQ1oxQixVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRvZG9CdXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IGRvbSB9IGZyb20gJy4vbW9kZWxzL0RPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5jb25zdCBzaG93ID0gZG9tKCk7XG5zaG93LnNob3dQcm9qZWN0KCk7IiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHtcbiAgZnVuY3Rpb25zLFxufVxuICBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBzdG9yYWdlLFxufSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZXZlbnRzLFxufSBmcm9tICcuL2V2ZW50cyc7XG5cblxuY29uc3QgZG9tID0gZnVuY3Rpb24gZG9tKCkge1xuICBmdW5jdGlvbiBzaG93UHJvamVjdCgpIHtcbiAgICBjb25zdCBteVByb2plY3RzID0gc3RvcmFnZSgpLmdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwcm9qZWN0c09uUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIHByb2plY3RzT25QYWdlLmlubmVySFRNTCA9ICcnO1xuICAgIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0gPSBwcm9qZWN0O1xuICAgICAgY29uc3QgcHJvamVjdExpID0gZnVuY3Rpb25zKCkuY3JlYXRlRWxlbWVudCgnbGknLCAncHJvamVjdCBsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nKTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZnVuY3Rpb25zKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ3NwYW4nLCAncHJvamVjdCcsIG5hbWUpO1xuICAgICAgY29uc3QgdHJhc2hJY29uID0gZnVuY3Rpb25zKCkuY3JlYXRlRWxlbWVudCgnaScsICdmYXIgZmEtdHJhc2gtYWx0Jyk7XG4gICAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgICBwcm9qZWN0c09uUGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb3MuYmluZCh0aGlzLCBpbmRleCkpO1xuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdFByb2NlZHVyZS5iaW5kKHRoaXMsIGluZGV4KSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhblRvZG9MaXN0KCkge1xuICAgIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0Jyk7XG4gICAgdG9Eb0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZGlzcGxheVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXlQcm9qZWN0TmFtZScpO1xuICAgIGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdXR0b24nKTtcbiAgICBhZGRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VG9kb3MocHJvamVjdElkKSB7XG4gICAgY2xlYW5Ub2RvTGlzdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgZGlzcGxheVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXlQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IG15UHJvamVjdHMgPSBzdG9yYWdlKCkuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbXlQcm9qZWN0c1twcm9qZWN0SWRdLm5hbWU7XG4gICAgZGlzcGxheVByb2plY3ROYW1lLmlubmVySFRNTCA9IGAke3Byb2plY3ROYW1lfSBUb0RvwrRzYDtcbiAgICBjb25zdCBwcm9qZWN0SWRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SWQnKTtcbiAgICBwcm9qZWN0SWRGaWVsZC5pbm5lckhUTUwgPSBwcm9qZWN0SWQ7XG5cbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0ucG9ja2V0LmZvckVhY2goKHRvZG8sIHRvZG9JZCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0cmFzaEljb24sXG4gICAgICAgIGVkaXRJY29uLFxuICAgICAgfSA9IGZ1bmN0aW9ucygpLmNyZWF0ZUNhcmQodG9kbyk7XG5cbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG9Qcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9qZWN0SWQsIHRvZG9JZCkpO1xuICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFRvZG9Qcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9qZWN0SWQsIHRvZG9JZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2hvd0VkaXRUb2RvQnV0dG9uID0gZnVuY3Rpb24gc2hvd0VkaXRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IHN1Ym1pdFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VG9kbycpO1xuICAgIHN1Ym1pdFRvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kbycpO1xuICAgIGVkaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IHNob3dBZGRUb2RvQnV0dG9uID0gZnVuY3Rpb24gc2hvd0FkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvJyk7XG4gICAgc3VibWl0VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VG9kbycpO1xuICAgIGVkaXRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdFByb2NlZHVyZSA9IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RQcm9jZWR1cmUoaW5kZXgpIHtcbiAgICBzdG9yYWdlKCkuZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgY2xlYW5Ub2RvTGlzdCgpO1xuICAgIHNob3dQcm9qZWN0KCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kb1Byb2NlZHVyZShwcm9qZWN0SWQsIGluZGV4KSB7XG4gICAgc3RvcmFnZSgpLmRlbGV0ZVRvZG8ocHJvamVjdElkLCBpbmRleCk7XG4gICAgc2hvd1RvZG9zKHByb2plY3RJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RWRpdFRvZG9Qcm9jZWR1cmUocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J1dHRvbicpLmNsaWNrKCk7XG4gICAgc2hvd0VkaXRUb2RvQnV0dG9uKCk7XG4gICAgY29uc3QgdG9kb0lkRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lkJyk7XG4gICAgdG9kb0lkRmllbGQuaW5uZXJIVE1MID0gdG9kb0lkO1xuICAgIGNvbnN0IHRvZG8gPSBzdG9yYWdlKCkuZ2V0U3RvcmFnZSgpW3Byb2plY3RJZF0ucG9ja2V0W3RvZG9JZF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlVG9kbycpLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Ub2RvJykudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc1RvZG8nKS52YWx1ZSA9IHRvZG8ubm90ZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVUb2RvJykudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgY29uc3QgY2xhc3NOYW1lT2ZSYWRpb0J1dHRvblNob3VsZEJlQ2hlY2tlZCA9IGAke3RvZG8ucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1QYDtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lT2ZSYWRpb0J1dHRvblNob3VsZEJlQ2hlY2tlZClbMF07XG4gICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdXR0b24nKTtcbiAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJykucmVzZXQoKTsgc2hvd0FkZFRvZG9CdXR0b24oKTsgfSk7XG5cbiAgY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRQcm9qZWN0Jyk7XG4gIHN1Ym1pdFByb2plY3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBldmVudHMoKS5jcmVhdGVQcm9qZWN0UHJvY2VkdXJlKCk7XG4gIH07XG4gIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUb2RvJyk7XG4gIGVkaXRUb2RvQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZXZlbnRzKCkuZWRpdFRvZG9Qcm9jZWR1cmUoKTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvJyk7XG4gIHN1Ym1pdFRvZG9CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBldmVudHMoKS5jcmVhdGVUb2RvUHJvY2VkdXJlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93UHJvamVjdCxcbiAgICBzaG93VG9kb3MsXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBkb20sXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHtcbiAgc3RvcmFnZSxcbn1cbiAgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7XG4gIGRvbSxcbn1cbiAgZnJvbSAnLi9ET00nO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0Q3JlYXRvcic7XG5pbXBvcnQge1xuICBjcmVhdGVUb0RvSXRlbSxcbn0gZnJvbSAnLi90b0RvSXRlbUNyZWF0b3InO1xuXG5jb25zdCBldmVudHMgPSBmdW5jdGlvbiBldmVudHMoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQcm9jZWR1cmUoKSB7XG4gICAgY29uc3QgbmFtZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZVByb2plY3QnKS52YWx1ZTtcbiAgICBpZiAobmFtZVByb2plY3QgIT09ICcnKSB7XG4gICAgICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWVQcm9qZWN0KTtcbiAgICAgIG91clN0b3JlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24xJyk7XG4gICAgICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKS5yZXNldCgpO1xuICAgICAgZG9tKCkuc2hvd1Byb2plY3QoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xuICAgIGNvbnN0IHRpdGxlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVRvZG8nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvblRvZG8nKS52YWx1ZTtcbiAgICBjb25zdCBub3Rlc1RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNUb2RvJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZVRvZG8nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9WYWx1ZXMgPSBbdGl0bGVUb2RvLCBkZXNjVG9kbywgZHVlRGF0ZVRvZG8sIHByaW9yaXR5VG9kbywgbm90ZXNUb2RvXTtcbiAgICByZXR1cm4gdG9kb1ZhbHVlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvZG9Qcm9jZWR1cmUoKSB7XG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IGdldEZvcm1WYWx1ZXMoKTtcbiAgICBpZiAoIXRvZG9WYWx1ZXMuaW5jbHVkZXMoJycpKSB7XG4gICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9Eb0l0ZW0odG9kb1ZhbHVlc1swXSwgdG9kb1ZhbHVlc1sxXSwgdG9kb1ZhbHVlc1syXSwgdG9kb1ZhbHVlc1szXSwgdG9kb1ZhbHVlc1s0XSk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElkJykuaW5uZXJIVE1MO1xuICAgICAgY29uc3Qgb3VyU3RvcmUgPSBzdG9yYWdlKCk7XG4gICAgICBvdXJTdG9yZS5hZGRUb2RvKHByb2plY3RJZCwgbmV3VG9kbyk7XG4gICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24nKTtcbiAgICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpLnJlc2V0KCk7XG4gICAgICBkb20oKS5zaG93VG9kb3MocHJvamVjdElkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBlZGl0VG9kb1Byb2NlZHVyZSA9IGZ1bmN0aW9uIGVkaXRUb2RvUHJvY2VkdXJlKCkge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SWQnKS5pbm5lckhUTUw7XG4gICAgY29uc3QgdG9kb0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JZCcpLmlubmVySFRNTDtcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gZ2V0Rm9ybVZhbHVlcygpO1xuICAgIGNvbnN0IGVkaXRlZFRvZG8gPSB7XG4gICAgICB0aXRsZTogdG9kb1ZhbHVlc1swXSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0b2RvVmFsdWVzWzFdLFxuICAgICAgZHVlRGF0ZTogdG9kb1ZhbHVlc1syXSxcbiAgICAgIHByaW9yaXR5OiB0b2RvVmFsdWVzWzNdLFxuICAgICAgbm90ZXM6IHRvZG9WYWx1ZXNbNF0sXG4gICAgfTtcbiAgICBjb25zdCBvdXJTdG9yZSA9IHN0b3JhZ2UoKTtcbiAgICBvdXJTdG9yZS51cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb0lkLCBlZGl0ZWRUb2RvKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uJyk7XG4gICAgY2xvc2VNb2RhbEJ1dHRvbi5jbGljaygpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpLnJlc2V0KCk7XG4gICAgZG9tKCkuc2hvd1RvZG9zKHByb2plY3RJZCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGVmYXVsdFByb2plY3QgPSBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgY29uc3Qgb3VyU3RvcmUgPSBzdG9yYWdlKCk7XG4gICAgb3VyU3RvcmUuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJykucmVzZXQoKTtcbiAgfTtcblxuXG4gIHJldHVybiB7XG4gICAgZWRpdFRvZG9Qcm9jZWR1cmUsXG4gICAgY3JlYXRlVG9kb1Byb2NlZHVyZSxcbiAgICBjcmVhdGVQcm9qZWN0UHJvY2VkdXJlLFxuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgZXZlbnRzLFxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuY29uc3QgZnVuY3Rpb25zID0gZnVuY3Rpb24gZnVuY3Rpb25zKCkge1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IHdoaWNoQ2FyZENsYXNzID0gZnVuY3Rpb24gd2hpY2hDYXJkQ2xhc3MocHJpb3JpdHkpIHtcbiAgICBsZXQgY2xhc3NOYW1lcztcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgY2xhc3NOYW1lcyA9IHtcbiAgICAgICAgICBjYXJkQ046ICdjYXJkIGJvcmRlci1kYW5nZXIgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtZGFuZ2VyJyxcbiAgICAgICAgICBmb290ZXJDTjogJ2NhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1kYW5nZXInLFxuICAgICAgICAgIGhlYWRlckNOOiAnY2FyZC1oZWFkZXIgdGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlciBib3JkZXItYm90dG9tJyxcbiAgICAgICAgICBpY29uRWRpdENOOiAnZmFyIGZhLWVkaXQgdGV4dC1kYW5nZXIgbXItMycsXG4gICAgICAgICAgaWNvblRyYXNoQ046ICdmYXIgZmEtdHJhc2gtYWx0IHRleHQtZGFuZ2VyJyxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBjbGFzc05hbWVzID0ge1xuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXByaW1hcnkgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtcHJpbWFyeScsXG4gICAgICAgICAgZm9vdGVyQ046ICdjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItcHJpbWFyeScsXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXByaW1hcnkgYm9yZGVyLXByaW1hcnkgYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICAgaWNvbkVkaXRDTjogJ2ZhciBmYS1lZGl0IHRleHQtcHJpbWFyeSBtci0zJyxcbiAgICAgICAgICBpY29uVHJhc2hDTjogJ2ZhciBmYS10cmFzaC1hbHQgdGV4dC1wcmltYXJ5JyxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjbGFzc05hbWVzID0ge1xuICAgICAgICAgIGNhcmRDTjogJ2NhcmQgYm9yZGVyLXN1Y2Nlc3MgbWItMycsXG4gICAgICAgICAgYm9keUNOOiAnY2FyZC1ib2R5IHRleHQtc3VjY2VzcycsXG4gICAgICAgICAgZm9vdGVyQ046ICdjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2VzcycsXG4gICAgICAgICAgaGVhZGVyQ046ICdjYXJkLWhlYWRlciB0ZXh0LXN1Y2Nlc3MgYm9yZGVyLXN1Y2Nlc3MgYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICAgaWNvbkVkaXRDTjogJ2ZhciBmYS1lZGl0IHRleHQtc3VjY2VzcyBtci0zJyxcbiAgICAgICAgICBpY29uVHJhc2hDTjogJ2ZhciBmYS10cmFzaC1hbHQgdGV4dC1zdWNjZXNzJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IGNyZWF0ZUNhcmQgPSBmdW5jdGlvbiBjcmVhdGVDYXJkKHRvZG8pIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXJkQ04sXG4gICAgICBib2R5Q04sXG4gICAgICBmb290ZXJDTixcbiAgICAgIGhlYWRlckNOLFxuICAgICAgaWNvbkVkaXRDTixcbiAgICAgIGljb25UcmFzaENOLFxuICAgIH0gPSB3aGljaENhcmRDbGFzcyh0b2RvLnByaW9yaXR5KTtcbiAgICBjb25zdCBjb2wgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29sLTQnKTtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY2FyZENOKTtcbiAgICBjYXJkLnN0eWxlID0gJ21heC13aWR0aDogMThyZW07JztcbiAgICBjb25zdCBjYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2RpdicsIGhlYWRlckNOLCB0b2RvLnRpdGxlKTtcblxuICAgIGNvbnN0IGNhcmRCb2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYm9keUNOKTtcbiAgICBjb25zdCBoNSA9IGNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdoNScsICdjYXJkLXRpdGxlJywgdG9kby5kZXNjcmlwdGlvbik7XG4gICAgY29uc3QgZXZlcnl0aGluZyA9IGAke3RvZG8ubm90ZXN9ICR7dG9kby5kdWVEYXRlfWA7XG4gICAgY29uc3QgY2FyZFRleHQgPSBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgncCcsICdjYXJkLXRleHQnLCBldmVyeXRoaW5nKTtcblxuICAgIGNvbnN0IGNhcmRGb290ZXIgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInLCBmb290ZXJDTik7XG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpJywgaWNvbkVkaXRDTik7XG4gICAgY29uc3QgdHJhc2hJY29uID0gY3JlYXRlRWxlbWVudCgnaScsIGljb25UcmFzaENOKTtcblxuICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNvbCk7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoaDUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRGb290ZXIpO1xuICAgIGNvbC5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb2wsXG4gICAgICB0cmFzaEljb24sXG4gICAgICBlZGl0SWNvbixcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCxcbiAgICBjcmVhdGVDYXJkLFxuICB9O1xufTtcblxuXG5leHBvcnQgeyBmdW5jdGlvbnMgfTsiLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBwb2NrZXQgPSBbXSkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcG9ja2V0LFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCBhcyBkZWZhdWx0LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQge1xuICBldmVudHMsXG59IGZyb20gJy4vZXZlbnRzJztcblxuY29uc3Qgc3RvcmFnZSA9IGZ1bmN0aW9uIHN0b3JhZ2UoKSB7XG4gIGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgbGV0IHRvRG9MaXN0O1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykgPT09IG51bGwpIHtcbiAgICAgIHRvRG9MaXN0ID0gW107XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbiAgICAgIGV2ZW50cygpLmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9MaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpO1xuICAgIH1cbiAgICByZXR1cm4gdG9Eb0xpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgIHN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSB3aW5kb3cuY29uZmlybSgnRG8geW91IHdhbnQgdG8gcmVtb3ZlIHRoYXQgcHJvamVjdD8nKTtcbiAgICBpZiAoY29uZmlybWF0aW9uKSB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgICAgc3RvcmFnZS5zcGxpY2UocHJvamVjdElkLCAxKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0SWQsIG5ld1RvZG8pIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgIHN0b3JhZ2VbcHJvamVjdElkXS5wb2NrZXQucHVzaChuZXdUb2RvKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IHdpbmRvdy5jb25maXJtKCdEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhhdCB0YXNrPycpO1xuICAgIGlmIChjb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICBzdG9yYWdlW3Byb2plY3RJZF0ucG9ja2V0LnNwbGljZSh0b2RvSWQsIDEpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb0lkLCBlZGl0ZWRUb2RvKSB7XG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gd2luZG93LmNvbmZpcm0oJ0RvIHlvdSB3YW50IHRvIGVkaXQgdGhhdCB0YXNrPycpO1xuICAgIGlmIChjb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICBzdG9yYWdlW3Byb2plY3RJZF0ucG9ja2V0W3RvZG9JZF0gPSBlZGl0ZWRUb2RvO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFN0b3JhZ2UsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICB1cGRhdGVUb2RvLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgc3RvcmFnZSxcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmNvbnN0IGNyZWF0ZVRvRG9JdGVtID0gZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVG9Eb0l0ZW0gfTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=