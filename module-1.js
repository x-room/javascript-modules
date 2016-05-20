var person = {
	name: "Yansen",
	say: function(){
		console.log("Hello world, This is " + this.name);
	}
};

person.say();