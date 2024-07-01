/*
	DrSnuggles ℗©®™
	Shadow Party 2024
*/

import {ChiptuneJsPlayer} from '../chiptune/chiptune3.min.js'
import {YMReader} from '../lunar/ym.js'

let ctx = new AudioContext(),
nodeAY, chiptune, aud

function part0() {	// Prepare: Audio policy
	if (ctx.state !== 'running') {
		// stupid no audio till user interaction policy thingy
		document.body.innerHTML = '<style>#audioModal{width:100vw;height:100vh;font-size:18vw;line-height:100vh;}</style><main id="audioModal">👉💻👂🎶</main>'
		function resume() {
			ctx.resume()
			part1()
			initAudio()
		}
		audioModal.addEventListener('keydown', resume)
		audioModal.addEventListener('click', resume)
		audioModal.addEventListener('touchend', resume)
	} else {
		part1()
		initAudio()
	}

	// ESC
	onkeydown = (ev) => {
		if (ev.key == 'Escape')
			close()	
	}
}

function part1() {	// Intro: Horse In Motion
	document.body.innerHTML = `<style>
	#intro{
		position:relative;
		width:100vw;
		height:100vh;
		animation:move 2s ease-in-out 0s 1 normal forwards;
		will-change:transform
	}
	@keyframes move{
		0%{transform:translateX(-42vw)}
		100%{transform:translateX(30vw)}
	}
	#logoName{
		width:41vw;
		position:absolute;
		top:50%;
		color:#FFF;
		font:4vw Syncopate;
		text-align:center;
		border:5px solid #FFF;
		border-radius:10px;
		animation:zoom 1.5s linear 2s 1 normal forwards,end .5s linear 4s normal forwards;
		will-change:transform;
		white-space:nowrap;
	}
	@keyframes zoom{
		0%{transform:scale(1.00,1.00)}
		100%{transform:scale(1.03,1.03)}
	}
	@keyframes end{
		0%{transform:scale(1.03,1.03);filter:blur(0);opacity:1}
		100%{transform:scale(100.00,100.00);filter:blur(100px);opacity:0}
	}
	#HiM{
		background-color:white;
		width:10vw;
		position:absolute;
		top:calc(50% - 1vw);
		animation:move2 .75s ease-in-out 2s 1 normal forwards,rainbowAnim 140s linear infinite;
		will-change:transform;transform:translateX(42vw)
	}
	@keyframes move2{
		0%{transform:translateX(42vw)}
		100%{transform:translateX(70vw)}
	}
	.rainbow{
		background-image:linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet,red);
		animation:rainbowAnim 35s linear infinite
	}
	@keyframes rainbowAnim{
		to{background-position:4500vh}
	}
	</style>
	<main id="intro">
		<span id="logoName">Shadow Party</span>
		<img id="HiM" src="./gfx/HQ_mask.gif" class="rainbow"/>
	</main>`
	function checkCSSEnded() {
		if (logoName.getBoundingClientRect().height < 3300) {
			setTimeout(()=>{ checkCSSEnded() }, 100)
			return
		}
		part2()
	}
	checkCSSEnded()
}

