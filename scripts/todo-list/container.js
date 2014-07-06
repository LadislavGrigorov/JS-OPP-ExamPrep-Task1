/*globals define */
define(['./section'], function (Section) {
    'use strict';
    var Container;
    Container = (function () {
        function Container() {
            this._sections = [];
        }

        Container.prototype.add = function (section) {
            if (!(section instanceof Section)) {
                throw new Error("Container can add only sections!");
            }

            this._sections.push(section);
        };

        Container.prototype.getData = function () {
            return this._sections.map(function (section) {
                return section.getData();
            });
        };
        return Container;
    }());
    return Container;
});