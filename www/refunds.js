var exec = require('cordova/exec');
var channel = require('cordova/channel');

function Refunds(){
  this.processRequest = function(args, cb, error){
      exec(cb,error, "Stripe", "process", args);
  };
}

Refunds.prototype.create = function(arg, successCallback, errorCallback){
    this.processRequest(["POST","refunds", arg], successCallback, errorCallback);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = new Refunds();
}