//
// Part 2 AY
//
function part2() { // CPC AY
	document.body.innerHTML = `<style>
:root {
	--c0:#000000;
	--c1:#000080;
	--c2:#0000FF;
	--c3:#800000;
	--c4:#800080;
	--c5:#8000FF;
	--c6:#FF0000;
	--c7:#FF0080;
	--c8:#FF00FF;
	--c9:#008000;
	--c10:#008080;
	--c11:#0080FF;
	--c12:#808000;
	--c13:#808080;
	--c14:#8080FF;
	--c15:#FF8000;
	--c16:#FF8080;
	--c17:#FF80FF;
	--c18:#00FF00;
	--c19:#00FF80;
	--c20:#00FFFF;
	--c21:#80FF00;
	--c22:#80FF80;
	--c23:#80FFFF;
	--c24:#FFFF00;
	--c25:#FFFF80;
	--c26:#FFFFFF;
}

.m0 {font:4.2vw CPC;}
.m1 {font:2.1vw CPC;}
.m2 {font:1.05vw CPC;}

body {
	margin: 8vh 8vw 8vh 8vw;
	background-color: var(--c1);
	color: var(--c24);
}

#Typer {
	font: 2.1vw CPC;
	height: 80vh;
	overflow: hidden;
}

.c0{color:var(--c0)}
.c1{color:var(--c1)}
.c2{color:var(--c2)}
.c3{color:var(--c3)}
.c4{color:var(--c4)}
.c5{color:var(--c5)}
.c6{color:var(--c6)}
.c7{color:var(--c7)}
.c8{color:var(--c8)}
.c9{color:var(--c9)}
.c10{color:var(--c10)}
.c11{color:var(--c11)}
.c12{color:var(--c12)}
.c13{color:var(--c13)}
.c14{color:var(--c14)}
.c15{color:var(--c15)}
.c16{color:var(--c16)}
.c17{color:var(--c17)}
.c18{color:var(--c18)}
.c19{color:var(--c19)}
.c20{color:var(--c20)}
.c21{color:var(--c21)}
.c22{color:var(--c22)}
.c23{color:var(--c23)}
.c24{color:var(--c24)}
.c25{color:var(--c25)}
.c26{color:var(--c26)}
.bc0{background-color:var(--c0)}
.bc1{background-color:var(--c1)}
.bc2{background-color:var(--c2)}
.bc3{background-color:var(--c3)}
.bc4{background-color:var(--c4)}
.bc5{background-color:var(--c5)}
.bc6{background-color:var(--c6)}
.bc7{background-color:var(--c7)}
.bc8{background-color:var(--c8)}
.bc9{background-color:var(--c9)}
.bc10{background-color:var(--c10)}
.bc11{background-color:var(--c11)}
.bc12{background-color:var(--c12)}
.bc13{background-color:var(--c13)}
.bc14{background-color:var(--c14)}
.bc15{background-color:var(--c15)}
.bc16{background-color:var(--c16)}
.bc17{background-color:var(--c17)}
.bc18{background-color:var(--c18)}
.bc19{background-color:var(--c19)}
.bc20{background-color:var(--c20)}
.bc21{background-color:var(--c21)}
.bc22{background-color:var(--c22)}
.bc23{background-color:var(--c23)}
.bc24{background-color:var(--c24)}
.bc25{background-color:var(--c25)}
.bc26{background-color:var(--c26)}
</style>
<pre class="m1" id="Typer">

 Amstrad 64K Microcomputer  (v2)

 ©1984 Amstrad Consumer Electronics plc
           and Locomotive Software Ltd.

 BASIC 1.1

Ready
</pre>
`
	playAY('./sfx/exolon.ym', false, (prog, timer)=>{
		if (prog >= 0.38) {
			// pitch up
			nodeAY.port.postMessage({msg:"configure", a: [false, 1000000-(prog-0.38)*1000000, ctx.sampleRate-(prog-0.38)*1000000, 'ACB']})
		}
		if (prog >= 0.40) {
			// next part
			clearInterval(timer)
			nodeAY.port.postMessage({msg:'stop'})
			part3()
		}
	})
	typer(document.getElementById('Typer'), [
		{c: 'm0', s: 4, t:'Hello Shadow Party !'},
		{c: 'm1', s: 16, t:'The CPC was my first computer but had a'},
		{c: 'm1', s: 16, t:'Vectrex before. Both have the AY chip.'},
		{c: 'm1', s: 16, t:'Even today new AY emulators do appear.'},
		{c: 'm2', s: 16, t:'Actually i perfer the new Lunar Journal\'s emu8910.'},
		{c: 'm2', s: 16, t:'The music for the game Exolon was composed by Raffaele Cecco.'},
		{c: 'm0', s: 4, t:['<span class="m0 bc0">00</span>',
							'<span class="m0 bc1">01</span>',
							'<span class="m0 bc2">02</span>',
							'<span class="m0 bc3">03</span>',
							'<span class="m0 bc4">04</span>',
							'<span class="m0 bc5">05</span>',
							'<span class="m0 bc6">06</span>',
							'<span class="m0 bc7">07</span>',
							'<span class="m0 bc8">08</span>'].join('')},
		{c: 'm0', s: 4, t:['<span class="m0 bc9">09</span>',
							'<span class="m0 bc10">10</span>',
							'<span class="m0 bc11">11</span>',
							'<span class="m0 bc12">12</span>',
							'<span class="m0 bc13">13</span>',
							'<span class="m0 bc14">14</span>',
							'<span class="m0 bc15">15</span>',
							'<span class="m0 bc16">16</span>',
							'<span class="m0 bc17">17</span>'].join('')},
		{c: 'm0', s: 4, t:['<span class="m0 bc18 c1">18</span>',
							'<span class="m0 bc19 c1">19</span>',
							'<span class="m0 bc20 c1">20</span>',
							'<span class="m0 bc21 c1">21</span>',
							'<span class="m0 bc22 c1">22</span>',
							'<span class="m0 bc23 c1">23</span>',
							'<span class="m0 bc24 c1">24</span>',
							'<span class="m0 bc25 c1">25</span>',
							'<span class="m0 bc26 c1">26</span>'].join('')},
		{c: 'm1', s: 4, t:'Thats the colors we had.'},
	])
}

