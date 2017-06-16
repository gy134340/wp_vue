var Vue = require('Vue');
var $ = require('jquery');
var VueRouter = require('VueRouter');
var index = require('./index.scss');

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello stupid, such a stupid guy fuck'
	},
	mounted: function() {
		$('#app ul li').html('from jquery');
	}
});
