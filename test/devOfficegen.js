"use strict";
exports.__esModule = true;
var xmlbuild = require("xmlbuilder");
describe('devOfficegen', function () {
    it('orginal table', function (done) {
        var xml = xmlbuild.create('w:document', { encoding: 'utf-8', standalone: 'yes' })
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
            .up()
            .end({
            indent: '  ',
            newline: '\n',
            allowEmpty: false,
            spacebeforeslash: ''
        });
    });
});
//# sourceMappingURL=devOfficegen.js.map