let typeLines = []
function typer(dest, lines) {
	typeLines = lines
	typeLine(dest)
}
function typeLine(dest) {
	if (typeLines.length == 0) return
	const line = typeLines.splice(0,1)[0]
	// start of line
	dest.innerHTML += '<span class="'+line.c+'">'

	function typeLetter(dest, line) {
		//console.log('typeLetter', line)
		if (line.t.length == 0) {
			dest.innerHTML += '</span></br>'
			typeLine(dest)
			return
		}
		let letter = line.t.substring(0, 1)
		// letter can also have class so its a HTML tag, just look for <
		if (letter == '<') {
			let till = line.t.indexOf('>')+1				// end of opening tag
			till += line.t.substring(till).indexOf('>')+1	// end of closing tag
			letter = line.t.substring(0,till)
			line.t = line.t.substring(till)
			dest.innerHTML += letter
		} else {
			line.t = line.t.substring(1)
			dest.innerHTML += ['<span class="',line.c,'">',letter,''].join('')
		}
		dest.scrollTo(0, 9000)
		setTimeout(()=>{
			typeLetter(dest, line)
		},1000/line.s)

	}
	typeLetter(dest, line)
}
async function initAudio() {
	await ctx.audioWorklet.addModule(new URL('../lunar/lunar.js', import.meta.url))
	nodeAY = new AudioWorkletNode(ctx, 'lunar-audio-processor', {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2]
	})
	nodeAY.connect(ctx.destination)
}
function playAY(src, isYM, timeTrigger) {
	fetch(src)
	.then(r => r.arrayBuffer())
	.then(ab => {
		let song = new YMReader( new Uint8Array(ab) )
		nodeAY.port.postMessage({msg:"configure", a: [isYM, isYM ? 2000000 : 1000000, ctx.sampleRate, 'ACB']}) // isYM, clockRate, sr, panMode
		
		let timer = setInterval(()=>{
			nodeAY.port.postMessage({msg:'regs', a: song.getNextFrame()})
			const prog = song.frame / ( (song.frames) ? song.frames.length : song.frameCount )
			timeTrigger(prog, timer)
		},(1000/50))
	})
	.catch(e => console.error(e))
}

