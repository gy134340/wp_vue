var Vue = require('Vue');
var $ = require('jquery');
var VueRouter = require('VueRouter');

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello stupid'
	},
	mounted: function() {
		$('#app ul li').html('from jquery');
	}
});
