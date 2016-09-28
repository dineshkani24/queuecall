# Queuecall (Synchronous call)

Stop execution of second function until first function finished or some tasks complete

Example: 

1. Resize image function only after image download finished        
2. Call thirdparty library functions only after library loaded in your application.


Execute second function only after first function finished


#dependencies

jQuery v1.9

#usage

queuecall.createQueue(function(){
  this.callnext(params);
});

#Example: 

function getScript(jspath){
  var _parent = this;
  $.getScript(jspath, function() {
    _parent.callnext(true);
  });
}

queuecall.createQueue(function(){
  getScript("module.js");
}, function(isfileloaded){
  console.log(isfileloaded);
});

