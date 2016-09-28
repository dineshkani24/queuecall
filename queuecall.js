/**
 * queuecall.js version - 1.0 - 28/Sep/2016
 * Copyright (c) 2016 dineshkani <dineshkani.n@gmail.com>;
 * Homepage: https://github.com/dineshkani24/queuecall
 * License: MIT
 */

var queuecall = (function(){
	"use strict";
	
	var prepareFunction = function(execFunc){
		if (jQuery.isFunction(execFunc)){
			execFunc = (function() {
				var defer = jQuery.Deferred();
			    var copyFunc = execFunc;
			    
			    var returnvalue = {
			    	interfacefunc: function() {
				        copyFunc.apply(this, arguments);
				        return defer.promise();
				    },
				    callnext: function(){defer.resolve(arguments);},
			    }
			    return returnvalue;
			}());
			return execFunc.interfacefunc();
		}
	}
	
	var makecall = function(execFunc, afterExec){
		jQuery.when(prepareFunction(execFunc)).done(function(params){
			if (jQuery.isFunction(afterExec)){afterExec.apply(this, params);}
		});
	};
	
	var queuecall = {
		createQueue: function(execFunc, afterExec){
			makecall(execFunc, afterExec);
		}
	};
	return queuecall;
})();
