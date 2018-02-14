import {} from 'mocha';
import {createTableProperty} from '../test/funcDevOfficegenTest';
import * as xmlbuild from 'xmlbuilder';
let json2xml = require('json2xml');
let _ = require('lodash');



describe('Merge Table', function(){
    it('test Send Data', function(done) {
        let body = {
            "w:tbl": [
                {
                    "w:tblPr": [
                        {
                            "w:tblStyle": "",
                            "attr": {
                                "w:val": "TableGrid"
                            }
                        }
                    ]
                },
                {
                    "w:tr": [

                    ]
                },
                {
                    "w:tr": [

                    ]
                }
            ]
        };


     let tc = {'w:tc':[]}

    for(let x=1; x<3 ; x++){
        for (let i= 0 ;i<3; i++){
            body['w:tbl'][x]['w:tr'].push(tc)
        }
    }


     console.log(JSON.stringify(body));
        done();
    });// it

});