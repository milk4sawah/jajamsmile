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
"I think; therefore I am.",
"If you are depressed you are living in the past, if you are anxious you are living in the future. If you are at peace, you are living in the present." ,
"Philosophy is a battle against the bewitchment of our intelligence by means of language.",
"The more you know, the more you know you don’t know.",
"I only know one thing, and that is I know nothing.",
"All that is necessary for the triumph of evil is that good men do nothing.",
"All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else.",
"Do not let the behavior of others destroy your inner peace.",
"A journey of a thousand miles begins with a single step.",
"A man who has committed a mistake and doesn’t correct it, is committing another mistake.",
"Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.",
"Good can exist without evil, whereas evil cannot exist without good.",
"Good and evil, reward and punishment, are the only motives to a rational creature.",
"If I cannot do great things, I can do small things in a great way.",
"Is man merely a mistake of God’s? Or God merely a mistake of man’s?.",
"It does not do to dwell on dreams and forget to live.",
"It does not matter how slowly you go, as long as you do not stop.",
"It is absurd and disgraceful to live magnificently and luxuriously when so many are hungry.",
"It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed more superficial views; for these also contributed something, by developing before us the powers of thought.",
"It is not enough to have a good mind; the main thing is to use it well.",
"It is one thing to show a man that he is in error, and another to put him in possession of truth.",
"It is undesirable to believe a proposition when there is no ground whatever for supposing it true.",
"It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"Looking at small advantages prevents great affairs from being accomplished.",
"Nature is beautiful because it looks like Art; and Art can only be called beautiful if we are conscious of it as Art while yet it looks like Nature.",
"Never form a friendship with a man who is not better than you.",
"People are like dirt. They can either nourish you and help you grow as a person or they can stunt your growth and make you wilt and die.",
"The aim of art is to represent not the outward appearance of things, but their inward significance.",
"The more man meditates upon good thoughts, the better will be his world and the world at large.",
"The world of reality has its limits; the world of imagination is boundless.",
"Things alter for the worse spontaneously, if they be not altered for the better designedly.",
"To be satisfied with a little, is the greatest wisdom; and he that increaseth his riches, increaseth his care; but a contented mind is a hidden treasure, and trouble findeth it not.",
"To know what people really think, pay regard to what they do rather than what they say.",
"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
"We do not describe the world we see. We see the world we can describe.",
"When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.",
"You can discover more about a person in an hour of play than in a year of conversation.",
"Dare to know! Have the courage to use your own intelligence.",
"Eyes and ears are poor witnesses to people if they have uncultured souls.",
"Freedom is secured not by the fulfilling of one’s desires, but by the removal of desire.",
"He who thinks great thoughts, often makes great errors.",
"I can control my passions and emotions if I can understand their nature.",
"If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.",
"It is hard to contend against one’s heart’s desire; for whatever it wishes to have it buys at the cost of soul.",
"Man is born free, but is everywhere in chains.",
"Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck.",
"My heart is at ease knowing that what was meant for me will never miss me, and that what misses me was never meant for me.",
"Persuasion is achieved by the speaker’s personal character when the speech is spoken as to make us think him credible.",
"Religion is the sign of the oppressed … it is the opium of the people.",
"The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.",
"The way to gain a good reputation is to endeavor to be what you desire to appear.",
"The wealth required by nature is limited and is easy to procure; but the wealth required by vain ideals extends to infinity.",
"This fire that we call Loving is too strong for human minds. But just right for human souls.",
"To live is the rarest thing in the world. Most people exist, that is all.",
"When we are tired, we are attacked by ideas we conquered long ago.",
"When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bonds.",
"When you learn to survive without anyone, you can survive anything.",
"You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
"Cowards die many times before their deaths; the valiant never taste of death but once.",
"A ‘no’ uttered from deepest conviction is better than a ‘yes’ merely uttered to please, or worse, to avoid trouble.",
"Don’t bend; don’t water it down; don’t try to make it logical; don’t edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
"Suffering becomes beautiful when anyone bears great calamities with cheerfulness, not through insensibility but through greatness of mind.",
"The brave man is he who overcomes not only his enemies but his pleasures.",
"The greatest weapon against stress is our ability to choose one thought over another.",
"A day without laughter is a day wasted.",
"All is for the best in the best of all possible worlds.",
"An ounce of action is worth a ton of theory.",
"Art is not what you see, but what you make others see.",
"Better to be wise by the misfortunes of others than by your own.",
"Do not say a little in many words but a great deal in few.",
"Entities should not be multiplied unnecessarily.",
"In everything, there is a share of everything.",
"If you hate a person, then you’re defeated by them.",
"It’s strange how simple things become, once you see them clearly.",
"Liberty consists in doing what one desires.",
"Leisure is the mother of philosophy.",
"Man is the measure of all things.",
"Man is condemned to be free." ,
"No one that encounters prosperity does not also encounter danger.",
"One cannot step twice in the same river.",
"Out of the fullness of the heart, the mouth speaks.",
"Reason has always existed, but not always in a reasonable form.",
"The mind is furnished with ideas by experience alone.",
"The past has no power over the present moment.",
"Virtue is nothing else than right reason.",
"We are too weak to discover the truth by reason alone.",
"We live in the best of all possible worlds.",
"When anger arises, think of the consequences.",
"Whatever is reasonable is true, and whatever is true is reasonable.",
"What is rational is actual and what is actual is rational.",
"Wherever you go, go with all your heart.",
"Whereof one cannot speak, thereof one must be silent.",
"You only live once, but if you do it right, once is enough.",
"You only learn when you give your whole being to something.",
"The art of living is more like wrestling than dancing.",
"The greater the difficulty, the more glory in surmounting it.",
"If they spit at you behind your back it means you’re ahead of them.",
"No man ever steps in the same river twice, for it’s not the same river and he’s not the same man.",
"Prejudices are what fools use for reason.",
"Science is what you know. Philosophy is what you don’t know.",
"That man is wisest who, like Socrates, realizes that his wisdom is worthless.",
"The superior man is distressed by the limitations of his ability; he is not distressed by the fact that men do not recognize the ability that he has.",
"There are two things a person should never be angry at, what they can help, and what they cannot.",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"To be an Instagram model, you absolutely cannot just post pictures of yourself in a bikini for the sake of people seeing you in a bikini – even if that is exactly what you are doing. No, you need to caption these photos with an inspirational quote so that people will know that you are not just a butt, you’re a gosh dang philosopher.",
"By all means, marry. If you get a good wife, you’ll become happy; if you get a bad one, you’ll become a philosopher.",
"Even while they teach, men learn.",
"Education is the most powerful weapon which you can use to change the world.",
"Good teaching is one-fourth preparation and three-fourths pure theatre.",
"Learning without thought is labor lost; thought without learning is perilous.",
"If you use a philosophy education well, you can get your foot in the door of any industry you please. Industries are like the blossoms on a tree while philosophy is the trunk – it holds the tree together, but it often goes unnoticed.",
"Human history becomes more and more a race between education and catastrophe.",
"A fool’s brain digests philosophy into folly, science into superstition, and art into pedantry. Hence University education.",
"The art of teaching is the art of assisting discovery.",
"The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
"A teacher who is attempting to teach without inspiring the pupil with a desire to learn is hammering on cold iron.",
"Educating the mind without educating the heart is no education at all.",
"Who dares to teach must never cease to learn.",
"What sculpture is to a block of marble, education is to the human soul.",
"Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know and be imbued with a lifelong desire to know it.",
"Governments have never learned anything from history, or acted on principles deducted from it.",
"It is a very grave mistake to think that the enjoyment of seeing and searching can be promoted by means of coercion and a sense of duty.",
"There is only one good, knowledge, and one evil, ignorance.",
"No man’s knowledge here can go beyond his experience.",
"Give instructions only to those people who seek knowledge after they have discovered their ignorance.",
"A room without books is like a body without a soul.",
"Absorb what is useful, discard what is not, add what is uniquely your own.",
"When you start looking at people’s hearts instead of their faces, life becomes clear.",
"What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.",
"True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.",
"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
"The more sand had escaped from the hourglass of our life, the clearer we should see through it.",
"The greatest discovery of any generation is that a human can alter his life by altering his attitude.",
"Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
"May you live every day of your life.",
"Life without experience and sufferings is not life.",
"Life must be understood backward. But it must be lived forward .",
"Life is too deep for words, so don’t try to describe it, just live it.",
"Life is pretty simple: You do some stuff. Most fails. Some works. You do more of what works. If it works big, others quickly copy it. Then you do something else. The trick is in doing something else.",
"Life is not a problem to be solved but a reality to be experienced.",
"Life is like a piano. What you get out of it depends on how you play it.",
"It’s strange that they fear death. Life hurts a lot more than death.",
"If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.",
"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
"Although you may spend your life killing, you will not exhaust all your foes. But if you quell your own anger, your real enemy will be slain.",
"A hungry stomach, an empty wallet and a broken heart can teach you the best lessons of life.",
"Everything that exists is born for no reason, carries on living through weakness, and dies by accident.",
"Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed to develop good character.",
"Anyone can become angry – that is easy, but to be angry with the right person at the right time, and for the right purpose and in the right way – that is not within everyone’s power and that is not easy.",
"If we take eternity to mean not infinite temporal duration but timelessness, then eternal life belongs to those who live in the present.",
"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…",
"There is always some madness in love. But there is also always some reason in madness.",
"The madness of love the greatest of heaven’s blessings.",
"One word frees us of all the weight and pain in life, that word is Love.",
"One is loved because one is loved. No reason is needed for loving.",
"Love is simply the name for the desire and pursuit of the whole.",
"Love is composed of a single soul inhabiting two bodies.",
"Love is born into every human being; it calls back the halves of our original nature together; it tries to make one out of two and heal the wound of human nature.",
"Love is a canvas furnished by nature and embroidered by imagination.",
"Love all, trust a few, do wrong to none.",
"In dreams and in love there are no impossibilities.",
"Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.",
"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
"At the touch of love everyone becomes a poet.",
"Of what use is a philosopher who doesn’t hurt anybody’s feelings?",
"When you are offended at any man’s fault, turn to yourself and study your own failings. Then you will forget your anger.",
"What the superior man seeks is in himself; what the small man seeks is in others.",
"Waking up to who you are requires letting go of who you imagine yourself to be.",
"To do as one would be done by, and to love one’s neighbor as oneself, constitute the ideal perfection of utilitarian morality.",
"Life isn’t about finding yourself. Life is about creating yourself.",
"I make myself rich by making my wants few.",
"He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.",
"He who conquers himself is the mightiest warrior.",
"For a man to conquer himself is the first and noblest of all victories.",
"First say to yourself what would you be; and then do what you need to do.",
"Conquer yourself rather than the world.",
"Art and love are the same thing: It’s the process of seeing yourself in things that are not you.",
"Apply yourself both now and in the next life. Without effort, you cannot be prosperous. Though the land be good, you cannot have an abundant crop without cultivation.",
"I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves.",
"I would never die for my beliefs because I might be wrong.",
"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
"No valid plans for the future can be made can be made by those who have no capacity for living now.",
"Art enables us to find ourselves and lose ourselves at the same time.",
"The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
"The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
"The ones who are crazy enough to think that they can change the world, are the ones who do.",
"The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
"Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it.",
"If you realize that all things change, there is nothing you will try to hold on to.",
"Change your life today. Don’t gamble on the future, act now, without delay.",
"Any form of art is a form of power; it has impact, it can affect change – it can not only move us, it makes us move.",
"Every child is an artist. The problem is how to remain an artist once he grows up.",
"Why should we build our happiness on the opinions of others, when we can find it in our own hearts?",
"Those who intend on becoming great should love neither themselves nor their own things, but only what is just, whether it happens to be done by themselves or others.",
"There can be no happiness if the things we believe in are different from the things we do.",
"The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.",
"The greatest happiness of the greatest number is the foundation of morals and legislation.",
"Sometimes the bad things that happen in our lives put us directly on the path to the most wonderful things that will ever happen to us.",
"Rules for happiness: something to do, someone to love, something to hope for.",
"Of all forms of caution, caution in love is perhaps the most fatal to true happiness.",
"No amount of anxiety makes any difference to anything that is going to happen.",
"Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness.",
"Love is that condition in which the happiness of another person is essential to your own.",
"I have learned to seek my happiness by limiting my desires, rather than in attempting to satisfy them.",
"He is happy whom circumstances suit his temper; but he Is more excellent who suits his temper to any circumstance.",
"Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative.",
"For every minute you are angry you lose sixty seconds of happiness.",
"Don’t think too much. Just do what makes you happy.",
"Action may not always bring happiness, but there is no happiness without action.",
"Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious.",
"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",

 
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
