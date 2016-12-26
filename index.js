var _ = require('lodash');

// j is the thing to check.
module.exports = function(j) {
	if (typeof(j) == 'string') {
		try {
			let o = JSON.parse(j);

			// Handle non-exception-throwing cases:
			// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
			// but... JSON.parse(null) returns null, and typeof null === "object", 
			// so we must check for that, too. Thankfully, null is falsey, so this suffices:
			if (o && typeof o === "object" && !_.isEmpty(o)) {
				return o;
			} else return false;
		} catch (e) {
			return false;
		}
	}
	if (typeof(j) == 'object') {
		if (_.isEmpty(j)) return false;
		else return j;
	} else return false;
}
