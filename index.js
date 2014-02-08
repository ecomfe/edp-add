/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * index.js ~ 2014/02/08 11:42:11
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 * edp-add的入口文件
 **/
var fs = require('fs');

exports.start = function (args, opts) {
    if (args.length <= 1) {
        console.error("Invalid arguments.");
        return;
    }

    var type = args[ 0 ];
    args.shift();

    var file = args[ 0 ];
    if (fs.existsSync(file)) {
        if (!opts.force) {
            // 如果文件已经存在了，并且没有设置--force参数，那么询问一下是否覆盖这个文件.
            var readline = require('readline');

            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question("Overwrite existing file [y/n]? ", function(answer) {
                rl.close();

                if (!(answer === 'y' || answer === 'Y')) {
                    process.exit(0);
                }
                else {
                    var fn = require('./lib/' + type);
                    fn(args, opts);
                }
            });
        }
    }
    else {
        var fn = require('./lib/' + type);
        fn(args, opts);
    }
}




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
