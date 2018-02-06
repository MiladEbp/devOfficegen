import {readFile, readdir} from 'fs';
import {} from 'mocha';
import {fail} from "assert";
import {} from 'assert';
import {createTable, createTableProperty} from './funcDevOfficegenTest';
let _ = require('lodash');

describe('add Data',  function(){
    it('readFile', function(done){

class privateData {

    readDir(dirPath: any, next:any) {
        readdir(dirPath, function (err: any, filename: any) {
            if (err) {
                fail('undefind directory ')
            } else {
                let numOfFiles = filename.length;
                let counter = 0;

                for (counter; counter < numOfFiles;counter++) {
                    let path = dirPath + filename[counter];
                    readFile(path, 'utf8', function (err: any, result: any) {
                        if (err) {
                            fail("DOn't Read file");
                        } else {
                            if (path == dirPath + "newj.txt") {
                                objClass.addData(result,function (xmlBody:any) {
                                    next(xmlBody,counter)
                                })

                            } else {
                                next(result,counter)
                            }//else

                        }//else
                    });//readFile
                }// forLoop
                done()
            }
        });// readdir

    }; // function readDir




    addData(result:any,next:any) {
        let data = [
            {x: 0, y: 0, value: 'Milad'},
            {x: 0, y: 1, value: 'Ali'},
            {x: 0, y: 2, value: ''},
            {x: 1, y: 0, value: ''},
            {x: 1, y: 1, value: ''},
            {x: 1, y: 2, value: ''}
        ];// data

        let countCol = _.uniqBy(data, 'y');
        let countRow = _.uniqBy(data, 'x')
        let col = countCol.length;
        let row = countRow.length;

        //console.log(content)
       new createTableProperty(col, row, data, function (xml: any) {

           let xmlSplit = xml.split('?>') ; // delete <?xml version="1.0"?> in xmlTable format
           let formatXmlTable = xmlSplit[1];
           let splitRessource = result.split('{');
           let dataFileNew = splitRessource[0]+formatXmlTable+splitRessource[1];


           next( dataFileNew)

        });

    }// END Function of addData





    // createList(arrData:any,dataFile:any, nameFile:any, next:any){
    //
    //     let dataList = {name:nameFile, data:dataFile}
    //     privatData.push(dataList)
    //     next(privatData)
    //
    // }// End Function createList



}// end of class privateData






    /* call readFile Function */
    let dirPath = "xmlToString/";
    let objClass = new privateData();
        let privatData:any= [];

        objClass.readDir(dirPath, function(data:any, counter:any){
            let splitData = data.split("|");
            let nameFile  = splitData[1];
            let dataFile =splitData[0];
            let dataStructure = {name:nameFile, data:dataFile};
            privatData.push(dataStructure);
            let size  = privatData.length;
            console.log(privatData)




        })


    });// ENd OF IT
});
