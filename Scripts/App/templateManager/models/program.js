System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Program;
    return {
        setters: [],
        execute: function () {
            Program = (function () {
                function Program(id, name, code, statuses) {
                    this.id = id;
                    this.name = name;
                    this.code = code;
                    this.statuses = statuses;
                }
                return Program;
            }());
            exports_1("Program", Program);
        }
    };
});
//# sourceMappingURL=program.js.map