//
// Part X C64 SID
//
function part3() {
	document.body.innerHTML = `<style>
:root {
	--c0:#000000;
	--c1:#FFFFFF;
	--c2:#924A40;
	--c3:#84C5CC;
	--c4:#9351B6;
	--c5:#72B14B;
	--c6:#483AAA;
	--c7:#D5DF7C;
	--c8:#99692D;
	--c9:#675200;
	--c10:#C18178;
	--c11:#606060;
	--c12:#8A8A8A;
	--c13:#B3EC91;
	--c14:#867ADE;
	--c15:#B3B3B3;
}
body {
	margin: 12vh 8vw 8vh 8vw;
	background-color: var(--c14);
	color: var(--c14);
}
pre {
	font: 2.7vw C64;
	background-color: var(--c6);
	height: 79vh;
	overflow: hidden;
	text-transform: uppercase;
}
.bc0{background-color:var(--c0)}
.bc1{background-color:var(--c1)}
.bc2{background-color:var(--c2)}
.bc3{background-color:var(--c3)}
.bc4{background-color:var(--c4)}
.bc5{background-color:var(--c5)}
.bc6{background-color:var(--c6)}
.bc7{background-color:var(--c7)}
.bc8{background-color:var(--c8)}
.bc9{background-color:var(--c9)}
.bc10{background-color:var(--c10)}
.bc11{background-color:var(--c11)}
.bc12{background-color:var(--c12)}
.bc13{background-color:var(--c13)}
.bc14{background-color:var(--c14)}
.bc15{background-color:var(--c15)}
</style>
<pre id="Typer">

    **** COMMODORE 64 BASIC V2 ****

 64K RAM SYSTEM  38911 BASIC BYTES FREE

READY
</pre>
`
	aud = new Audio('./sfx/Great_Giana_Sisters_T005.sid_MOS6581R3.mp3')
	aud.play()
	typer(document.getElementById('Typer'), [
		{c: '', s: 4, t:'Hello visitor, still here ?'},
		{c: '', s: 8, t:'Till today i never owned a C64.'},
		{c: '', s: 8, t:'But ofc friends had one.'},
		{c: '', s: 8, t:''},
		{c: '', s: 8, t:'The Great Giana Sisters SID tune was'},
		{c: '', s: 8, t:'composed by Chris Huelsbeck.'},
		{c: '', s: 8, t:'And again the colors of this machine'},
		{c: '', s: 4, t:['<span class="bc0">0</span>',
							'<span class="bc1">1</span>',
							'<span class="bc2">2</span>',
							'<span class="bc3">3</span>',
							'<span class="bc4">4</span>',
							'<span class="bc5">5</span>',
							'<span class="bc6">6</span>',
							'<span class="bc7">7</span>',
							'<span class="bc8">8</span>',
							'<span class="bc9">9</span>',
							'<span class="bc10">A</span>',
							'<span class="bc11">B</span>',
							'<span class="bc12">C</span>',
							'<span class="bc13">D</span>',
							'<span class="bc14">E</span>',
							'<span class="bc15">F</span>'].join('')},
		{c: 'm1', s: 8, t:'OK, thats less colors compared to CPC'},
		{c: 'm1', s: 8, t:'but just comparing by this wont fit.'},
	])

	let triggered = false
	aud.ontimeupdate = (e) => {
		//console.log(aud.currentTime)
		if (aud.currentTime > 48) {
			aud.playbackRate += .1
		}
		if (aud.currentTime > 50 && !triggered) {
			triggered = true
			aud.pause()
			part4()
		}
	}

}


