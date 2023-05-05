// Define an array of quotes
const quotes = [
"Fake friends are like shadows. They follow you in the sun. But leave you in the dark.",
"If to be truthful is to be cruel, then lying must surely be an act of kindness. And so, kindness is a lie.",
"If the truth is a cruel mistress, then a lie must be a nice girl.",
"There are things that cannot be taken back. But the world will keep on spinning whether you laugh or you cry.",
"There's no way to make things convenient for everyone. So the only option is to find a compromise.",
"No one does wrong to another just for the pleasure of doing wrong. Wrong is done with the object of gaining some benefit or advantage to wrongdoer.",
"Everyone has something they hold dear, something they never want to lose. That's why they pretend. That's why they hide the truth. And that's why they lie.",
"Food tastes best when you don't have to work for it.",
"Frankly being nice is as this guy is almost like a mental illness in itself.",
"I don't want other people to mention my 'self'. Besides if I can be changed with a few words, then that wouldn't be my 'self' would it?",
"School trips are simply a simulation of adult social life.",
"If there are things you learn with friends, there must also be things you learn without friends. They must be of equal worth. Two sides of the same coin.",
"Fake people have image to maintain, real people just don't care.",
"Everyone is a slave to their past. No matter how much you wish to move forward, the events of last year will bear down on you like the light of the stars as soon as you glance up.",
"There are people who ruin the atmosphere just by existing, you know.",
"There was no meaning to things that were only superficial. That was a single belief that both me and her once shared.",
"Forcing yourself to like something you don't like brings sorrow.",
"Unable to laugh or to banish your past, you carry it ceaselessly in a corner of your heart, waiting for it to resurrect at an inopportune moment.",
"In this world, the pursuit of dreams leads to a life so painful and frustrating the mere thought of it is enough to merit a sigh.",
"Even if it's said, it won't be understood.",
"I don't think ignorance is necessarily a bad thing. The more you know, the more problems you have.",
"As a veteran on this battlefield of life, I've gotten used to losing. That's why I always hate nice girls.",
"The past makes you wanna die out of regret and future make you depressed out of anxiety. So by elimination, the present is likely the happiest time.",
"There are no inherently bad people. Everyone believes that myself included.",
"Excuses are meaningless. The tougher things get, the more likely people are to come to their own conclusions.",
"People will rationalize their own behavior whenever they become tainted with evil; they're not supposed to be evil. In order to preserve their own twisted integrity, the world becomes twisted.",
"Someone you praised as 'cool' until yesterday is 'stuck up' today; someone you respected as 'smart and knowledgeable' is now scorned as someone who 'looks down on bad students', and 'energetic vigor' becomes 'annoying and overly carried away'.",
"They say if you change yourself, you'll change the world, but that's a complete lie.",
"Guys are simple creatures. Just by talking to them, they get the wrong idea.",
"Advocating equality is my principle. So it's just that I don't want to be particularly close to anyone.",
"Your unconditional trust is more than I'm willing to bear.",
"Marriage is a life cemetery. All married people without exception will proudly boast the benefits of marriage.",
"This is the great import of curse that the whole world is sick, and not apart. Conterminous with its own universe the horror of my heart!",
"A problem's not a problem as long as nobody sees it as one.",
"The world will not change but you can change yourself, so then how will you change? Answer: You become the god of the new world.",
"If you had to sacrifice many things to protect one, you're more likely to give up and throw it away. Including relationships, you have in your hand now.",
"I'm not highly aware. I'm highly self-aware.",
"The Devil's finest trick is to persuade you that he does not exist.",
"When people judge somebody, it becomes a fixed idea and an impression that lasts.",
"Youth is both a lie and a form of evil.",
"I don't doubt the existence of virtue. And yet people bare their fangs when it seems they can profit.",
"Expecting others to read your mind is delusional.",
"Don't put me on their level. I don't care about looking interesting. I am just self-conscious.",
"I am super thoughtful, That's why I stay in the corner and don't cause any trouble.",
"When a person loses their sense of belonging, they want someone else to hand it back to them on a platter.",
"It is better to be hated for what you are. Than to be loved for what you are not.",
"It doesn't matter if we're wrong...because every time we go wrong, we'll continue to look for the right answer.",
"When you pick the only option you have to choose from, can you really call that your own decision?",
"Having people acknowledge your existence is a wonderful thing.",
"Is it wrong to do stuff by yourself? If someone worked hard on their own until now, why do they have to face rejection here?",
"If you can't get along without putting someone else down, it can't be real friendship.",
 
  ];
  
// Keep track of the indices of the quotes that have already been selected
let selectedQuoteIndices = [];

// Get a random quote that hasn't been selected before
function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (selectedQuoteIndices.includes(randomIndex));
  selectedQuoteIndices.push(randomIndex);
  if (selectedQuoteIndices.length === quotes.length) {
    // Reset the selectedQuoteIndices array if all quotes have been selected
    selectedQuoteIndices = [];
  }
  return quotes[randomIndex];
}

// Set the initial quote
let currentQuote = getRandomQuote();
document.getElementById("random-text").innerHTML = currentQuote;

// Add a click event listener to the button
document.getElementById("quote-button").addEventListener("click", function() {
  currentQuote = getRandomQuote();
  document.getElementById("random-text").innerHTML = currentQuote;
});

// Update the time and date every second
function updateTime() {
  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const date = now.toLocaleDateString('en-US', { timeZone: 'Asia/Singapore' });
  const time = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore' });
  document.getElementById("datetime").innerHTML = `Today is <strong>${dayOfWeek}</strong>, it is currently <strong>${time}</strong>`;
}

setInterval(updateTime, 1000);