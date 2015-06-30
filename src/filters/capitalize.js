
export default function(input, scope) {
	if(input) input = input.toLowerCase().substring(0,1).toUpperCase()+input.substring(1)
	return input
}