//
// Part 4 AmigaBoot
//
function part4() {
	document.body.innerHTML = `<style>boot{box-sizing:border-box;position:fixed;z-index:604;top:0;left:0;width:100vw;height:100vh;display:block;background:black;color:red;font:1.5vw monospace;text-align:center;}img{pointer-events:none;user-select:none;}boot img.c{position:absolute;top:calc(calc(100vh - 262px)/2);left:calc(calc(100vw - 260px)/2);scale:2;image-rendering:pixelated;}</style><boot id="Boot"></boot>`
	setTimeout(()=>{
		Boot.style.backgroundColor = '#444'
		setTimeout(()=>{
			Boot.style.backgroundColor = '#888'
			setTimeout(()=>{
				Boot.style.backgroundColor = '#FFF'
				setTimeout(()=>{
					Boot.innerHTML = '<img class="c" src="data:image/webp;base64,UklGRrQDAABXRUJQVlA4WAoAAAAYAAAAAwEABQEAVlA4TLUCAAAvA0FBECcgEEjyZ9ptDYFAkj/TbgsECAv+V7yZ/wDwVynBVyRJtm3btpUUjIJRCArOn1RmyZKllyqZZbzmjOj/BLTl/Pj2R54P+5TFQL0QyDTwAQQ4IaaXBPgAAhxRhusCfAABPoAAH0CADyDABxDgAwjw7zqTf+3d/jvbS/96+rX/998/6FjC7BExXKBecD6AznHpGOX9uwPgIq9Rzwawv6VzdL54e8DxNwEeE7iKr4BTAh/hCxDuJWoSNb2aqImavku/T+ATKpN31ERN5vpEEzXZPHqHVy4Y3sh4w1xC78KJDJIV6lX2iTX0LjOJA9OrZqimV03i1tG7dtSPHt8m8B69a8GZ/BnZIlCZG7sWfPW2APYwo+BawBMBLwGVsYvBt28KOMmkq8H5RE0ySBI1vZp0yRaBNwcuB+8mneNETdSki2aPwJsArgfvp9dkzXDDEB8E7yd6lXsmbhE4D/ggeD9xZBKTqOkd6BaB04APAq4erNw0xAfB9Um2DpwFfBD8mVsD+CR4QojHB/inFL0CVNGXWgyLoUXJpALU/vj0jBaoUlpgAaUWlFpQCqVCWaBKebkxz9/qS4XSAmrgSGsA2vXleSilApSOoDooiw4cKeWJUM4OClQLqigo8IryRCiHdAWlUB0UlABeUR5JeVFaUFaBagGUXU2UR1Je9VUWfVUBlAPqojyR12+c8A387p3yKxC8PXAM7ZX7pXCD3tOin6H3sK6v6D0wVRjRe1riGDp6Z6EdlaD0npyMnYZ2SFww9sRQgAkFrqAdEqgyq8JpKfOO6aCd0+SUHAC/AdrOtdeIMEKhnZmM4OykV4B2amIHSjs36VXaOYFLEdo5gYto798ocC20A2LSL8DF0M7IR6H9PQDa+UH7WwDQTg+gnR19+6FbBkL7qZtG+7Gb1v4Xjxf+NQUARVhJRtgAAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAMQECABEAAABmAAAAaYcEAAEAAAB4AAAAAAAAAGAAAAABAAAAYAAAAAEAAABwYWludC5uZXQgNC4zLjExAAAFAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAABAEAAAOgBAABAAAABgEAAAWgBAABAAAAugAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAA="/>'
					setTimeout(()=>{
						part5()
					},2000)
				},1000)
			},1000)
		},300)
	},300)
}

