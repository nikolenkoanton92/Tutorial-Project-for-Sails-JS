/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 // var User = require('../models/User');

module.exports = {

	'new' : function(req,res){
		res.locale.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},

	create: function(req,res,next){
		console.log('Test only');
		User.create( req.params.all(), function userCreated(err, user){

			if (err) {
				console.log(''+err);
				req.session.flash={
					err : err
				}

				return res.redirect('/user/new');
			}
			//res.json(user);
			res.redirect('/user/show/' + user.id);
			req.session.flash = {};
		});
	}, 

	show : function(req,res,next){
		User.findOne(req.param('id'), function foundUser(err,user){
			if (err) return next(err);
			if(!user) return next();
			res.view({ 
				user : user
			});
		});
	},
	index : function(req, res, next){
		User.find(function foundUsers(err, users){
			if(err) return next(err);
			res.view({
				users : users
			});
		});
	},

	edit : function ( req, res, next){

		User.findOne(req.param('id'), function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();

			res.view({
				user : user
			});
		});

	},

	update: function(req,res, next){
		User.update(req.param('id'), req.params.all(), function userUpdated(err){
			if(err){
				return res.redirect('/user/edit/' + req.param('id'));
			}

			res.redirect('/user/show/' + req.param('id'));
		});
	},

	delete: function(req, res, next){
		User.findOne(req.param('id'), function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next('User doen\'t exist/');

			User.destroy(req.param('id'), function userDestroyed(err){
				if(err) return next(err);
			});

			res.redirect('/user');
		});
	}
	
};

