const tr = require('./tr');

exports.errorTranslate = function(errorMessage) {
   const result = tr.find((item) => item.msg === errorMessage);
   if (result) {
       return result.tr;
   } else {
       return ; 
   }
}