/*globals define */
define(['./item'], function (Item) {
    'use strict';
    var Section;
    Section = (function () {
        function Section(title) {
            this._title = title;
            this._items = [];
        }

        Section.prototype.add = function (item) {
            if (!(item instanceof Item)) {
                throw new Error("Section can add only items!");
            }
            this._items.push(item);
        };

        Section.prototype.getData = function () {
            var items = this._items.map(function (item) {
                return item.getData();
            });
            return{
                title: this._title,
                items: items
            };
        };
        return Section;
    }());
    return Section;
});