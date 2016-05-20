var person = function(){
	var name = "Yansen";
	return {
		say: function(){
			console.log("Hello world, " + name);
		}
	}
}();

person.say();