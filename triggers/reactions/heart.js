/**
 * @type {import('../../typings').TriggerCommand}
 */

module.exports = {
	name: ["roll", "Roll"],

	execute(message, args) {
		message.react('💖');
	},
};