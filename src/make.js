module.exports = function Make(){
	console.log(arguments.length);
	constructor();
	{
		this.array = [];
		let length = arguments.length;
		for (let i = 0; i<length; i++)
		{
			this.array.push(arguments[i]);
		}
		console.log("constr:",this.array);
	}
	let length = arguments.length;
	let cond1 = (length == 1);
	let cond2 = (typeof(arguments[0]) == "function");
	if (cond1 && cond2)
	{
		let result = arguments[0](this.array[0],this.array[1]);
		for (let i = 2; i < this.array.length; i++)
		{

		}
	}
	else {
		for (let i = 0; i < length; i++)
		{
			this.array.push(arguments[i]);
		}
		return Make;
	}
	// if (arguments.length == 1)
	// {
	//     let a = arguments[0];
	//     console.log(a);
	//     if (typeof (a) == "function"){
	//         console.log("final:", this.array);
	//         return this.array;
	//     }
	//     else {
	//         return Adding;
	//     }
	// }
	// function Adding()
	// {
	//     console.log("st:",this.array);
	//     let length = arguments.length;
	//     for (let i = 0; i<length; i++)
	//     {
	//         this.array.push(arguments[i]);
	//     }
	//     console.log("fin:",this.array);
	// }
	return Make;

	// function ADD(arguments)
	// {
	//     let length = arguments.length;
	//     for (let i = 0; i < length; i++)
	//     {
	//         array.push(arguments[i]);
	//     }
	// }
	//
	// return this;
};
