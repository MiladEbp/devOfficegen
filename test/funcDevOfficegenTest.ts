/*import {} from 'mocha';
import {fail} from 'assert';
import {readdir,readFile,createWriteStream,writeFile} from 'fs';
import * as Archive from 'archiver';
import * as xmlbuild from 'xmlbuilder';



describe("funcDevOfficegenTest", function(){

    it('Create FucLoop for Orginal Table', function(done:any){*/


import * as xmlbuild from 'xmlbuilder';
let _ = require('lodash');

     export  class createTableProperty {

            constructor(col:any ,row:any,data:any ,next:any){
                this.createRow(col, row, data, function(result:any){
                   next(result.end({ indent: ' ', newline: '\n',allowEmpty: false, spacebeforeslash:''}))

                });

            }// End of constructor


       
             createRow(col:any, row:any,data:any ,next:any){
                let i = 0;
                let xmlBody = xmlbuild.create('w:tbl');
                let tblPr = xmlBody.ele('w:tblPr')
                     tblPr.ele('w:tblStyle',{'w:val':"TableGrid"}).up()
                tblPr.up()

                for(i; i<row; i++){
                  let xmlTr = xmlBody.ele('w:tr')
                        this.createCol(col,data,i,xmlTr)
                   xmlTr.up()
                 }
                 next(xmlBody);

            }// function for create column in table


            createCol(col:any,data:any,i:any,xmlTr:any){
                 let j=0;
                 for(j; j<col; j++){
                     this.createP(xmlTr,i,j,data)
                 }

            }// function for create Row in table



            createP(xmlTr:any,i:any,j:any,data:any){
                //let i = 0;
                    let xmlTc = xmlTr.ele('w:tc')
                        let xmltcPr = xmlTc.ele('w:tcPr')
                            xmltcPr.ele('w:tcW',{'w:w':'4675', 'w:type':'dxa'}).up()
                        xmltcPr.up()
                        let xmlP = xmlTc.ele('w:p')
                        let findValue = _.find(data, {x:i,y:j});
                            let check = findValue.value
                            if(check == ''){
                                xmlP.up()
                            }else {
                                let xmlR = xmlP.ele('w:r')
                                    let xmlT = xmlR.ele({'w:t':check}).up();
                                xmlR.up()
                                xmlP.up()
                            }
                          // let xmlR = xmlP.ele('w:r')
                            // for(i; i<data.length; i++ ){
                            //     xmlR.ele({'w:tr':data[i]}).up()
                            // }
                        //xmlR.up()
                    xmlTc.up()

            }// Method for create p in table

        }// End of Class




/********
    parameters in pass createTable =
    {
        the first parameter  = number of col
        the second parameter = number of row
        the third parameter  = add flagP => (flagP is add tag p in xml)
        the fourth parameter = data for tag ('w:t')
    }

                                 x  y=     0              1              2
                                 || --------------------------------------------
                                 0  |     milad     |     Ali       |   null    |
                                    |   -  -   -    | -    -   -    | -   -   - |
                                 1  |     null      |     null      |   null    |
                                     --------------------------------------------


  s

     });// End Of It  Create FucLoop for Orginal Table




});
 ***/