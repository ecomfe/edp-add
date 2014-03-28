/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/



/**
 * node_modules/edp-add/util/js.js ~ 2014/02/08 11:58:05
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$
 * @description
 *
 **/
var path = require('path');

module.exports = function(args, opts) {
    var jsFile = args[ 0 ];

    var config = require( 'edp-config' );
    var data = {
        moduleId: opts.id || path.basename(jsFile, '.js'),
        author: config.get( 'user.name' ),
        email: config.get( 'user.email' ),
        file: '[Please input file description]',
        moduleDescription: '[Please input module description]'
    };

    switch ( opts.type ) {
        case 'function':
            data.functionModule = true;
            break;
        case 'object':
            data.objectModule = true;
            break;
        default:
            // edp add js Model.js
            // edp add js util.js
            if (/^[A-Z]/.test(jsFile)) {
                data.objectModule = true;
            } else {
                data.functionModule = true;
            }
            break;
    }

    require( 'edp-codegen' ).js( data, jsFile );
};




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
