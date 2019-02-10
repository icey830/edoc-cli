'use strict';

var tdoc = require('./edoc.js');

var colors = require('colors');
var fs = require('fs');
var sysPath = require('path');
var JSON5 = require('json5');
var optimist = require('optimist');
var loadConfig = require('./utils/loadConfig.js');
var packageJSON = require('../package.json');

//显示版本信息
function helpTitle() {
    console.info('');
    console.info('===================== edoc ' + packageJSON.version + ' ====================');
    console.info('');
}

//对其空格文字
function fixempty(str, limit) {
    var i,
        n = limit - str.length;
    if (n < 0) {
        n = 0;
    }
    return str + function () {
        var _i,
            _results = [];
        for (i = _i = 0; 0 <= n ? _i <= n : _i >= n; i = 0 <= n ? ++_i : --_i) {
            _results.push(" ");
        }
        return _results;
    }().join('');
};

var cli = module.exports = {
    run: function run(cmd) {
        var cwd = process.cwd(),
            argv = optimist.argv;
        if (edoc[cmd]) {
            if (argv.h || argv.help) {
                helpTitle();
                console.info('');
                console.info('命令：', cmd);
                console.info('说明：', edoc.actions[cmd].usage);
                console.info('');
                if (edoc.actions[cmd].setOptions) {
                    edoc.actions[cmd].setOptions(optimist);
                }
                optimist.showHelp();
            } else if (cmd == 'build') {
                loadConfig(cwd, function (conf) {
                    if (conf) {
                        edoc.build(cwd, conf, {
                            watch: argv.w || argv.watch,
                            template: argv.t || argv.template,
                            dest: argv.o || argv.output,
                            page: argv.p || argv.page
                        });
                    } else {
                        console.log('配置文件读取失败！'.red);
                    }
                });
            } else if (cmd == 'init') {
                edoc.init(cwd, {
                    template: argv.t || argv.template
                });
            } else if (cmd == 'new') {
                edoc["new"](cwd);
            } else if (cmd == 'server') {
                edoc.server(cwd);
            }
        } else {
            console.log('X 命令不存在！'.red);
        }
    },
    help: function help() {
        helpTitle();
        for (var key in edoc.actions) {
            console.info(' ' + fixempty(key, 15) + ' # ' + (edoc.actions[key].usage || ''));
        }
        console.info('');
        console.info(' 如果需要帮助, 请使用 edoc {命令名} --help ');
    }
};