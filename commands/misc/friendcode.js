/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
	name: "friendcode",
	alias: "fc",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "Rock's FC is: **0704-4328-7409**" });
	},
};