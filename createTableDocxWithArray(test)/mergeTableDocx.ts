import {} from 'mocha';
import {createTableProperty} from '../test/funcDevOfficegenTest';
import * as xmlbuild from 'xmlbuilder';
let json2xml = require('json2xml');
let _ = require('lodash');




describe('Merge Table', function(){



    /*****    xmltcPr.ele('w:gridSpan', {'w:val':'2'}).up() ****/

    it('test Send Data', function(done) {

    let body = {
        'w:tbl':[{
            'w:tblPr':[
                {'w:tblStyle':'', attr:{'w:val':"TableGrid"}}
            ],

        }]//w:tbl
    };



        //json2xml({ 'w:tbl': 1, attr: { 'w:val': 2, c: 3 } }, { attributes_key: 'attr' })
       //let  bodyString  = json2xml(body,{ attributes_key: 'attr' });

    function createTr(body:any, data:any, next:any){
            let tr ={'w:tr':[]};
            let counterRow =_.uniqBy(data, 'x');
            let row = counterRow.length;

            for (let i= 0 ; i<row; i++){
                body['w:tbl'].push(tr);

            }// for
        next(body)

        // createTc(body,data, function (result:any) {
        //     next(result);
        // })
    }//createTr



     function createTc(body:any, data:any, next:any){
             let tc = {'w:tc':[
                 // {'w:tcPr':[
                 //     {'w:tcW':'' , attr:{'w:w':4657, 'w:type':'dxa'}}
                 // ]},// tcPr
             ]};
             let counterCol = _.uniqBy(data, 'y');
             let counterRow =_.uniqBy(data, 'x');
             let row = counterRow.length;
             let col = counterCol.length;
             let tr = body['w:tbl'][1]['w:tr'];
              let p = {'w:p':[]};


                for(let j=1; j<=col; j++){
                    body['w:tbl'][1]['w:tr'].push(tc)

                }
         next(body)


         // createP(body, data, function(result:any){
         //     next(result);
         // })//createP

     }//createTc


     //
     // function createP(body:any, data:any, next:any){
     //
     //  }//createP



        let data = [
            {x: 0, y: 0, value: 'Milad', mergeRow:''},
            {x: 0, y: 1, value: '', mergeRow:1},
            {x: 0, y: 2, value: '', mergeRow:''},
            {x: 1, y: 0, value: '', mergeRow:''},
            {x: 1, y: 1, value: '', mergeRow:''},
            {x: 1, y: 2, value: 'Ali', mergeRow:''}
        ];// data


     let objCreateTr  = createTr(body, data, function (body:any) {
         //console.log(json2xml(body,{ attributes_key: 'attr' }) );
         console.log(JSON.stringify(body))
         done();
     })



    });// it
});// End Of describe


