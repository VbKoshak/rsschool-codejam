module.exports = function Sum(arr){
	if(!Array.isArray(arr)) return "Not an array";
	let length = arr.length;
	let Sum = 0;
	let array = arr;
	for (let i = 0; i < length; i++)
	{
		Sum += array[i];
	}
	for (let i = 0; i < length; i++)
	{
		array[i] = Sum - array[i];
	}
	return array;
};
