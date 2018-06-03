const wigglify = ({word = "wiggle", wordCount = 3, depth = 5, levels = 3, levelerChar = " "} = {}) => {
	if (!Number.isInteger(wordCount)){
		throw new TypeError(`"wordCount" needs to be an Integer.`)
	}

	if (!Number.isInteger(depth)){
		throw new TypeError(`"depth" needs to be an Integer.`)
	}

	if (!Number.isInteger(levels)){
		throw new TypeError(`"levels" needs to be an Integer.`)
	}

	if (typeof word != "string"){
		throw new TypeError(`"word" needs to be a String.`)
	}

	if (typeof levelerChar != "string"){
		throw new TypeError(`"levelerChar" needs to be a String.`)
	}


	let out = ""
	let level = ""
	let line = ""
	for (let i = 0; i < wordCount; i++){
		line += `${word}${i != wordCount - 1 ? " " : ""}`
	}

	level = `${line}
`

	for (let i = 0; i < depth; i++){
		for (let j = 0; j < i; j++){
			level += levelerChar
		}

		level += `${line}
`
	}

	for (let i = depth; i > 0; i--){
		for (let j = 0; j < i; j++){
			level += levelerChar
		}

		level += `${line}
`
	}

	for (let i = 0; i < levels; i++){
		out += level
	}

	out += `${line}
${line}`

	return out
}

export default wigglify
