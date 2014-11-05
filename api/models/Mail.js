/**
* Mail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema : true,

  attributes: {

  	to:{
  		type: 'string',
  		required :true,
  		email : true
  	},
  	subject:{
  		type: 'string'
  	},

  	text:{
  		type: 'string'
  	}


  }
};

