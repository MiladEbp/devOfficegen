import {} from 'mocha';
import {fail} from 'assert';
import {readdir,readFile,createWriteStream} from 'fs';
import * as Archive from 'archiver';

describe('devOfficegen', function(){

    it('Create object resource',  function(done){

        let dirPath:string  ='xmlToString/';

    function addResurce(dirPath:any, next:any) {

        readdir(dirPath, function (err: any, files: any) {
            if (err) {
                fail(err);
            } else {
                let counter =0;
                files.forEach(function (filename: any) {
                    let path = dirPath + filename;
                    readFile(path, 'utf8', function (err: any, result: any) {
                        if (err) {
                            fail(err);
                        } else {
                            let splited = result.toString().split('|');
                            counter++;
                            next(counter,splited);
                        }//else

                    });//readFile
                });//forEach

            }// else

        });// readDir
    }// function addResurce


        let filePath = "outTest/xmlToString.docx";
        const archive = Archive.create('zip');
        let out = createWriteStream(filePath);
        archive.pipe(out);

            let i = 1;
        ////****** Call addResource Function***////
            addResurce(dirPath, function(counter:any,result:any){

                if(i==counter) {
                    archive.append(result[0], {name: result[1]});
                    i++;
                    if(i==13){
                        archive.finalize();
                        done();
                    }
                }
            });// addResurce
    });// End of Create object resource

});
