/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
	name: "hello",

	execute(message, args) {
		message.channel.send({ content: "Hi! My name is Roll!" });
	},
};