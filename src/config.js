export const ELASTIC_URL = '10.20.30.40:9200';
export const ES_INDEX_NAME = 'img_text_data';
export const ES_DOC_TYPE = '_doc'

import * as config from './config';


function someMethod(){
	let host = config.ELASTIC_URL;

    CKEDITOR.editorConfig = function( config ) {

    config.enterMode = CKEDITOR.ENTER_BR;
    }
}
