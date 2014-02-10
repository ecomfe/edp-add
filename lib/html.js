/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * node_modules/edp-add/util/html.js ~ 2014/02/08 11:58:51
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
module.exports = function(args, opts) {
    var htmlFile = args[ 0 ];
    htmlFile = require( 'path' ).resolve( process.cwd(), htmlFile );

    var config = require( 'edp-config' );
    var data = {
        title: '[Please input title]',
        body: '[Page Body]',
        author: config.get( 'user.name' )
    };


    // 读取loader信息, 构建loader数据
    var loaderData = require( 'edp-project' ).loader.getConfig( htmlFile );
    if ( loaderData && loaderData.url ) {
        var packages = loaderData.packages;
        packages.length > 0 && (packages[ packages.length - 1 ].last = true);

        data.loader = true;
        data.loaderConfig = true;
        data.loaderUrl = loaderData.url;
        data.loaderBaseUrl = loaderData.baseUrl;
        data.loaderPaths = loaderData.paths;
        data.loaderPackages = packages;
    }

    require( 'edp-codegen' ).html( data, htmlFile );
}





















/* vim: set ts=4 sw=4 sts=4 tw=100: */
