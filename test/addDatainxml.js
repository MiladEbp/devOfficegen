"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var assert_1 = require("assert");
var funcDevOfficegenTest_1 = require("./funcDevOfficegenTest");
var _ = require('lodash');
describe('add Data', function () {
    it('readFile', function (done) {
        var privateData = (function () {
            function privateData() {
            }
            privateData.prototype.readDir = function (dirPath, next) {
                fs_1.readdir(dirPath, function (err, filename) {
                    if (err) {
                        assert_1.fail('undefind directory ');
                    }
                    else {
                        var numOfFiles = filename.length;
                        var counter_1 = 0;
                        var _loop_1 = function () {
                            var path = dirPath + filename[counter_1];
                            fs_1.readFile(path, 'utf8', function (err, result) {
                                if (err) {
                                    assert_1.fail("DOn't Read file");
                                }
                                else {
                                    if (path == dirPath + "newj.txt") {
                                        objClass.addData(result, function (xmlBody) {
                                            next(xmlBody, counter_1);
                                        });
                                    }
                                    else {
                                        next(result, counter_1);
                                    }
                                }
                            });
                        };
                        for (counter_1; counter_1 < numOfFiles; counter_1++) {
                            _loop_1();
                        }
                        done();
                    }
                });
            };
            ;
            privateData.prototype.addData = function (result, next) {
                var data = [
                    { x: 0, y: 0, value: 'Milad' },
                    { x: 0, y: 1, value: 'Ali' },
                    { x: 0, y: 2, value: '' },
                    { x: 1, y: 0, value: '' },
                    { x: 1, y: 1, value: '' },
                    { x: 1, y: 2, value: '' }
                ];
                var countCol = _.uniqBy(data, 'y');
                var countRow = _.uniqBy(data, 'x');
                var col = countCol.length;
                var row = countRow.length;
                new funcDevOfficegenTest_1.createTableProperty(col, row, data, function (xml) {
                    var xmlSplit = xml.split('?>');
                    var formatXmlTable = xmlSplit[1];
                    var splitRessource = result.split('{');
                    var dataFileNew = splitRessource[0] + formatXmlTable + splitRessource[1];
                    next(dataFileNew);
                });
            };
            return privateData;
        }());
        var dirPath = "xmlToString/";
        var objClass = new privateData();
        var privatData = [];
        objClass.readDir(dirPath, function (data, counter) {
            var splitData = data.split("|");
            var nameFile = splitData[1];
            var dataFile = splitData[0];
            var dataStructure = { name: nameFile, data: dataFile };
            privatData.push(dataStructure);
            var size = privatData.length;
            console.log(privatData);
        });
    });
});
//# sourceMappingURL=addDatainxml.js.map