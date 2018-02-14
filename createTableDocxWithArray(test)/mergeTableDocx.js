"use strict";
exports.__esModule = true;
var json2xml = require('json2xml');
var _ = require('lodash');
describe('Merge Table', function () {
    it('test Send Data', function (done) {
        var body = {
            'w:tbl': [{
                    'w:tblPr': [
                        { 'w:tblStyle': '', attr: { 'w:val': "TableGrid" } }
                    ]
                }]
        };
        function createTr(_body, data) {
            var counterRow = _.uniqBy(data, 'x');
            var row = counterRow.length;
            for (var i = 0; i < row; i++) {
                _body['w:tbl'].push({ 'w:tr': [] });
            }
            return _body;
        }
        function createTc(_body, data) {
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
        }
        function createP(_body, data) {
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
        }
        function createMerge(_body, data) {
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
                    if (rowX != '' && colY != '') {
                        var findX = checkMerge.x;
                        var findY = checkMerge.y;
                        _body['w:tbl'][findX]['w:tr'][findY]['w:tc'][0]['w:tcPr'].push({ 'w:vMerge': '', attr: { 'w:val': 'restart' } });
                        var a = _body;
                    }
                    else {
                        var tcRemoveFind = _.find(data, { x: 1, y: colY });
                        if (tcRemoveFind = true) {
                            _.remove();
                        }
                    }
                    var mergeCol = _.find(data, { x: 1, y: colY });
                    var mergeRow = _.find(data, { x: rowX, y: 0 });
                    var removeNewTc = _.find(data, { x: rowX, y: 1 });
                }
            }
            return _body['w:tbl'][1]['w:tr'][0]['w:tc'][0]['w:tcPr'];
        }
        var data = [
            { x: 1, y: 0, value: 'Milad', mergeRow: '2', mergeCol: '1' },
            { x: 1, y: 1, value: '', mergeRow: '', mergeCol: '' },
            { x: 1, y: 2, value: '', mergeRow: '', mergeCol: '' },
            { x: 2, y: 0, value: '', mergeRow: ' ', mergeCol: '' },
            { x: 2, y: 1, value: '', mergeRow: '', mergeCol: '' },
            { x: 2, y: 2, value: 'Ali', mergeRow: '', mergeCol: '' }
        ];
        var objCreateTr = createTr(body, data);
        var objCreateTc = createTc(objCreateTr, data);
        var objCreateP = createP(objCreateTc, data);
        var objCreateMerge = createMerge(objCreateP, data);
        console.log(JSON.stringify(objCreateMerge));
        done();
    });
});
//# sourceMappingURL=mergeTableDocx.js.map