//
// Part 5 Amiga MOD
//
function part5() {
	// amiga but no idea
	document.body.innerHTML += `<style>#scroller {font: 5vh Topaz8; position: absolute; bottom: 150px;color: #000;z-index:605;
		white-space: nowrap;
		animation: scrl 33s linear infinite;
	}
	@keyframes scrl {
		0%   { transform: translate(100vw, 0); }
		100% { transform: translate(-100%, 0); }
	}	
}</style><div id="scroller">Amigaaaaaaa !!! Next time i will bring you a boing demo, for sure ;) The MOD was done by Chris but credits go to Kraftwerk ;) If you want to listen to a MOD i did have a look at my old school entry, but you\'ve been warned.</div>`

	let pitch = 1, triggered = false
	chiptune = new ChiptuneJsPlayer()
	chiptune.onInitialized(() => {
		chiptune.load('./sfx/boingbum.mod')
	})
	chiptune.onMetadata((o) => {})
	chiptune.onProgress((o) => {
		if (o.pos > 30) {
			pitch += .005
			chiptune.setPitch(pitch)
		}
		if (o.pos > 31 && !triggered) {
			triggered = true
			chiptune.stop()
			part6()
		}
	})

}

//
// Part 6 Atari YM
//
function part6() {
	document.body.innerHTML = `<style>body{margin: 6vh 10vw 2vh 10vw;color:#FFF;background-color:#000;}.imgBomb{scale:3;image-rendering:pixelated;padding-left:12px;}#Typer{font:2vw AtariLo;height:90vh;overflow:hidden;background:repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 4px 4px;}</style>
	<pre id="Typer"></pre>`
	playAY('./sfx/seven gates of jambala 2 - intro.ym', true, (prog, timer)=>{
		if (prog >= 0.38) {
			// pitch up
			nodeAY.port.postMessage({msg:"configure", a: [true, 2000000-(prog-0.38)*1000000, ctx.sampleRate-(prog-0.38)*1000000, 'ACB']})
		}
		if (prog >= 0.40) {
			// next part
			clearInterval(timer)
			nodeAY.port.postMessage({msg:'stop'})
			// location+=''
			document.body.innerHTML=''
		}
	})

	const bombImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA0SURBVBjTY+BhYAhiYGBkYJjQwKD8gIH5AQP/Dwb5PyBk/4/B/h6D/B0G+T0gQfYPDIwHABLoDYJCgPQRAAAAAElFTkSuQmCC'
	typer(document.getElementById('Typer'), [
		{c: '', s: 1, t:'<img class="imgBomb" src="'+bombImg+'"></img> <img class="imgBomb" src="'+bombImg+'"></img> <img class="imgBomb" src="'+bombImg+'"></img> <img class="imgBomb" src="'+bombImg+'"></img>'},
		{c: '', s: 4, t:''},
		{c: '', s: 4, t:'Still here?'},
		{c: '', s: 4, t:''},
		{c: '', s: 16, t:':) Just have some small memories of the'},
		{c: '', s: 16, t:'Atari ST/E. Only a single friend had'},
		{c: '', s: 16, t:'one and he was more using our Amigas.'},
		{c: '', s: 4, t:''},
		{c: '', s: 8, t:'Much later i realized the AY/YM family'},
		{c: '', s: 8, t:'is in here again.'},
		{c: '', s: 4, t:''},
		{c: '', s: 8, t:'Seven Gates of Jambala was composed by'},
		{c: '', s: 4, t:'Jochen Hippel.'},
		{c: '', s: 4, t:''},
		{c: '', s: 4, t:''},
		{c: '', s: 8, t:'So time to say thank you to the Party'},
		{c: '', s: 8, t:'Organizers!'},
		{c: '', s: 4, t:'                     Thanks !'},
		{c: '', s: 4, t:''},
		{c: '', s: 4, t:'Credits:'},
		{c: '', s: 8, t:'      ... are a bit funny...'},
		{c: '', s: 8, t:'I did no GFX, no SFX, no Font.'},
		{c: '', s: 8, t:'I just glued it somehow into an entry.'},
		{c: '', s: 4, t:''},
		{c: '', s: 8, t:'Bye from DrSnuggles and hope you had a'},
		{c: '', s: 8, t:'good time.'},
		{c: '', s: 4, t:''},
		{c: '', s: 4, t:'CYa !'},
	])

}


//
// Main
//
part0()
