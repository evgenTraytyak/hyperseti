'use strict'
const backgroundColor = '#0e1112'
const foregroundColor = '#d4d7d6'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
	backgroundColor,
	'#cc3e44', // red
	'#8dc149', // green
	'#cbcb41', // yellow
	'#519aba', // blue
	'#f55385', // pink
	'#519aba', // cyan
	'#6d8086', // light gray
	'#4d5a5e', // medium gray
	'#cc3e44', // red
	'#8dc149', // green
	'#cbcb41', // yellow
	'#519aba', // blue
	'#f55385', // pink
	'#519aba', // cyan
	'#d4d7d6', // white
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
