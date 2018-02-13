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
        function createTr(body, data, next) {
            var tr = { 'w:tr': [] };
            var counterRow = _.uniqBy(data, 'x');
            var row = counterRow.length;
            for (var i = 0; i < row; i++) {
                body['w:tbl'].push(tr);
            }
            next(body);
        }
        function createTc(body, data, next) {
            var tc = { 'w:tc': [] };
            var counterCol = _.uniqBy(data, 'y');
            var counterRow = _.uniqBy(data, 'x');
            var row = counterRow.length;
            var col = counterCol.length;
            var tr = body['w:tbl'][1]['w:tr'];
            var p = { 'w:p': [] };
            for (var j = 1; j <= col; j++) {
                body['w:tbl'][1]['w:tr'].push(tc);
            }
            next(body);
        }
        var data = [
            { x: 0, y: 0, value: 'Milad', mergeRow: '' },
            { x: 0, y: 1, value: '', mergeRow: 1 },
            { x: 0, y: 2, value: '', mergeRow: '' },
            { x: 1, y: 0, value: '', mergeRow: '' },
            { x: 1, y: 1, value: '', mergeRow: '' },
            { x: 1, y: 2, value: 'Ali', mergeRow: '' }
        ];
        var objCreateTr = createTr(body, data, function (body) {
            console.log(JSON.stringify(body));
            done();
        });
    });
});
//# sourceMappingURL=mergeTableDocx.js.map