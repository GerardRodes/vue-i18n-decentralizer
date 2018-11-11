// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VUE_I18N_REGEX_FUNC_CALLER = exports.PRUNE = exports.DECENTRALIZE = void 0;
// commands
const DECENTRALIZE = 'decentralize';
exports.DECENTRALIZE = DECENTRALIZE;
const PRUNE = 'prune'; // VUE i18n REGEX

exports.PRUNE = PRUNE;
const VUE_I18N_REGEX_FUNC_CALLER = /\$t\((.+)\)/g;
exports.VUE_I18N_REGEX_FUNC_CALLER = VUE_I18N_REGEX_FUNC_CALLER;
},{}],"cli/options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("~/constants");

const availableCommands = command => {
  switch (command) {
    case _constants.DECENTRALIZE:
    case _constants.PRUNE:
      return command;

    default:
      return;
  }
};

var _default = [{
  name: 'command',
  defaultOption: true,
  type: availableCommands
}, {
  name: 'source',
  alias: 's',
  description: 'The input files to process',
  multiple: true,
  typeLabel: '{underline file}|{underline folder} {bold multiple}'
}, {
  name: 'localesFolder',
  alias: 'l',
  description: 'Folder containing the vue-i18n json files',
  typeLabel: '{underline folder}'
}, {
  name: 'output',
  alias: 'o',
  description: 'Folder where to write the output, if undefined source files will be overwritten',
  typeLabel: '{underline folder}'
}, {
  name: 'ignoreKeys',
  alias: 'i',
  multiple: true,
  typeLabel: '{underline string}',
  description: 'Keys to ignore from json translations files'
}];
exports.default = _default;
},{"~/constants":"constants.js"}],"cli/usage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commandLineUsage = _interopRequireDefault(require("command-line-usage"));

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _commandLineUsage.default)([{
  header: 'vue-i18n-decentralizer',
  content: 'Split your centralized locales into every vue component which uses them'
}, {
  header: 'Usage',
  content: 'node dist/main.js [command] [...args]'
}, {
  header: 'Available Commands',
  content: [{
    name: 'decentralize',
    summary: 'split translations from your locales files to your component files'
  }, {
    name: 'prune',
    summary: 'remove unused translations frmo your locales files'
  }]
}, {
  header: 'Arguments',
  optionList: _options.default.filter(opt => opt.name !== 'command')
}]);

exports.default = _default;
},{"./options":"cli/options.js"}],"errors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorRequireArgument = void 0;

const ErrorRequireArgument = name => new Error(`Argument ${name} is required`);

exports.ErrorRequireArgument = ErrorRequireArgument;
},{}],"helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateArguments = void 0;

var _errors = require("~/errors");

const validateArguments = command => ({
  source,
  localesFolder
}) => {
  if (!Array.isArray(source) || !(source.length > 0)) {
    throw (0, _errors.ErrorRequireArgument)('source');
  }

  if (typeof localesFolder !== 'string' || !(localesFolder.length > 0)) {
    throw (0, _errors.ErrorRequireArgument)('localesFolder');
  }

  return command;
};

exports.validateArguments = validateArguments;
},{"~/errors":"errors.js"}],"commands/decentralize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("~/helpers");

var _default = (0, _helpers.validateArguments)(({
  source,
  localesFolder,
  output
}) => {});

exports.default = _default;
},{"~/helpers":"helpers.js"}],"commands/prune.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => {};

exports.default = _default;
},{}],"commands/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _decentralize = _interopRequireDefault(require("./decentralize"));

var _prune = _interopRequireDefault(require("./prune"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  decentralize: _decentralize.default,
  prune: _prune.default
};
exports.default = _default;
},{"./decentralize":"commands/decentralize.js","./prune":"commands/prune.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _options = _interopRequireDefault(require("~/cli/options"));

var _usage = _interopRequireDefault(require("~/cli/usage"));

var _constants = require("./constants");

var _commands = _interopRequireDefault(require("./commands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = (0, _commandLineArgs.default)(_options.default);

switch (options.command) {
  case _constants.DECENTRALIZE:
  case _constants.PRUNE:
    _commands.default[options.command](options);

    break;

  default:
    console.log(_usage.default);
    break;
}
},{"~/cli/options":"cli/options.js","~/cli/usage":"cli/usage.js","./constants":"constants.js","./commands":"commands/index.js"}]},{},["main.js"], null)
//# sourceMappingURL=/main.map