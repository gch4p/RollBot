/**
 * @type {import('../../typings').LegacyCommand}
*/
module.exports = {
	name: "randomteam",
	aliases: ["weaponteam", "rwteam"],

	execute(message, args) {
		const weapons = [".52 Gal",".96 Gal","Aerospray MG", "Aerospray RG (Little Timmy Glue Gun Deluxe","Ballpoint Splatling","Big Swig Roller","Bamboozler 14 Mk I","Blaster","Bloblobber","Carbon Roller","Carbon Roller Deco","Clash Blaster","Classic Squiffer","Custom Splattershot Jr.","Dapple Duallies","Dapple Dualies Nouveau","Dark Tetra Dualies","Dualie Squelchers","Dynamo Roller","E-liter 4K","E-Liter 4K Scope","Explosher","Flingza Roller","Forge Splatterrshot Pro","Glooga Dualies","GOD Tuber","H-3 Nozzlenose","Heavy Splatling","Hero Shot Replica","Hydra Splatling","Inkbrush","Inkbrush Nouveau","Jet Squelcher","L-3 Nozzlenose","Luna Blaster","Luna Blaster Neo","Mini Splatling","N-ZAP '85","Nautilus 47","Octobrush","Range Blaster","Rapid Blaster","Rapid Blaster Pro","REEF-LUX 450","Slosher","Sloshing Machine","Snipewriter 5H","Splash-o-matic","Splat Brella","Splat Charger","Splat Dualies","Splat Roller","Splatana Wiper","Splatana Stamper","Splatterscope","Splattershot","Splattershot Jr.","Splattershot Nova","Splattershot Pro","Sploosh-o-matic","Squeezer","Tenta Brella","Tenetek Splattershot","Tri-Slosher","Tri-Stringer","Undercover Brella","Zink Mini Splatling"];
		var weap1 = weapons[Math.floor((weapons.length) * Math.random())];
    var weap2 = weapons[Math.floor((weapons.length) * Math.random())];
    var weap3 = weapons[Math.floor((weapons.length) * Math.random())];
    var weap4 = weapons[Math.floor((weapons.length) * Math.random())];

		message.channel.send({ content: `${message.author}, here's your team! \n 
    **${weap1}**\n
    **${weap2}**\n
    **${weap3}**\n
    **${weap4}**` });
	},
};
