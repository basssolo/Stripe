var exec = require('cordova/exec');
var channel = require('cordova/channel');

function Charges(){
  this.processRequest = function(args, cb, error){
      exec(cb,error, "Stripe", "process", args);
  };
}

Charges.prototype.create = function(arg, successCallback, errorCallback){
    this.processRequest(["POST","refunds", arg], successCallback, errorCallback);
}
