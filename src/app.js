var Vue = require('Vue');
var $ = require('jquery');
// var axios = require('axios');
var VueRouter = require('VueRouter');
var index = require('./index.scss');

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello testssaalaalla test nnn h'
	},
	mounted: function() {
		$('#app ul li').html('from jquery')
	}
});
