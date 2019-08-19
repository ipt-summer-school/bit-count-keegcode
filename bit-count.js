var Diagram = /** @class */ (function () {
    function Diagram(actions) {
        var _this = this;
        this.char = '';
        this.fillChar = function () {
            var actions = JSON.parse(JSON.stringify(_this.actions));
            Object.keys(actions).map(function (key) {
                for (var i = 1; i <= actions[key]; ++i) {
                    _this.char += '|';
                }
                _this.char += actions[key] < 1 ? "" : " " + key + " " + actions[key] + " " + (actions[key] === 1 ? 'hour' : 'hours') + "\n";
            });
        };
        this.draw = function () {
            _this.fillChar();
            console.log(_this.char);
        };
        this.actions = actions;
    }
    return Diagram;
}());
new Diagram({
    "Sleep": 8.30,
    "Getting up from the bed": 0.15,
    "Shower": 1,
    "Meal": 0.20,
    "Travel to KPI": 2,
    "Study": 7,
    "Ride home": 2
}).draw();
