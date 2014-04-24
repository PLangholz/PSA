/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'PSA Design' });
};


exports.m1 = function(req, res) {
	res.render('m1', { title: 'PSA Design' });
};