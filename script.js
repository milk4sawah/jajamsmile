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
"If you two are gonna start an argument, could you do it without randomly hurting my feelings?",
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
"Even if it's said, it won't be understood."
  ];
  
  // Get the random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
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
  