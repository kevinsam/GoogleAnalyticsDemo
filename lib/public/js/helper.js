"use strict";

// These are some useful helper functions that I have built up over time.
module.exports = {
	/* This function expects an array such as ['Nick', 'Bob', 'Nick'] and then sorts
 into two arrays [a, b]. It counts how many times a value is in the array and seperates it
 to the name and the amount of times it appears.
 The output would be ['Nick', 'Bob'] [2, 1]. */
	order: function order(arr) {
		var a = [];
		var b = [];
		var prev = void 0;

		arr.sort();
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== prev) {
				a.push(arr[i]);
				b.push(1);
			} else {
				b[b.length - 1]++;
			}
			prev = arr[i];
		}
		return [a, b];
	},

	/* This helper function checks for an empty object. Return true if empty, returns
    false if not empty*/
	objectEmpty: function objectEmpty(obj) {
		var value = void 0;
		if (Object.keys(obj).length === 0 && obj.constructor === Object) {
			value = true;
		} else {
			value = false;
		}
		return value;
	}
};