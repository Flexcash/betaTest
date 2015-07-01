


module.exports = {
  index: function (req, res) {
	Users.query("SELECT * FROM users", function(err, users) {
	  // return res.send(servicios);
	  // return res.send("Hi there!");
	  // console.log('servicios', servicios.rows);
		res.view('prueba2', 
		    {
		    	users : users
		    }
		);	  
	});  	
    // return res.send("Hi there!");
  },


  hi: function (req, res) {
	Servicio.query("SELECT * FROM servicio", function(err, servicios) {
	  // return res.send(servicios);
	  // return res.send("Hi there!");
	  // console.log('servicios', servicios.rows);
		res.view('prueba', 
		    {
		    	servicios : servicios,
		    	username : req.user
		    }
		);	  
	});  	
    // return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.redirect("http://www.mobiticket.co");
  },
  cholay: function (req, res) {
   return res.send("Hi cholay!");
  }
  // ,
  // login:  function (req, res) {
	 //  passport.authenticate('local', { successRedirect: '/home/hi',
	 //                                   failureRedirect: '/login',
	 //                                   failureFlash: true })
  // }
};