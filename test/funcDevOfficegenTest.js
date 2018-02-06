"use strict";
exports.__esModule = true;
var xmlbuild = require("xmlbuilder");
var _ = require('lodash');
var createTableProperty = (function () {
    function createTableProperty(col, row, data, next) {
        this.createRow(col, row, data, function (result) {
            next(result.end({ indent: ' ', newline: '\n', allowEmpty: false, spacebeforeslash: '' }));
        });
    }
    createTableProperty.prototype.createRow = function (col, row, data, next) {
        var i = 0;
        var xmlBody = xmlbuild.create('w:tbl');
        var tblPr = xmlBody.ele('w:tblPr');
        tblPr.ele('w:tblStyle', { 'w:val': "TableGrid" }).up();
        tblPr.up();
        for (i; i < row; i++) {
            var xmlTr = xmlBody.ele('w:tr');
            this.createCol(col, data, i, xmlTr);
            xmlTr.up();
        }
        next(xmlBody);
    };
    createTableProperty.prototype.createCol = function (col, data, i, xmlTr) {
        var j = 0;
        for (j; j < col; j++) {
            this.createP(xmlTr, i, j, data);
        }
    };
    createTableProperty.prototype.createP = function (xmlTr, i, j, data) {
        var xmlTc = xmlTr.ele('w:tc');
        var xmltcPr = xmlTc.ele('w:tcPr');
        xmltcPr.ele('w:tcW', { 'w:w': '4675', 'w:type': 'dxa' }).up();
        xmltcPr.up();
        var xmlP = xmlTc.ele('w:p');
        var findValue = _.find(data, { x: i, y: j });
        var check = findValue.value;
        if (check == '') {
            xmlP.up();
        }
        else {
            var xmlR = xmlP.ele('w:r');
            var xmlT = xmlR.ele({ 'w:t': check }).up();
            xmlR.up();
            xmlP.up();
        }
        xmlTc.up();
    };
    return createTableProperty;
}());
exports.createTableProperty = createTableProperty;
//# sourceMappingURL=funcDevOfficegenTest.js.map