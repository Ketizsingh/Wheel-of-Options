// "use strict";

let bottle = document.body.querySelector(".bottle");

let dare = [
  "Show the most embarrassing photo on your phone",
  "Show the last five people you texted and what the messages said",
  "Let the rest of the group DM someone from your Instagram account",
  "Eat a raw piece of garlic",
  "Do 100 squats",
  "Show us your screen time report",
  "Keep three ice cubes in your mouth until they melt",
  "Say something dirty to the person on your left",
  "Give a foot massage to the person on your right",
  "Put 10 different available liquids into a cup and drink it",
  "Yell out the first word that comes to your mind",
  "Give a lap dance to someone of your choice",
  "Remove four items of clothing",
  "Like the first 15 posts on your Facebook newsfeed",
  "Eat a spoonful of mustard",
  "Keep your eyes closed until it's your go again",
  "Send a sext to the last person in your phonebook",
  "Show your orgasm face",
  "Seductively eat a banana",
  "Empty out your wallet/purse and show everyone what's inside",
  "Do your best sexy crawl",
  "Pretend to be the person to your right for 10 minutes",
  "Eat a snack without using your hands",
  "Say two honest things about everyone else in the group",
  "Twerk for a minute",
  "Try and make the group laugh as quickly as possible",
  "Try to put your whole fist in your mouth",
  "Tell everyone an embarrassing story about yourself",
  "Try to lick your elbow",
  "Post the oldest selfie on your phone on Instagram Stories",
  "Tell the saddest story you know",
  "Howl like a wolf for two minutes",
  "Dance without music for two minutes",
  "Pole dance with an imaginary pole",
  "Let someone else tickle you and try not to laugh",
  "Put as many snacks into your mouth at once as you can",
  "Scroll through your phone book until someone says stop. You either have to call or delete that person.",
  "Down your drink (responsibly)",
  "Try and make yourself cry in front of the group",
  "Tell the group two truths and a lie, and they have to guess which one the lie is",
  "Show off your secret talent",
  "Reply to the first five Instagram Stories on your timeline",
  "Share the first celebrity on your timeline's Instagram to your Story",
  "Put on as many layers as possible in 60 seconds",
  "Fill your mouth with drink and gargle your answer to the next Truth",
  "Smile as widely as you can and hold it for two minutes",
];

let truth = [
  "When was the last time you lied?",
  "When was the last time you cried?",
  "What's your biggest fear?",
  "What's your biggest fantasy?",
  "Do you have any fetishes?",
  "What's something you're glad your mum doesn't know about you?",
  "Have you ever cheated on someone?",
  "What's the worst thing you've ever done?",
  "What's a secret you've never told anyone?",
  "Do you have a hidden talent?",
  "Who was your first celebrity crush?",
  "What are your thoughts on polyamory?",
  "What's the worst intimate experience you've ever had?",
  "Have you ever cheated in an exam?",
  "What's the most drunk you've ever been?",
  "Have you ever broken the law?",
  "What's the most embarrassing thing you've ever done?",
  "What's your biggest insecurity?",
  "Have you ever stayed friends with someone because it benefitted you beyond just the friendship?",
  "What's the biggest mistake you've ever made?",
  "What's the most disgusting thing you've ever done?",
  "Who would you like to kiss in this room?",
  "What's the worst thing anyone's ever done to you?",
  "Have you ever had a run in with the law?",
  "What's your worst habit?",
  "What's the worst thing you've ever said to anyone?",
  "Have you ever peed in the shower?",
  "What's the strangest dream you've had?",
  "Have you ever been caught doing something you shouldn't have?",
  "What's the worst date you've been on?",
  "What's your biggest regret?",
  "What's the biggest misconception about you?",
  "Have you ever said something you regret about someone in this room?",
  "What's one thing you wish people knew about you?",
  "Where's the weirdest place you've had sex?",
  "Why did your last relationship break down?",
  "Have you ever lied to get out of a bad date?",
  "What's the most trouble you've been in?",
  "What's the worst thing you've ever lied about?",
  "What's the best piece of advice you've ever been given?",
  "What's your guilty pleasure?",
  "What's one thing you only do when you're alone?",
  "If you had to get back with an ex, who would you choose?",
  "If you had to cut one friend out of your life, who would it be?",
  "Do you have a favourite friend?",
];

let options = truth;
const initials = (string) => string[0] + string[1];

const nameContainer = document.body.querySelector("h1.nameCotainer");

options.map((option, index) => {
  nameContainer.innerHTML += `<span>${index + 1}</span>`;
});

let spin = function () {
  $("#taskAssign").modal("hide");
  //   bottle.bottle.classList.add("rotated");
  let winnerValue = Math.floor(Math.random() * (options.length - 0)) + 0;

  bottle.style.transform = "rotate(-45deg)";
  bottle.style.transition = "transform 1s ease 0s";

  let values = [];

  const neededValue = (totalOptions, matchFixingValue) => {
    const difference = 360 / totalOptions;
    let angles = 0;
    values[0] = 0;

    for (let index = 1; index <= totalOptions; index++) {
      angles = angles + difference;
      values[index] = angles;
    }

    let finalANGEL = values[matchFixingValue];
    finalANGEL =
      Math.floor(Math.random() * (finalANGEL - (finalANGEL - difference))) +
      (finalANGEL - difference);

    return finalANGEL;
  };

  // first value is total, second is fixed or predicted
  let finalNearAngel = neededValue(options.length, winnerValue);
  document.getElementById("myAudio").play();
  setTimeout(() => {
    bottle.style.transform = "rotate(" + (3600 + finalNearAngel) + "deg)";
    bottle.style.transition = "transform 10s ease-out 0s";
  }, 1000);

  setTimeout(() => {
    document.body.querySelector(".taskText").innerHTML =
      options[winnerValue - 1];
    $("#taskAssign").modal("show");
  }, 12000);
};

document.body.querySelector("button").addEventListener("click", spin);
document.body.querySelector(".spinAgain").addEventListener("click", spin);

degree = 0;
const displayeNames = document.body.querySelectorAll("h1 span");
for (span of displayeNames) {
  //   console.log(span);
  span.style.transform = `rotate(${degree}deg)`;
  degree = degree + 360 / options.length;
}
