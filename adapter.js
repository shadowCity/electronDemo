  //this is for Electron adapter.js
  (function (global, factory) {
    // CommonJS、CMD规范检查
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    // AMD规范检查
    typeof define === 'function' && define.amd ? define(factory) : (global.Adapter = factory());
  }(this, (function () {
   'use strict';
    function Adapter () {
		var fs=require("fs")
		this.fs=fs
		console.info("this is electron plantform")

	};
	Adapter.prototype.readFile = function (p,options,cb) {
    p="./Edemo/app.js";
    options={"encoding":"utf-8"};
    cb=function(a, b) {
        console.log(a);
        console.log(b);
    }
		return this.fs.readFile(p,options,cb)

	};
  Adapter.prototype.isFile = function (p,cb) {
    p="./Edemo/app.js";
    cb=function(a, b) {
        console.log(a);
        console.log(b);
    }
    return this.fs.existsSync(p,cb)

  };
  Adapter.prototype.isDirectory=function(dir, cb) {
    fs.stat(dir, function (err, stats) {
      if (err) {
        cb(err);
      } else {
        cb(undefined, stats.isDirectory());
      }
    });
}

	return Adapter;
 } )))

