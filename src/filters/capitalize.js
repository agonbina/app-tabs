
export default function(input, scope) {
	if (input) {
		return input.toLowerCase().substring(0,1).toUpperCase()+input.substring(1)
	} else {
		return input
	}
}