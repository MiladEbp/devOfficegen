"use strict";
exports.__esModule = true;
var json2xml = require('json2xml');
var _ = require('lodash');
describe('Merge Table', function () {
    it('test Send Data', function (done) {
        var body = {
            "w:tbl": [
                {
                    "w:tblPr": [
                        {
                            "w:tblStyle": "",
                            "attr": {
                                "w:val": "TableGrid"
                            }
                        }
                    ]
                },
                {
                    "w:tr": []
                },
                {
                    "w:tr": []
                }
            ]
        };
        var tc = { 'w:tc': [] };
        for (var x = 1; x < 3; x++) {
            for (var i = 0; i < 3; i++) {
                body['w:tbl'][x]['w:tr'].push(tc);
            }
        }
        console.log(JSON.stringify(body));
        done();
    });
});
//# sourceMappingURL=testAll.js.map