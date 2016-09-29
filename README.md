# Queuecall (Synchronous call)

Stop execution of second function until first function finished or some tasks complete.

Easy to implement and light weight less than one kb


#dependencies

jQuery v1.9


#usage

    queuecall(function1, function2).startQueue(params for function1);

#Example: 

    function getScript(jspath){
        var _parent = this;
        $.getScript(jspath).done(function() {
            _parent.callnext(true);
        }).fail(function(){ 
            _parent.callnext(false); 
        });
    }

    queuecall(getScript, function(isfileloaded){
        console.log(isfileloaded);
    }).startQueue("module.js");

