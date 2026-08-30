(() => {
  'use strict';

  const VALUES = [200, 400, 600, 800, 1000];
  const STORAGE_KEY = 'vrinn-friends-jeopardy-v1';

  const boards = [
    {
      kicker: 'ROUND ONE',
      title: 'The One Everyone Thinks They Know 🛋️',
      subtitle: 'The One Everyone Thinks They Know',
      categories: [
        {
          emoji: '👕',
          title: 'Could I BE Wearing Any More Clothes?',
          short: 'Outfits, costumes & visual gags',
          clues: [
            { q: 'After Chandler hides his underwear, what does Joey wear as revenge?', a: 'All of Chandler’s clothes.' },
            { q: 'Ross can’t get his leather pants back on. Which two bathroom products does Joey suggest?', a: 'Powder and lotion.' },
            { q: 'Monica buys Chandler a giant pink bunny costume because of his favorite childhood book. Which book?', a: 'The Velveteen Rabbit.' },
            { q: 'At Monica and Chandler’s Halloween party, Ross combines a potato and a Soviet satellite into what costume?', a: 'Spud-nik.' },
            { q: 'After their breakup, Ross demands back Rachel’s favorite sleep T-shirt. What three words are printed on it?', a: '“Frankie Say Relax.”' }
          ]
        },
        {
          emoji: '💔',
          title: 'We Were on a Break!',
          short: 'Romance, dates & disasters',
          clues: [
            { q: 'At his wedding to Emily, whose name does Ross accidentally say?', a: 'Rachel.' },
            { q: 'Chandler hooks up with one of Joey’s seven sisters but forgets which one. Who was she?', a: 'Mary-Angela.' },
            { q: 'Phoebe dates Jason and Vince at the same time. What are their professions?', a: 'A kindergarten teacher and a firefighter.' },
            { q: 'Phoebe moves in with Gary, but it lasts one night. What does he do the next morning?', a: 'He shoots a bird chirping outside their bedroom window.' },
            { q: 'Monica and Ethan both lie about their ages. What does each claim, and what is the truth?', a: 'Monica says she is 22 but is 26; Ethan says he is a college senior but is actually a high-school senior.' }
          ]
        },
        {
          emoji: '😱',
          title: 'Oh. My. God.',
          short: 'Supporting & recurring characters',
          clues: [
            { q: 'Which Central Perk employee spends years secretly in love with Rachel?', a: 'Gunther.' },
            { q: 'Which downstairs neighbor leaves everything to “the noisy girls upstairs”?', a: 'Mr. Heckles.' },
            { q: 'Which short-lived Chandler roommate watches him sleep and replaces a dead fish with a Goldfish cracker?', a: 'Eddie.' },
            { q: 'Which former high-school heartthrob later dates Monica but still lives with his parents?', a: 'Chip Matthews.' },
            { q: 'In Janice’s final appearance, what full name does Chandler dramatically call her?', a: 'Janice Litman-Goralnik, née Hosenstein.' }
          ]
        },
        {
          emoji: '💬',
          title: 'Who Said It… and What Did They Say?',
          short: 'Quotes, speakers & missing lines',
          clues: [
            { q: 'Who says it, and finish the line: “I’m not great at the advice. Can I interest you in a ____?”', a: 'Chandler — “sarcastic comment.”' },
            { q: 'Who says it, and finish the line: “It’s like a cow’s opinion. It just ______.”', a: 'Joey — “doesn’t matter. It’s moo.”' },
            { q: 'Who says it, and complete: “Isn’t that just kick-you-in-the-crotch, spit-on-your-neck, ______?”', a: 'Rachel — “fantastic.”' },
            { q: 'Complete Joey’s response: “You don’t own a TV? What’s all your ______?”', a: '“Furniture pointed at?”' },
            { q: 'At Thanksgiving, Monica fires back with one embarrassing fact about each of her five friends. Name all five.', a: 'Ross married a lesbian; Rachel left a man at the altar; Phoebe fell in love with a gay ice dancer; Joey threw a girl’s wooden leg in the fire; Chandler lives in a box.' }
          ]
        },
        {
          emoji: '🍕',
          title: 'Joey Doesn’t Share Food!',
          short: 'Food, cooking & eating moments',
          clues: [
            { q: 'Rachel’s trifle combines dessert with what savory filling from the stuck cookbook pages?', a: 'Beef sautéed with peas and onions.' },
            { q: 'What exactly is the “Moist Maker” in Ross’s Thanksgiving sandwich?', a: 'An extra slice of gravy-soaked bread in the middle.' },
            { q: 'Rachel and Chandler steal a misdelivered cheesecake. Name the bakery or its city.', a: 'Momma’s Little Bakery — Chicago, Illinois.' },
            { q: 'During the police ride-along, Joey dives over Ross during a “gunshot.” What was he really protecting?', a: 'His meatball sandwich.' },
            { q: 'On the “JOEY DOESN’T SHARE FOOD!” date, what dessert does Joey order, and which of Sarah’s desserts does he eat?', a: 'Joey orders cheesecake; Sarah orders chocolate torte, which Joey ultimately eats.' }
          ]
        }
      ]
    },
    {
      kicker: 'ROUND TWO',
      title: 'The One for the Real Fans ☕',
      subtitle: 'The One for the Real Fans',
      categories: [
        {
          emoji: '🎬',
          title: 'The One With…',
          short: 'Identify the episode',
          clues: [
            { q: 'Monica and Rachel lose their apartment to Chandler and Joey in a trivia game. Which episode?', a: 'The One with the Embryos.' },
            { q: 'Phoebe and Chandler try to make each other crack over Monica and Chandler’s secret relationship. Which episode?', a: 'The One Where Everybody Finds Out.' },
            { q: 'The gang recalls disastrous Thanksgivings: turkey-head Joey and Monica severing Chandler’s toe. Which episode?', a: 'The One with All the Thanksgivings.' },
            { q: 'Richard’s voicemail, the chair war and Phoebe’s hummus-stained dress happen in which episode?', a: 'The One Where No One’s Ready.' },
            { q: 'Joey’s fake twin, forgotten Valentine’s gifts and Ross’s “total awareness” lesson happen in which episode?', a: 'The One with Unagi.' }
          ]
        },
        {
          emoji: '7️⃣',
          title: 'Seven! Seven! SEVEN!',
          short: 'Every answer is a number',
          clues: [
            { q: 'How many numbered erogenous zones does Monica identify for Chandler?', a: '7.' },
            { q: 'How many pages was Rachel’s letter to Ross — front and back?', a: '18 pages.' },
            { q: 'What number completes Chandler’s fake address: ___ Yemen Road, Yemen?', a: '15.' },
            { q: 'In the 50-state challenge, how many “states” does Joey claim to list?', a: '56.' },
            { q: 'How much does the encyclopedia salesman quote Joey for the full set?', a: '$1,200.' }
          ]
        },
        {
          emoji: '🤫',
          title: 'They Don’t Know That We Know',
          short: 'Secrets, lies & who knew what',
          clues: [
            { q: 'Phoebe and Rachel find a positive pregnancy test at Monica and Chandler’s wedding. Whose is it?', a: 'Rachel’s.' },
            { q: 'Who accidentally tells Rachel that Ross loves her while Ross is in China?', a: 'Chandler.' },
            { q: 'Ross lies that his Vegas marriage to Rachel was annulled. Which friend does he confess the truth to?', a: 'Phoebe.' },
            { q: 'Rachel says Irene learned the backpacking story from a mysterious man. What name does he go by?', a: 'Ken Adams.' },
            { q: 'Put Joey, Rachel, Phoebe and Ross in the order they discover Monica and Chandler’s relationship.', a: 'Joey → Rachel → Phoebe → Ross.' }
          ]
        },
        {
          emoji: '🤯',
          title: 'WAIT… That Actually Happened?!',
          short: 'Absurd plots & one-off chaos',
          clues: [
            { q: 'Ross’s spray tan goes spectacularly wrong because he counts to five using what extra word?', a: '“Mississippi.”' },
            { q: 'On Pyramid, Joey keeps guessing three things for “It’s white.” Name all three.', a: 'Paper, snow and a ghost.' },
            { q: 'In Joey’s old Japanese commercial, what product was he advertising?', a: 'Ichiban: Lipstick for Men.' },
            { q: 'Ross and Chandler sabotage their college alumni profiles until Chandler announces Ross has died. According to the post, what killed him?', a: 'He was hit by a blimp.' },
            { q: 'After leaving Ben on a bus, Joey and Chandler must choose between babies wearing ducks or clowns. Which does Joey assign to heads, and why?', a: 'The baby wearing ducks — because “ducks have heads.”' }
          ]
        },
        {
          emoji: '📝',
          title: 'Miss Chanandler Bong',
          short: 'Who-knows-whom-best trivia',
          clues: [
            { q: 'What does Chandler’s middle initial “M” stand for?', a: 'Muriel.' },
            { q: 'What is Joey’s “bedtime penguin pal” called?', a: 'Hugsy.' },
            { q: 'What was Monica’s nickname as a field-hockey goalie?', a: 'Big Fat Goalie.' },
            { q: 'What was Ross’s homemade childhood superhero called?', a: 'Science Boy.' },
            { q: 'What is the name of Chandler’s father’s Las Vegas all-male burlesque show?', a: 'Viva Las Gaygas.' }
          ]
        }
      ]
    }
  ];

  const els = {
    homeScreen: document.getElementById('homeScreen'),
    gameScreen: document.getElementById('gameScreen'),
    clueScreen: document.getElementById('clueScreen'),
    finaleScreen: document.getElementById('finaleScreen'),
    startButton: document.getElementById('startButton'),
    freshStartButton: document.getElementById('freshStartButton'),
    homeButton: document.getElementById('homeButton'),
    resetButton: document.getElementById('resetButton'),
    board1Tab: document.getElementById('board1Tab'),
    board2Tab: document.getElementById('board2Tab'),
    boardTitle: document.getElementById('boardTitle'),
    boardSubtitle: document.getElementById('boardSubtitle'),
    roundKicker: document.getElementById('roundKicker'),
    progressText: document.getElementById('progressText'),
    progressPercent: document.getElementById('progressPercent'),
    progressBar: document.getElementById('progressBar'),
    completionBanner: document.getElementById('completionBanner'),
    completionTitle: document.getElementById('completionTitle'),
    completionCopy: document.getElementById('completionCopy'),
    completionAction: document.getElementById('completionAction'),
    jeopardyBoard: document.getElementById('jeopardyBoard'),
    clueBackButton: document.getElementById('clueBackButton'),
    clueBoardLabel: document.getElementById('clueBoardLabel'),
    clueCategory: document.getElementById('clueCategory'),
    clueValue: document.getElementById('clueValue'),
    clueQuestion: document.getElementById('clueQuestion'),
    clueAnswer: document.getElementById('clueAnswer'),
    answerNote: document.getElementById('answerNote'),
    questionStage: document.getElementById('questionStage'),
    answerStage: document.getElementById('answerStage'),
    revealButton: document.getElementById('revealButton'),
    returnButton: document.getElementById('returnButton'),
    playAgainButton: document.getElementById('playAgainButton'),
    finaleHomeButton: document.getElementById('finaleHomeButton'),
    resetDialog: document.getElementById('resetDialog'),
    toast: document.getElementById('toast')
  };

  const state = loadState();
  let activeClue = null;
  let toastTimer = null;

  function blankState() {
    return { activeBoard: 0, played: {}, hasStarted: false };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return blankState();
      const parsed = JSON.parse(raw);
      return {
        activeBoard: parsed.activeBoard === 1 ? 1 : 0,
        played: parsed.played && typeof parsed.played === 'object' ? parsed.played : {},
        hasStarted: Boolean(parsed.hasStarted)
      };
    } catch {
      return blankState();
    }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* no-op */ }
  }

  function clueKey(boardIndex, categoryIndex, clueIndex) {
    return `${boardIndex}-${categoryIndex}-${clueIndex}`;
  }

  function playedCount(boardIndex) {
    let count = 0;
    boards[boardIndex].categories.forEach((category, ci) => {
      category.clues.forEach((_, qi) => {
        if (state.played[clueKey(boardIndex, ci, qi)]) count += 1;
      });
    });
    return count;
  }

  function allComplete() {
    return playedCount(0) === 25 && playedCount(1) === 25;
  }

  function showScreen(target) {
    [els.homeScreen, els.gameScreen, els.clueScreen, els.finaleScreen].forEach(el => el.classList.add('hidden'));
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderHome() {
    const anyPlayed = Object.keys(state.played).length > 0;
    els.startButton.textContent = state.hasStarted || anyPlayed ? 'Resume Game →' : 'Start the Game ✨';
    els.freshStartButton.classList.toggle('hidden', !anyPlayed);
    showScreen(els.homeScreen);
  }

  function renderBoard(boardIndex = state.activeBoard) {
    state.activeBoard = boardIndex;
    state.hasStarted = true;
    saveState();

    const board = boards[boardIndex];
    const count = playedCount(boardIndex);
    const percent = Math.round((count / 25) * 100);

    els.roundKicker.textContent = board.kicker;
    els.boardTitle.textContent = board.title;
    els.boardSubtitle.textContent = board.subtitle;
    els.progressText.textContent = `${count} / 25 played`;
    els.progressPercent.textContent = `${percent}%`;
    els.progressBar.style.width = `${percent}%`;
    els.board1Tab.setAttribute('aria-selected', String(boardIndex === 0));
    els.board2Tab.setAttribute('aria-selected', String(boardIndex === 1));

    els.jeopardyBoard.replaceChildren();

    board.categories.forEach(category => {
      const header = document.createElement('div');
      header.className = 'category-header';
      header.innerHTML = `<span class="emoji" aria-hidden="true">${category.emoji}</span><strong>${escapeHtml(category.title)}</strong><small>${escapeHtml(category.short)}</small>`;
      els.jeopardyBoard.appendChild(header);
    });

    VALUES.forEach((value, clueIndex) => {
      board.categories.forEach((category, categoryIndex) => {
        const key = clueKey(boardIndex, categoryIndex, clueIndex);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `clue-tile${state.played[key] ? ' played' : ''}`;
        button.dataset.category = String(categoryIndex);
        button.dataset.clue = String(clueIndex);
        button.setAttribute('aria-label', `${category.title}, $${value}${state.played[key] ? ', played' : ''}`);
        button.disabled = Boolean(state.played[key]);
        button.innerHTML = `<span>$${value}</span>`;
        button.addEventListener('click', () => openClue(categoryIndex, clueIndex));
        els.jeopardyBoard.appendChild(button);
      });
    });

    if (count === 25) {
      els.completionBanner.classList.remove('hidden');
      if (boardIndex === 0) {
        els.completionTitle.textContent = 'Board 1 complete!';
        els.completionCopy.textContent = 'Okay, that was the warm-up. Ready for the deep cuts?';
        els.completionAction.textContent = 'Go to Board 2 →';
      } else {
        els.completionTitle.textContent = 'Board 2 complete!';
        els.completionCopy.textContent = 'That was dangerously impressive Friends knowledge.';
        els.completionAction.textContent = allComplete() ? 'Finish the Game ✨' : 'Back to Board 1';
      }
    } else {
      els.completionBanner.classList.add('hidden');
    }

    showScreen(els.gameScreen);
  }

  function openClue(categoryIndex, clueIndex) {
    const boardIndex = state.activeBoard;
    const category = boards[boardIndex].categories[categoryIndex];
    const clue = category.clues[clueIndex];
    const value = VALUES[clueIndex];

    activeClue = { boardIndex, categoryIndex, clueIndex };
    els.clueCategory.textContent = `${category.emoji} ${category.title}`;
    els.clueValue.textContent = `$${value}`;
    els.clueBoardLabel.textContent = `Board ${boardIndex + 1} · ${value}`;
    els.clueQuestion.textContent = clue.q;
    els.clueAnswer.textContent = clue.a;
    els.answerNote.textContent = answerReaction(value);
    els.questionStage.classList.remove('hidden');
    els.answerStage.classList.add('hidden');
    showScreen(els.clueScreen);
    els.revealButton.focus({ preventScroll: true });
  }

  function answerReaction(value) {
    if (value <= 200) return 'A nice little confidence boost. 😌';
    if (value <= 400) return 'Okayyy, you know your stuff. 👏';
    if (value <= 600) return 'Strong fan territory. ☕';
    if (value <= 800) return 'That was a proper deep cut. 🔍';
    return 'HOW did you remember that?! 🏆';
  }

  function revealAnswer() {
    if (!activeClue) return;
    const { boardIndex, categoryIndex, clueIndex } = activeClue;
    state.played[clueKey(boardIndex, categoryIndex, clueIndex)] = true;
    saveState();
    els.questionStage.classList.add('hidden');
    els.answerStage.classList.remove('hidden');
    els.returnButton.focus({ preventScroll: true });
  }

  function returnFromClue() {
    const returnBoard = activeClue ? activeClue.boardIndex : state.activeBoard;
    activeClue = null;
    renderBoard(returnBoard);
  }

  function resetGame(showBoardAfter = false) {
    state.activeBoard = 0;
    state.played = {};
    state.hasStarted = showBoardAfter;
    activeClue = null;
    saveState();
    showToast('All clues are fresh again ✨');
    if (showBoardAfter) renderBoard(0); else renderHome();
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
  }

  function showFinale() {
    showScreen(els.finaleScreen);
    sprinkleConfetti();
  }

  function sprinkleConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#6f4b8b', '#df7a42', '#3f90a3', '#d8524e', '#d79b17'];
    for (let i = 0; i < 26; i += 1) {
      const bit = document.createElement('span');
      bit.setAttribute('aria-hidden', 'true');
      bit.style.position = 'fixed';
      bit.style.zIndex = '20';
      bit.style.top = '-18px';
      bit.style.left = `${5 + Math.random() * 90}%`;
      bit.style.width = `${6 + Math.random() * 7}px`;
      bit.style.height = `${8 + Math.random() * 9}px`;
      bit.style.borderRadius = '2px';
      bit.style.pointerEvents = 'none';
      bit.style.background = colors[i % colors.length];
      bit.style.transform = `rotate(${Math.random() * 180}deg)`;
      bit.style.transition = `transform ${1.1 + Math.random() * .9}s ease-in, top ${1.1 + Math.random() * .9}s ease-in, opacity .35s ${.9 + Math.random() * .5}s`;
      document.body.appendChild(bit);
      requestAnimationFrame(() => {
        bit.style.top = `${70 + Math.random() * 26}%`;
        bit.style.transform = `translateX(${(Math.random() - .5) * 160}px) rotate(${360 + Math.random() * 540}deg)`;
        bit.style.opacity = '0';
      });
      setTimeout(() => bit.remove(), 2200);
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  els.startButton.addEventListener('click', () => renderBoard(state.activeBoard));
  els.freshStartButton.addEventListener('click', () => resetGame(true));
  els.homeButton.addEventListener('click', renderHome);
  els.board1Tab.addEventListener('click', () => renderBoard(0));
  els.board2Tab.addEventListener('click', () => renderBoard(1));
  els.clueBackButton.addEventListener('click', returnFromClue);
  els.revealButton.addEventListener('click', revealAnswer);
  els.returnButton.addEventListener('click', returnFromClue);
  els.playAgainButton.addEventListener('click', () => resetGame(true));
  els.finaleHomeButton.addEventListener('click', renderHome);

  els.completionAction.addEventListener('click', () => {
    if (state.activeBoard === 0) renderBoard(1);
    else if (allComplete()) showFinale();
    else renderBoard(0);
  });

  els.resetButton.addEventListener('click', () => {
    if (typeof els.resetDialog.showModal === 'function') els.resetDialog.showModal();
    else if (window.confirm('Reset all played clues?')) resetGame(true);
  });

  els.resetDialog.addEventListener('close', () => {
    if (els.resetDialog.returnValue === 'confirm') resetGame(true);
  });

  document.addEventListener('keydown', event => {
    if (els.clueScreen.classList.contains('hidden')) return;
    if (event.key === 'Escape') returnFromClue();
    if (event.key === 'Enter' && !els.questionStage.classList.contains('hidden')) revealAnswer();
  });

  renderHome();
})();
