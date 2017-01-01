'use strict';

var _ = require('lodash');

// j is the thing to check.
module.exports = function(j) {
	if (typeof(j) !== 'object') {
		try {
			j = JSON.parse(j);
		} catch (e) {
			return false;
		}
	}

	//Numbers and booleans that get JSON.parse do not throw an error and are still of type number and boolean.
	//When null gets JSON.parse it becomes an empty object. So the empty check should suffice.
	return (typeof(j) == 'object' && !_.isEmpty(j)) ? j : false;
}
