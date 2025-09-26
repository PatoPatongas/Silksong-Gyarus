(function ($global) { "use strict";
var Calculos = function() { };
Calculos.main = function() {
	console.log("Calculos.hx:5:","hola desde haxe");
};
Calculos.prototype = {
	getDifference: function(pais1,pais2,dinero) {
		var trans = 0;
		if(pais1 == "México") {
			if(pais2 == "Japón") {
				trans = 8;
			}
		}
		dinero *= trans;
		console.log("Calculos.hx:19:",dinero);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Calculos.main();
})({});
