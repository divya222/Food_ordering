var fb = require('../config/fbconfig');
var utils = require('../utils/utils');



/*** *
var orderobj = {
  getall: (req, res)=>{
    res.send(order);
  },
  add: (req, res)=>{
    let c = req.body;
    order.push(c);
    res.send(c);
  }
}***/
var orderobj = {
  getall:(req,res)=>{
      fb.ref('order').once('value',success=>{
          let order = utils.fbtoarr(success.val());
          res.send(order);
      });
  },
  add:(req,res)=>{
      let c= req.body;
      fb.ref('order').push(c).then(success=>{
          res.send(success);
      }).catch(err=>{
          res.send(err);
      });
  },
  getById:(req,res)=>{
    let key=req.query.key;
    fb.ref('order/'+key).once('value',success=>{
        console.log(success.val());
        res.send(success.val())
    })
},
}
module.exports = orderobj;
