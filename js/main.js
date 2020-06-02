"use strict";

let playList = [{
	author: "led zeppelin",
	song: "stairway to heaven",
	duration: "2:03"
},
{
	author: "queen",
	song: "bohemian rhapsody",
	duration: "2:30"
},
{
	author: "lynyrd skynyrd",
	song: "free bird",
	duration: "1:56"
},
{
	author: "deep purple",
	song: "smoke on the water",
	duration: "3:03"
},
{
	author: "jimi hendrix",
	song: "all along the watchtower",
	duration: "2:53"
},
{
	author: "AC/DC",
	song: "back in black",
	duration: "2:43"
},
{
	author: "queen",
	song: "we will rock you",
	duration: "2:13"			
},
{
	author: "metallica",
	song: "enter sandman",
	duration: "3:03"			
}
];


let list = document.getElementById('playlist');
let tune = document.querySelector('[data-tune]').innerHTML;

function playListBild(arg) {
	let newList = '';

	arg.forEach(elem => {
		newList += tune.replace(/{{author}}/gi, elem.author)
		.replace(/{{song}}/gi, elem.song)
		.replace(/{{duration}}/gi, elem.duration);
	});
	list.innerHTML = newList;
}
playListBild(playList);