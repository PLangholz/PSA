/* GET home page. */
exports.index = function(req, res){
  res.render('index', {});
};

exports.team = function(req, res){
  res.render('team', { team: true });
};

exports.m1 = function(req, res) {
	res.render('m1', {});
};

exports.m2 = function(req, res) {
    res.render('m2', {});
};

exports.glmpse = function(req, res) {
    res.render('glmpse', { glmpse: true });
};


exports.m3 = function(req, res) {
	res.render('m3', {});
}

exports.m4 = function(req, res) {
    res.render('m4', {});
}

