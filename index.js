'use strict'
const backgroundColor = '#0e1112'
const foregroundColor = '#d4d7d6'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
	backgroundColor,
	'#cc3e44',
	'#8dc149',
	'#cbcb41',
	'#519aba',
	'#8dc149',
	'#519aba',
	'#6d8086',
	'#4d5a5e',
	'#cc3e44',
	'#8dc149',
	'#cbcb41',
	'#519aba',
	'#8dc149',
	'#519aba',
	'#d4d7d6',
	foregroundColor
]

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		foregroundColor,
		backgroundColor,
		borderColor,
		cursorColor,
		colors
	})
}
