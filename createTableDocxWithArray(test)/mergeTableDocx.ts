import {} from 'mocha';
import {createTableProperty} from '../test/funcDevOfficegenTest';
import * as xmlbuild from 'xmlbuilder';
import {start} from "repl";
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



    function createTr(_body:any, data:any){

            let counterRow =_.uniqBy(data, 'x');
            let row = counterRow.length;

        for(let i=0; i<row; i++ ){
            _body['w:tbl'].push({'w:tr':[]});
        }
        return _body;

    }//createTr



     function createTc(_body:any, data:any){

             let counterCol = _.uniqBy(data, 'y');
             let counterRow =_.uniqBy(data, 'x');
             let row = counterRow.length;
             let col = counterCol.length;

             for(let i=1; i<=row; i++){
                 for(let j=0; j<col; j++){
                     _body['w:tbl'][i]['w:tr'].push({'w:tc':[{'w:tcPr':[{'w:tcW':'' , attr:{'w:w':4657, 'w:type':'dxa'}}]},]});
                 }// for column
             }//for row
           return _body;
     }//createTc



     function createP(_body:any, data:any){

         let counterCol = _.uniqBy(data, 'y');
         let counterRow =_.uniqBy(data, 'x');
         let row = counterRow.length;
         let col = counterCol.length;

         for(let i=1; i<=row; i++){
            for(let j=0; j<col; j++){
                let checkValue = _.find(data, {x:i,y:j});
                let value = checkValue.value;
                if(value == ''){
                    _body['w:tbl'][i]['w:tr'][j]['w:tc'].push({'w:p':[]});
                }else{
                    _body['w:tbl'][i]['w:tr'][j]['w:tc'].push({'w:p':[{'w:r':[{'w:t':value}]}]});
                }
            }// for col
         }// for row

        return _body;
      }//createP


    function createMerge(_body:any,data:any){

        let counterCol = _.uniqBy(data, 'y');
        let counterRow =_.uniqBy(data, 'x');
        let row = counterRow.length;
        let col = counterCol.length;
        let start =[];
        for(let i=1;i<=row; i++ ){
            for(let j=0; j<col;j++ ){
                let checkMerge = _.find(data, {x:i, y:j});
                let rowX= checkMerge.mergeRow;
                let colY = checkMerge.mergeCol;
                if(rowX !='' && colY != '' ){
                    let findX = checkMerge.x;
                    let findY = checkMerge.y;
                    _body['w:tbl'][findX]['w:tr'][findY]['w:tc'][0]['w:tcPr'].push({'w:vMerge':'', attr:{'w:val':'restart'}}) ///<w:vMerge w:val="restart"/>
                    let a = _body;
                }else{
                    let tcRemoveFind = _.find(data, {x:1,y:colY});// nearTc1
                    if(tcRemoveFind = true){
                        _.remove()
                    }

                }
                let mergeCol = _.find(data, {x:1,y:colY});// remove
                let mergeRow  = _.find(data, {x:rowX, y:0});// mergeRow
                let removeNewTc = _.find(data, {x:rowX, y:1})// remove




            }// for col
        }// for row
        return _body['w:tbl'][1]['w:tr'][0]['w:tc'][0]['w:tcPr']

    }//createMerge











     /****                 DATA AND CALLING  FUNCTION                  ****/
        let data = [
            {x: 1, y: 0, value: 'Milad',mergeRow:'2', mergeCol:'1'},
            {x: 1, y: 1, value: '', mergeRow:'', mergeCol:''},
            {x: 1, y: 2, value: '',mergeRow:'', mergeCol:''},
            {x: 2, y: 0, value: '',mergeRow:' ', mergeCol:''},
            {x: 2, y: 1, value: '', mergeRow:'', mergeCol:''},
            {x: 2, y: 2, value: 'Ali',mergeRow:'', mergeCol:''}
        ];// data


      let objCreateTr  = createTr(body, data);
      let objCreateTc = createTc(objCreateTr , data);
      let objCreateP = createP(objCreateTc, data);
        let objCreateMerge = createMerge(objCreateP, data);
     console.log(JSON.stringify(objCreateMerge));
     done();



    });// it
});// End Of describe


