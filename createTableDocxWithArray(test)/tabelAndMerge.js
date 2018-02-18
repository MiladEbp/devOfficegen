"use strict";
exports.__esModule = true;
var json2xml = require('json2xml');
var _ = require('lodash');
var table = (function () {
    function table() {
    }
    table.prototype.createTr = function (_body, data) {
        var counterRow = _.uniqBy(data, 'x');
        var row = counterRow.length;
        for (var i = 0; i < row; i++) {
            _body['w:tbl'].push({ 'w:tr': [] });
        }
        return _body;
    };
    table.prototype.createTc = function (_body, data) {
        var counterCol = _.uniqBy(data, 'y');
        var counterRow = _.uniqBy(data, 'x');
        var row = counterRow.length;
        var col = counterCol.length;
        for (var i = 1; i <= row; i++) {
            for (var j = 0; j < col; j++) {
                _body['w:tbl'][i]['w:tr'].push({ 'w:tc': [{ 'w:tcPr': [{ 'w:tcW': '', attr: { 'w:w': 4657, 'w:type': 'dxa' } }] },] });
            }
        }
        return _body;
    };
    table.prototype.createP = function (_body, data) {
        var counterCol = _.uniqBy(data, 'y');
        var counterRow = _.uniqBy(data, 'x');
        var row = counterRow.length;
        var col = counterCol.length;
        for (var i = 1; i <= row; i++) {
            for (var j = 0; j < col; j++) {
                var checkValue = _.find(data, { x: i, y: j });
                var value = checkValue.value;
                if (value == '') {
                    _body['w:tbl'][i]['w:tr'][j]['w:tc'].push({ 'w:p': [] });
                }
                else {
                    _body['w:tbl'][i]['w:tr'][j]['w:tc'].push({ 'w:p': [{ 'w:r': [{ 'w:t': value }] }] });
                }
            }
        }
        return _body;
    };
    table.prototype.createMerge = function (_body, data) {
        var counterCol = _.uniqBy(data, 'y');
        var counterRow = _.uniqBy(data, 'x');
        var row = counterRow.length;
        var col = counterCol.length;
        var start = [];
        for (var i = 1; i <= row; i++) {
            for (var j = 0; j < col; j++) {
                var checkMerge = _.find(data, { x: i, y: j });
                var rowX = checkMerge.mergeRow;
                var colY = checkMerge.mergeCol;
                if (colY != '' && rowX != '') {
                    var myX = checkMerge.x;
                    var myY = checkMerge.y;
                    var counterY = colY;
                    var counterX = rowX;
                    _body['w:tbl'][myX]['w:tr'][myY]['w:tc'][0]['w:tcPr'].push({ 'w:vMerge': '', attr: { 'w:val': 'restart' } });
                    var b = _body;
                    for (var i_1 = 1; i_1 < counterY; i_1++) {
                        myY = myY + 1;
                        delete _body['w:tbl'][myX]['w:tr'][myY];
                    }
                    var c = _body;
                    for (var i_2 = 1; i_2 < counterX; i_2++) {
                        myY = 0;
                        myY = checkMerge.y;
                        myX = myX + 1;
                        _body['w:tbl'][myX]['w:tr'][myY]['w:tc'][0]['w:tcPr'].push({ 'w:vMerge': [] });
                    }
                    var z = _body;
                    for (var i_3 = 1; i_3 < counterY; i_3++) {
                        myY = myY + 1;
                        delete _body['w:tbl'][myX]['w:tr'][myY];
                    }
                    var a = _body;
                }
                else if (colY != '' && rowX == '') {
                    var myX = checkMerge.x;
                    var myY = checkMerge.y;
                    var counterY = colY;
                    _body['w:tbl'][myX]['w:tr'][myY]['w:tc'][0]['w:tcPr'].push({ 'w:gridSpan': '', attr: { 'w:val': '2' } });
                    var b = _body;
                    for (var i_4 = 1; i_4 < counterY; i_4++) {
                        myY = myY + 1;
                        delete _body['w:tbl'][myX]['w:tr'][myY];
                    }
                    var c = _body;
                }
                else if (colY == '' && rowX != '') {
                    var myY = checkMerge.y;
                    var myX = checkMerge.x;
                    var counterX = rowX;
                    _body['w:tbl'][myX]['w:tr'][myY]['w:tc'][0]['w:tcPr'].push({ 'w:vMerge': '', attr: { 'w:val': 'restart' } });
                    var b = _body;
                    for (var i_5 = 1; i_5 < counterX; i_5++) {
                        myX = myX + 1;
                        _body['w:tbl'][myX]['w:tr'][myY]['w:tc'][0]['w:tcPr'].push({ 'w:vMerge': [] });
                    }
                    var c = _body;
                }
            }
        }
        return _body;
    };
    table.prototype.callingMethod = function (body, data, next) {
        var objTr = this.createTr(body, data);
        var objTc = this.createTc(objTr, data);
        var objP = this.createP(objTc, data);
        var objMerge = this.createMerge(objP, data);
        next(json2xml(objMerge, { attributes_key: 'attr' }));
    };
    return table;
}());
exports.table = table;
//# sourceMappingURL=tabelAndMerge.js.map