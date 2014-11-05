/**
 * MailController
 *
 * @description :: Server-side logic for managing mails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new' : function(req,res){
		res.view();
	},

	'create' : function(req,res,next){
		Mail.create(req.params.all(),function mailCreate(err,mail){
			if(err){
				console.log(''+err);

				return res.redirect('/mail/new');
			}
			res.redirect('/mail/show/'+mail.id);
		})
	}
};

