import {} from 'mocha';
import {fail} from 'assert';
import {readdir,readFile,createWriteStream,writeFile} from 'fs';
import * as Archive from 'archiver';
import * as xmlbuild from 'xmlbuilder'

describe('devOfficegen', function(){

    // it('orginal table', function(done:any){
    //
    //     let xml = xmlbuild.create('w:document', { encoding: 'utf-8', standalone:'yes' })
    //         .att('xmlns:wpc','http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas')
    //         .att('xmlns:cx','http://schemas.microsoft.com/office/drawing/2014/chartex')
    //         .att('xmlns:mc','http://schemas.openxmlformats.org/markup-compatibility/2006')
    //         .att('xmlns:o','urn:schemas-microsoft-com:office:office')
    //         .att('xmlns:r','http://schemas.openxmlformats.org/officeDocument/2006/relationships')
    //         .att('xmlns:m','http://schemas.openxmlformats.org/officeDocument/2006/math')
    //         .att('xmlns:v','urn:schemas-microsoft-com:vml')
    //         .att('xmlns:wp14','http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing')
    //         .att('xmlns:wp','http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing')
    //         .att('xmlns:w10','urn:schemas-microsoft-com:office:word')
    //         .att('xmlns:w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')
    //         .att('xmlns:w14','http://schemas.microsoft.com/office/word/2010/wordml')
    //         .att('xmlns:w15','http://schemas.microsoft.com/office/word/2012/wordml')
    //         .att('xmlns:w16se','http://schemas.microsoft.com/office/word/2015/wordml/symex')
    //         .att('xmlns:wpg','http://schemas.microsoft.com/office/word/2010/wordprocessingGroup')
    //         .att('xmlns:wpi','http://schemas.microsoft.com/office/word/2010/wordprocessingInk')
    //         .att('xmlns:wne','http://schemas.microsoft.com/office/word/2006/wordml')
    //         .att('xmlns:wps','http://schemas.microsoft.com/office/word/2010/wordprocessingShape')
    //         .att('mc:Ignorable','w14 w15 w16se wp14')
    //
    //         .ele('w:body')
    //             .ele('w:tbl')
    //                 .ele('w:tblPr')
    //                     .ele('w:tblStyle',{ 'w:val':'TableGrid'}).up()
    //                     .ele('w:tblW', {'w:w':'0','w:type':'auto'}).up()
    //                     .ele('w:tblLook', {'w:val':'04A0','w:firstRow':'1','w:lastRow':'0','w:firstColumn':'1','w:lastColumn':'0','w:noHBand':'0','w:noVBand':'1'}).up()
    //              .up()
    //             .ele('w:tblGrid')
    //                 .ele('w:gridCol', {'w:w':'4675'}).up()
    //                 .ele('w:gridCol',{'w:w':'4675'}).up()
    //              .up()
    //              .ele('w:tr')
    //                     .ele('w:tc')
    //                         .ele('w:tcPr')
    //                             .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
    //                         .up()
    //                         .ele('w:p')
    //                             .ele('w:r')
    //                                 .ele('w:t','milad').up()
    //                          .up()
    //                         .up()
    //                     .up()
    //                     .ele('w:tc')
    //                          .ele('w:tcPr')
    //                              .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
    //                          .up()
    //                          .ele('w:p')
    //                              .ele('w:r')
    //                                  .ele('w:t','reza').up()
    //                          .up()
    //         .end({
    //             indent: '  ',
    //             newline: '\n',
    //             allowEmpty: false,
    //             spacebeforeslash: ''
    //         });
    //
    //      let pathWrite:string  = 'xmlToString/newj.txt';
    //      let dirPath:string  ='xmlToString/';
    //     //
    //
    //
    //     function addResurce(dirPath: any, next: any) {
    //         readdir(dirPath, function (err: any, files: any) {
    //             if (err) {
    //                 fail(err);
    //             } else {
    //                 let counter = 0;
    //                 files.forEach(function (filename: any) {
    //                     let path = dirPath + filename;
    //                     readFile(path, 'utf8', function (err: any, result: any) {
    //                         if (err) {
    //                             fail(err);
    //                         } else {
    //                             let splited = result.toString().split('|');
    //                             counter++;
    //                             next(counter, splited);
    //                         }//else
    //
    //                     });//readFile
    //                 });//forEach
    //             }
    //         });// readDir
    //     }// function addResurce
    //
    //
    //     let filePath = "outTest/xmlToString.docx";
    //     const archive = Archive.create('zip');
    //     let out = createWriteStream(filePath);
    //     archive.pipe(out);
    //     let i = 1;
    //
    //
    //
    //     ////****** Call addResource Function***////
    //     addResurce(dirPath, function(counter:any,result:any){
    //         if(i==counter) {
    //                 archive.append(result[0], {name: result[1]});
    //                 i++;
    //                 if (i == 13) {
    //                     archive.finalize();
    //                     done();
    //                 }// if
    //             }
    //         //
    //
    //     });// addResurce
    //
    //
    // });// it

    it('create table merge column', function(done:any){

        let xmlBody =xmlbuild.create('w:document', { encoding: 'utf-8', standalone:'yes' })
                .att('xmlns:wpc','http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas')
                .att('xmlns:cx','http://schemas.microsoft.com/office/drawing/2014/chartex')
                .att('xmlns:mc','http://schemas.openxmlformats.org/markup-compatibility/2006')
                .att('xmlns:o','urn:schemas-microsoft-com:office:office')
                .att('xmlns:r','http://schemas.openxmlformats.org/officeDocument/2006/relationships')
                .att('xmlns:m','http://schemas.openxmlformats.org/officeDocument/2006/math')
                .att('xmlns:v','urn:schemas-microsoft-com:vml')
                .att('xmlns:wp14','http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing')
                .att('xmlns:wp','http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing')
                .att('xmlns:w10','urn:schemas-microsoft-com:office:word')
                .att('xmlns:w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')
                .att('xmlns:w14','http://schemas.microsoft.com/office/word/2010/wordml')
                .att('xmlns:w15','http://schemas.microsoft.com/office/word/2012/wordml')
                .att('xmlns:w16se','http://schemas.microsoft.com/office/word/2015/wordml/symex')
                .att('xmlns:wpg','http://schemas.microsoft.com/office/word/2010/wordprocessingGroup')
                .att('xmlns:wpi','http://schemas.microsoft.com/office/word/2010/wordprocessingInk')
                .att('xmlns:wne','http://schemas.microsoft.com/office/word/2006/wordml')
                .att('xmlns:wps','http://schemas.microsoft.com/office/word/2010/wordprocessingShape')
                .att('mc:Ignorable','w14 w15 w16se wp14')

             .ele('w:body')
                    .ele('w:tbl')
                        .ele('w:tblPr')
                            .ele('w:tblStyle',{ 'w:val':'TableGrid'}).up()
                            .ele('w:tblW', {'w:w':'0','w:type':'auto'}).up()
                            .ele('w:tblLook', {'w:val':'04A0','w:firstRow':'1','w:lastRow':'0','w:firstColumn':'1','w:lastColumn':'0','w:noHBand':'0','w:noVBand':'1'}).up()
                        .up()
                    .ele('w:tblGrid')
                        .ele('w:gridCol', {'w:w':'4675'}).up()
                        .ele('w:gridCol',{'w:w':'4675'}).up()
                    .up()
                     .ele('w:tr')
                            .ele('w:tc')
                                .ele('w:tcPr')
                                    .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
                                    .ele('w:vMerge',{'w:val':'restart'}).up()
                                .up()
                                .ele('w:p')
                                    .ele('w:r')
                                        .ele('w:t','milad').up()
                                 .up()
                                .up()
                            .up()
                            .ele('w:tc')
                                 .ele('w:tcPr')
                                     .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
                                 .up()
                                 .ele('w:p')
                                     .ele('w:r')
                                         .ele('w:t','reza').up()
                                    .up()
                                  .up()
                            .up()
                    .up()

                    .ele('w:tr')
                        .ele('w:tc')
                            .ele('w:tcPr')
                                .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
                                .ele('w:vMerge').up()
                            .up()//tcPr
                             .ele('w:p')
                                  .ele('w:r')
                                       .ele('w:t','milad').up()
                                   .up()// r
                              .up()//p
                        .up()//tc
                         .ele('w:tc')
                            .ele('w:tcPr')
                                .ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
                            .up()//w:tcPr
                            .ele('w:p')
                                .ele('w:r')
                                    .ele('w:t','reza').up()
                                .up()//r
                            .up()//p
                    .up()//tr
            .up()//body



            .end({
                indent: '  ',
                newline: '\n',
                allowEmpty: false,
                spacebeforeslash: ''
            });// end


       // let pathWrite:string  = 'xmlToString/newj.txt';

        // writeFile(pathWrite, xmlBody , function(err:any){
        //     if(err){
        //         fail("Don't Write xml in file");
        //     }else{
        //         console.log(xmlBody);
        //         done();
        //     }
        //
        // });

            function addResurce(dirPath: any, next: any) {
                readdir(dirPath, function (err: any, files: any) {
                    if (err) {
                        fail(err);
                    } else {
                        let counter = 0;
                        files.forEach(function (filename: any) {
                            let path = dirPath + filename;
                            readFile(path, 'utf8', function (err: any, result: any) {
                                if (err) {
                                    fail(err);
                                } else {
                                    let splited = result.toString().split('|');
                                    counter++;
                                    next(counter, splited);
                                }//else

                            });//readFile
                        });//forEach
                    }
                });// readDir
            }// function addResurce


            let filePath = "outTest/xmlToString.docx";
            let dirPath:string  ='xmlToString/';
            const archive = Archive.create('zip');
            let out = createWriteStream(filePath);
            archive.pipe(out);
            let i = 1;

            ////****** Call addResource Function***////
            addResurce(dirPath, function(counter:any,result:any){
                if(i==counter) {
                        archive.append(result[0], {name: result[1]});
                        i++;
                        if (i == 13) {
                            archive.finalize();
                            done();
                        }// if
                    }
                //

            });// addResurce


    });// end of it


});
