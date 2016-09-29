/**
 * queuecall.js version - 1.0 - 28/Sep/2016
 * Copyright (c) 2016 dineshkani <dineshkani.n@gmail.com>;
 * Homepage: https://github.com/dineshkani24/queuecall
 * License: MIT
 */

var queuecall = (function(){
	"use strict";
	
	var QueueCall = (function(execFunc, endFunc){
		this.startFunc = function(){
		    execFunc.apply(this, arguments);
	        return this.defer.promise();
		}
		this.defer = jQuery.Deferred();
		this.endFunc = endFunc;
	});
	
	QueueCall.prototype.startQueue = function(){
		var _parent = this;
		jQuery.when(_parent.startFunc.apply(this, arguments)).done(function(params){
			_parent.endFunc.apply(undefined, params);
		});
	}
	QueueCall.prototype.callnext = function(){
		this.defer.resolve(arguments);
	}
	
	return function(startFunc, endFunc){ 
		return new QueueCall(startFunc, endFunc)
	};
})();
