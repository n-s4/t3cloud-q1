function doTheWork(potentialObject, depth = 0) {

	if (typeof potentialObject !== 'object') {
		return {
			val: potentialObject,
			depth: depth
		}
	} else {
		const children = Object.values(potentialObject)
		var deepValues = []
		for (var i = 0; i < children.length; i++) {
			deepValues = deepValues.concat(doTheWork(children[i], depth + 1))
		}

		var deepestDepth = deepValues[0].depth
		var deepestValue = deepValues[0].val
		for (var i = 0; i < deepValues.length; i++) {
			if (deepValues[i].depth > deepestDepth) {
				var deepestDepth = deepValues[i].depth
				var deepestValue = deepValues[i].val
			}
		}
		return { val: deepestValue, depth: deepestDepth }
	}
}

function getDeepestValue(potentialObject) {
	const result = doTheWork(potentialObject)
	return result.val
}


const testObj = {
	a: 1,
	b: {
		c: 2
	},
	d: 3,
	e: {
		f: {
			g: 4
		},
		h: {
			i: 5
		}
	}
}

// const testObj = {
// 	a: 2
// }

const result = getDeepestValue(testObj)

console.log(result)