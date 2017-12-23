"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var fs_1 = require("fs");
var Archive = require("archiver");
var xmlbuild = require("xmlbuilder");
describe('devOfficegen', function () {
    it('create table merge column', function (done) {
        var xmlBody = xmlbuild.create('w:document', { encoding: 'utf-8', standalone: 'yes' })
            .att('xmlns:wpc', 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas')
            .att('xmlns:cx', 'http://schemas.microsoft.com/office/drawing/2014/chartex')
            .att('xmlns:mc', 'http://schemas.openxmlformats.org/markup-compatibility/2006')
            .att('xmlns:o', 'urn:schemas-microsoft-com:office:office')
            .att('xmlns:r', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
            .att('xmlns:m', 'http://schemas.openxmlformats.org/officeDocument/2006/math')
            .att('xmlns:v', 'urn:schemas-microsoft-com:vml')
            .att('xmlns:wp14', 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing')
            .att('xmlns:wp', 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing')
            .att('xmlns:w10', 'urn:schemas-microsoft-com:office:word')
            .att('xmlns:w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
            .att('xmlns:w14', 'http://schemas.microsoft.com/office/word/2010/wordml')
            .att('xmlns:w15', 'http://schemas.microsoft.com/office/word/2012/wordml')
            .att('xmlns:w16se', 'http://schemas.microsoft.com/office/word/2015/wordml/symex')
            .att('xmlns:wpg', 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup')
            .att('xmlns:wpi', 'http://schemas.microsoft.com/office/word/2010/wordprocessingInk')
            .att('xmlns:wne', 'http://schemas.microsoft.com/office/word/2006/wordml')
            .att('xmlns:wps', 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape')
            .att('mc:Ignorable', 'w14 w15 w16se wp14')
            .ele('w:body')
            .ele('w:tbl')
            .ele('w:tblPr')
            .ele('w:tblStyle', { 'w:val': 'TableGrid' }).up()
            .ele('w:tblW', { 'w:w': '0', 'w:type': 'auto' }).up()
            .ele('w:tblLook', { 'w:val': '04A0', 'w:firstRow': '1', 'w:lastRow': '0', 'w:firstColumn': '1', 'w:lastColumn': '0', 'w:noHBand': '0', 'w:noVBand': '1' }).up()
            .up()
            .ele('w:tblGrid')
            .ele('w:gridCol', { 'w:w': '4675' }).up()
            .ele('w:gridCol', { 'w:w': '4675' }).up()
            .up()
            .ele('w:tr')
            .ele('w:tc')
            .ele('w:tcPr')
            .ele('w:tcW', { 'w:w': '4675', 'w:type': 'dxa' }).up()
            .ele('w:vMerge', { 'w:val': 'restart' }).up()
            .up()
            .ele('w:p')
            .ele('w:r')
            .ele('w:t', 'milad').up()
            .up()
            .up()
            .up()
            .ele('w:tc')
            .ele('w:tcPr')
            .ele('w:tcW', { 'w:w': '4675', 'w:type': 'dxa' }).up()
            .up()
            .ele('w:p')
            .ele('w:r')
            .ele('w:t', 'reza').up()
            .up()
            .up()
            .up()
            .up()
            .ele('w:tr')
            .ele('w:tc')
            .ele('w:tcPr')
            .ele('w:tcW', { 'w:w': '4675', 'w:type': 'dxa' }).up()
            .ele('w:vMerge').up()
            .up()
            .ele('w:p')
            .ele('w:r')
            .ele('w:t', 'milad').up()
            .up()
            .up()
            .up()
            .ele('w:tc')
            .ele('w:tcPr')
            .ele('w:tcW', { 'w:w': '4675', 'w:type': 'dxa' }).up()
            .up()
            .ele('w:p')
            .ele('w:r')
            .ele('w:t', 'reza').up()
            .up()
            .up()
            .up()
            .up()
            .end({
            indent: '  ',
            newline: '\n',
            allowEmpty: false,
            spacebeforeslash: ''
        });
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
        var dirPath = 'xmlToString/';
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