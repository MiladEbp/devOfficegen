"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var fs_1 = require("fs");
var Archive = require("archiver");
describe('devOfficegen', function () {
    it('Create object resource', function (done) {
        var dirPath = 'xmlToString/';
        function addResurce(dirPath, next) {
            fs_1.readdir(dirPath, function (err, files) {
                if (err) {
                    assert_1.fail(err);
                }
                else {
                    var counter_1 = 0;
                    files.forEach(function (filename) {
                        var path = dirPath + filename;
                        fs_1.readFile(path, 'utf8', function (err, result) {
                            if (err) {
                                assert_1.fail(err);
                            }
                            else {
                                var splited = result.toString().split('|');
                                counter_1++;
                                next(counter_1, splited);
                            }
                        });
                    });
                }
            });
        }
        var filePath = "outTest/xmlToString.docx";
        var archive = Archive.create('zip');
        var out = fs_1.createWriteStream(filePath);
        archive.pipe(out);
        var i = 1;
        addResurce(dirPath, function (counter, result) {
            if (i == counter) {
                archive.append(result[0], { name: result[1] });
                i++;
                if (i == 13) {
                    archive.finalize();
                    done();
                }
            }
        });
    });
});
//# sourceMappingURL=devOfficegen.js.map