(() => {
'use strict';
const VALUES=[100,200,300,400,500], STORAGE_KEY='vrinn-friends-jeopardy-v3';
const B=[
{title:'The One Everyone Thinks They Know 🛋️',subtitle:'The iconic moments board',kicker:'ROUND ONE',cats:[
['👕','theme-clothes','Could I BE Wearing Any More Clothes?','Outfits, costumes & visual gags',[
['After Chandler hides his underwear, what does Joey wear as revenge?','All of Chandler’s clothes','👕','All the clothes'],
['Ross can’t get his leather pants back on. Which two bathroom products does Joey suggest?','Powder and Lotion','🖤','Leather pants'],
['Monica buys Chandler a giant pink bunny costume because of his favorite childhood book. Which book / What is the costume?','The Velveteen Rabbit','🐰','Pink bunny'],
['At Monica and Chandler’s Halloween party, Ross combines a potato and a Soviet satellite into what costume?','Spud-nik','🥔📡','Spud-nik',1],
['After their breakup, Ross demands back Rachel’s favorite sleep T-shirt. What three words are printed on it?','Frankie Say Relax','👕','FRANKIE SAY RELAX']]],
['💔','theme-break','We Were on a Break!','Romance, dates & disasters',[
['At his wedding to Emily, whose name does Ross accidentally say?','Rachel','💍💔','Wrong name'],
['Chandler hooks up with one of Joey’s seven sisters but forgets which one. Who was she?','Mary-Angela','💞','Seven sisters'],
['Phoebe dates Jason and Vince at the same time. What are their professions?','Kindergarten teacher and a Firefighter','🧑‍🏫🔥','Two dates'],
['Phoebe moves in with Gary, but it lasts one night. What does he do the next morning?','Shooting a bird that was chirping outside their bedroom window','🐦','One very short move-in'],
['Monica and Ethan both lie about their ages. What does each claim, and what is the truth?','Monica says she’s 22 while she is 26, and Ethan says he’s a senior in college while he is a senior in high school','🪪','Age lies',1]]],
['😱','theme-omg','Oh. My. God.','Supporting & recurring characters',[
['Which Central Perk employee spends years secretly in love with Rachel?','Gunther','☕','Central Perk'],
['Which downstairs neighbor leaves everything to “the noisy girls upstairs”?','Mr Heckles','🚪','The noisy girls upstairs'],
['Which short-lived Chandler roommate watches him sleep and replaces a dead fish with a Goldfish cracker?','Eddie','🐟','Goldfish cracker'],
['Which former high-school heartthrob later dates Monica but still lives with his parents?','Chip Matthews','🪩','High-school heartthrob'],
['In Janice’s final appearance, what full name does Chandler dramatically call her?','Janice Litman-Goralnik, née Hosenstein','😱','OH. MY. GOD.',1]]],
['💬','theme-quotes','Who Said It… and What Did They Say?','Quotes, speakers & missing lines',[
['Who says it, and finish the line: “I’m not great at the advice. Can I interest you in a ____?”','“sarcastic comment” — Chandler','💬','Sarcastic comment'],
['Who says it, and finish the line: “It’s like a cow’s opinion. It just ______.”','“Doesn’t Matter, Its moo” — Joey','🐄','A moo point'],
['Who says it, and complete the line: “Isn’t that just kick-you-in-the-crotch, spit-on-your-neck, ______?”','“Fantastic” — Rachel','💥','Fantastic'],
['Who says it, and complete: “You don’t own a TV? What’s all your ______?”','“furniture pointed at?”','📺','Furniture pointed at it'],
['At Thanksgiving, Monica fires back with one embarrassing fact about each friend. Name all five. (100/200 points each)','Ross: married a lesbian; Rachel: left a man at the altar; Phoebe: fell in love with a gay ice dancer; Joey: “threw a girl’s wooden leg in the fire.”; Chandler: “live in a box!”','📣','Thanksgiving comeback',1]]],
['🍕','theme-food','Joey Doesn’t Share Food!','Food, cooking & eating moments',[
['Rachel’s trifle combines dessert with what savory filling from the stuck cookbook pages?','Beef sautéed with peas and onions','🍨🥩','The trifle'],
['During the police ride-along, Joey dives over Ross during a “gunshot.” What was he really protecting?','Meatball Sandwich','🥪🛡️','Protect the sandwich',1],
['Rachel and Chandler steal a misdelivered cheesecake. Name the bakery or its city.','Momma’s Little Bakery in Chicago, Illinois','🍰','Cheesecake'],
['What exactly is the “Moist Maker” in Ross’s Thanksgiving sandwich?','an extra slice of gravy-soaked bread in the middle of the sandwich','🥪💧','The Moist Maker',1],
['On the “JOEY DOESN’T SHARE FOOD!” date, what dessert does Joey order, and which of Sarah’s desserts does he eat?','Joey orders the cheesecake; Sarah orders the chocolate torte','🍰🍫','Dessert tables turn',1]]]
]},
{title:'The One for the Real Fans ☕',subtitle:'The deep-cut board',kicker:'ROUND TWO',cats:[
['🎬','theme-episodes','The One With…','Identify the episode',[
['Monica and Rachel lose their apartment to Chandler and Joey in a trivia game. Which episode?','The One with the Embryos','🎬','Name the episode'],
['Phoebe and Chandler try to make each other crack over Monica and Chandler’s secret relationship. Which episode?','The One Where Everybody Finds Out','👀','They know'],
['The gang recalls disastrous Thanksgivings: turkey-head Joey and Monica severing Chandler’s toe. Which episode?','The One with All the Thanksgivings','🦃','Thanksgiving flashback',1],
['Richard’s voicemail, the chair war and Phoebe’s hummus-stained dress happen in which episode?','The One Where No One’s Ready','🪑','The chair war'],
['Joey’s fake twin, forgotten Valentine’s gifts and Ross’s “total awareness” lesson happen in which episode?','The One with the Unagi','🐟⚡','UNAGI',1]]],
['7️⃣','theme-numbers','Seven! Seven! SEVEN!','Every answer is a number',[
['How many numbered erogenous zones does Monica identify for Chandler?','7','7️⃣','Seven! Seven! Seven!',1],
['How many pages was Rachel’s letter to Ross—front and back?','18 pages','📄📄','Front and back'],
['What number completes Chandler’s fake address: ___ Yemen Road, Yemen?','15','✈️','15 Yemen Road'],
['In the 50-state challenge, how many “states” does Joey claim to list?','56','🗺️','56 states?'],
['How much does the encyclopedia salesman quote Joey for the full set?','$1200','📚','$1200']]],
['🤫','theme-secrets','They Don’t Know That We Know','Secrets, lies & who knew what',[
['Phoebe and Rachel find a positive pregnancy test at Monica and Chandler’s wedding. Whose is it?','Rachel’s','🧪','The pregnancy test'],
['Who accidentally tells Rachel that Ross loves her while Ross is in China?','Chandler','✈️❤️','Ross is in China'],
['Ross lies that his Vegas marriage to Rachel was annulled. Which friend does he confess the truth to?','Phoebe','💒','Vegas marriage'],
['Rachel says Irene learned the backpacking story from a mysterious man. What name does he go by?','Ken Adams (Joey’s fake name)','🎒','Ken Adams',1],
['Put Joey, Rachel, Phoebe and Ross in the order they discover Monica and Chandler’s relationship.','Joey → Rachel → Phoebe → Ross','🔑👀','Who finds out when',1]]],
['🤯','theme-absurd','WAIT… That Actually Happened?!','Absurd plots & one-off chaos',[
['After marrying Mike, what ridiculous name does Phoebe legally change hers to?','Princess Consuela Banana-Hammock.','👑🍌','Princess Consuela Banana-Hammock'],
['On Pyramid, Joey keeps guessing three things for “It’s white.” Name all three.','Paper, snow, and a ghost.','🔺','Paper • Snow • Ghost'],
['In Joey’s old Japanese commercial, what product was he advertising?','Ichiban: Lipstick for Men.','💄🔵','Ichiban',1],
['Phoebe’s painting Gladys has an equally disturbing companion. What is it called?','Glynnis','🖼️😬','Gladys has a friend'],
['Two-part clue: After leaving Ben on a bus, Joey and Chandler must choose between babies wearing ducks or clowns. Which does Joey assign to heads, and why? AND when Monica dances with a turkey on her head, what two accessories does she add?','The baby wearing ducks—because “ducks have heads.” AND a Shriner’s hat and big yellow sunglasses.','🦆 + 🦃😎','Two-part chaos',1]]],
['📝','theme-personal','Miss Chanandler Bong','Who-knows-whom-best trivia',[
['What does Chandler’s middle initial “M” stand for?','Muriel','Ⓜ️','Chandler M. Bing'],
['What is Joey’s “bedtime penguin pal” called?','Hugsy','🐧💙','Hugsy',1],
['What was Monica’s nickname as a field-hockey goalie?','Big Fat Goalie','🏑🥅','Big Fat Goalie'],
['What was Ross’s homemade childhood superhero called?','Science Boy','🦸‍♂️🔬','Science Boy'],
['What is the name of Chandler’s father’s Las Vegas all-male burlesque show?','Viva Las Gaygas.','🎰✨','Viva Las Gaygas',1]]]
]}
];
const $=id=>document.getElementById(id), E={home:$('homeScreen'),game:$('gameScreen'),clue:$('clueScreen'),finale:$('finaleScreen'),start:$('startButton'),fresh:$('freshStartButton'),homeBtn:$('homeButton'),reset:$('resetButton'),b1:$('board1Tab'),b2:$('board2Tab'),title:$('boardTitle'),subtitle:$('boardSubtitle'),kicker:$('roundKicker'),prog:$('progressText'),pct:$('progressPercent'),bar:$('progressBar'),banner:$('completionBanner'),bannerTitle:$('completionTitle'),bannerCopy:$('completionCopy'),bannerAction:$('completionAction'),board:$('jeopardyBoard'),back:$('clueBackButton'),boardLabel:$('clueBoardLabel'),cat:$('clueCategory'),val:$('clueValue'),q:$('clueQuestion'),a:$('clueAnswer'),visual:$('clueVisual'),special:$('specialTag'),card:$('clueCard'),qs:$('questionStage'),as:$('answerStage'),reveal:$('revealButton'),ret:$('returnButton'),again:$('playAgainButton'),finalHome:$('finaleHomeButton'),dialog:$('resetDialog'),toast:$('toast'),soundHome:$('soundToggleHome'),soundGame:$('soundToggleGame')};
const load=()=>{try{let x=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');return{activeBoard:x.activeBoard===1?1:0,played:x.played||{},hasStarted:!!x.hasStarted,soundEnabled:x.soundEnabled!==false}}catch{return{activeBoard:0,played:{},hasStarted:false,soundEnabled:true}}};
const S=load();let active=null,ctx=null,toastTimer=null;
const save=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(S))}catch{}};
const key=(b,c,q)=>`${b}-${c}-${q}`;
const count=b=>B[b].cats.reduce((n,c,ci)=>n+c[4].reduce((m,_,qi)=>m+(S.played[key(b,ci,qi)]?1:0),0),0);
const all=()=>count(0)===25&&count(1)===25;
const screen=x=>{[E.home,E.game,E.clue,E.finale].forEach(y=>y.classList.add('hidden'));x.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})};
const syncSound=()=>{let on=S.soundEnabled;E.soundHome.textContent=on?'🔊 Sound on':'🔇 Sound off';E.soundGame.textContent=on?'🔊':'🔇';[E.soundHome,E.soundGame].forEach(x=>{x.setAttribute('aria-pressed',String(on));x.classList.toggle('muted',!on)})};
function audio(){if(!S.soundEnabled)return null;if(!ctx){let C=window.AudioContext||window.webkitAudioContext;if(!C)return null;ctx=new C()}if(ctx.state==='suspended')ctx.resume();return ctx}
function tone(t,f,d,type='triangle',g=.02){let c=audio();if(!c)return t;let o=c.createOscillator(),a=c.createGain();o.type=type;o.frequency.setValueAtTime(f,t);a.gain.setValueAtTime(.0001,t);a.gain.linearRampToValueAtTime(g,t+.01);a.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(a).connect(c.destination);o.start(t);o.stop(t+d+.02);return t+d}
function sound(n){let c=audio();if(!c)return;let t=c.currentTime+.01;if(n==='open'){t=tone(t,392,.07);tone(t,523,.09)}else if(n==='reveal'){t=tone(t,523,.07,'sine',.024);t=tone(t,659,.09,'sine',.024);tone(t,784,.16)}else if(n==='special'){[523,659,784,1047].forEach((f,i)=>tone(t+i*.07,f,.16,'triangle',.024))}else if(n==='done'){[523,659,784].forEach((f,i)=>tone(t+i*.08,f,.2,'triangle',.024))}else tone(t,420,.08,'sine',.018)}
function home(){let p=Object.keys(S.played).length;E.start.textContent=S.hasStarted||p?'Resume Game →':'Start the Game ✨';E.fresh.classList.toggle('hidden',!p);syncSound();screen(E.home)}
function board(b=S.activeBoard){S.activeBoard=b;S.hasStarted=true;save();let R=B[b],n=count(b),p=Math.round(n/25*100);E.kicker.textContent=R.kicker;E.title.textContent=R.title;E.subtitle.textContent=R.subtitle;E.prog.textContent=`${n} / 25 played`;E.pct.textContent=`${p}%`;E.bar.style.width=`${p}%`;E.b1.setAttribute('aria-selected',String(b===0));E.b2.setAttribute('aria-selected',String(b===1));E.board.replaceChildren();R.cats.forEach(c=>{let h=document.createElement('div');h.className='category-header';h.innerHTML=`<span class="emoji">${c[0]}</span><strong>${esc(c[2])}</strong><small>${esc(c[3])}</small>`;E.board.append(h)});VALUES.forEach((v,qi)=>R.cats.forEach((c,ci)=>{let k=key(b,ci,qi),used=!!S.played[k],x=document.createElement('button');x.type='button';x.className='clue-tile'+(used?' played':'');x.disabled=used;x.setAttribute('aria-label',`${c[2]}, $${v}${used?', played':''}`);x.innerHTML=used?'<span class="played-stamp"><b>✓</b> Played</span>':`<span>$${v}</span>`;x.onclick=()=>{sound('open');open(ci,qi)};E.board.append(x)}));E.banner.classList.toggle('hidden',n!==25);if(n===25){E.bannerTitle.textContent=`Board ${b+1} complete!`;E.bannerCopy.textContent=b===0?'Okay, that was the warm-up. Ready for the deep cuts?':'That was dangerously impressive Friends knowledge.';E.bannerAction.textContent=b===0?'Go to Board 2 →':all()?'Finish the Game ✨':'Back to Board 1';sound('done')}syncSound();screen(E.game)}
function open(ci,qi){let b=S.activeBoard,c=B[b].cats[ci],d=c[4][qi];active={b,ci,qi,d};E.card.className=`clue-card ${c[1]}`;E.cat.textContent=`${c[0]} ${c[2]}`;E.val.textContent=`$${VALUES[qi]}`;E.boardLabel.textContent=`Board ${b+1} · $${VALUES[qi]}`;E.q.textContent=d[0];E.a.textContent=d[1];E.special.classList.toggle('hidden',!d[4]);E.visual.innerHTML=`<div style="text-align:center"><div style="font-size:clamp(3rem,8vw,5.5rem);line-height:1">${d[2]}</div><div style="margin-top:12px;font-weight:900;color:#493858">${esc(d[3])}</div></div>`;E.qs.classList.remove('hidden');E.as.classList.add('hidden');screen(E.clue);E.reveal.focus({preventScroll:true})}
function spark(){let x=document.createElement('div');x.className='sparkle-burst';x.innerHTML='<span>✨</span><span>⭐</span><span>✨</span>';E.card.append(x);setTimeout(()=>x.remove(),1100)}
function reveal(){if(!active)return;S.played[key(active.b,active.ci,active.qi)]=true;save();E.qs.classList.add('hidden');E.as.classList.remove('hidden');if(active.d[4])spark();sound(active.d[4]?'special':'reveal');E.ret.focus({preventScroll:true})}
function back(){let b=active?active.b:S.activeBoard;active=null;sound('back');board(b)}
function reset(show=true){S.activeBoard=0;S.played={};S.hasStarted=show;active=null;save();toast('All clues are fresh again ✨');show?board(0):home()}
function toast(m){E.toast.textContent=m;E.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>E.toast.classList.remove('show'),2200)}
function finale(){screen(E.finale);confetti();sound('done')}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;let C=['#6f4b8b','#df7a42','#3f90a3','#d8524e','#d79b17'];for(let i=0;i<30;i++){let x=document.createElement('span');Object.assign(x.style,{position:'fixed',zIndex:30,top:'-18px',left:`${5+Math.random()*90}%`,width:`${6+Math.random()*7}px`,height:`${8+Math.random()*9}px`,background:C[i%C.length],pointerEvents:'none',transition:`transform ${1.1+Math.random()*.8}s ease-in, top ${1.1+Math.random()*.8}s ease-in, opacity .35s 1s`});document.body.append(x);requestAnimationFrame(()=>{x.style.top=`${70+Math.random()*25}%`;x.style.transform=`translateX(${(Math.random()-.5)*160}px) rotate(${360+Math.random()*500}deg)`;x.style.opacity=0});setTimeout(()=>x.remove(),2200)}}
function esc(t){let d=document.createElement('div');d.textContent=t;return d.innerHTML}
E.start.onclick=()=>{sound('open');board(S.activeBoard)};E.fresh.onclick=()=>reset(true);E.homeBtn.onclick=()=>{sound('back');home()};E.b1.onclick=()=>{sound('open');board(0)};E.b2.onclick=()=>{sound('open');board(1)};E.back.onclick=back;E.reveal.onclick=reveal;E.ret.onclick=back;E.again.onclick=()=>reset(true);E.finalHome.onclick=home;[E.soundHome,E.soundGame].forEach(x=>x.onclick=()=>{S.soundEnabled=!S.soundEnabled;save();syncSound();if(S.soundEnabled)sound('open')});E.bannerAction.onclick=()=>{sound('open');S.activeBoard===0?board(1):all()?finale():board(0)};E.reset.onclick=()=>typeof E.dialog.showModal==='function'?E.dialog.showModal():confirm('Reset all played clues?')&&reset(true);E.dialog.onclose=()=>E.dialog.returnValue==='confirm'&&reset(true);document.addEventListener('keydown',e=>{if(E.clue.classList.contains('hidden'))return;if(e.key==='Escape')back();if(e.key==='Enter'&&!E.qs.classList.contains('hidden'))reveal()});syncSound();home();
})();