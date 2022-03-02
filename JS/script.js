const imgMsgColor = {
  1: { 
    url: 'https://i.imgur.com/VjeQG20.png',
    message: "You got a one, that's so fun",
    color: "red"
    },
  2: {
    url: 'https://i.imgur.com/5Yjwn6e.png',
    message: "You got MewTwo!",
    color: "orange"
    },
  3: {
    url: 'https://i.imgur.com/FOqNrQT.png',
    message: "Three thrice mice rice.",
    color: "yellow"
    },
  4: {
    url: 'https://i.imgur.com/5xr2QJF.png',
    message: "Four!!",
    color: "green"
    },
  5: {
    url: 'https://i.imgur.com/uaESiMS.png',
    message: "Hive mind rhymes with mind five",
    color: "blue"
    },
  6: {
    url: 'https://i.imgur.com/mPaO13v.png',
    message: "Sexy sixes",
    color: "violet"
    },
  }

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => {
  let randomlyGeneratedNum = generateRandomNum(1, 6);
  const image = document.getElementById("myImg");
  const message = document.getElementById("result");

  //Generate image:
  let urlOfImg = imgMsgColor[randomlyGeneratedNum].url;
  image.setAttribute('src', urlOfImg);
  image.setAttribute('transition-property', 'margin-right')
  
  //Image animation:
  image.classList.toggle('rotate');

  //Generate message:
  let uniqueMessage = imgMsgColor[randomlyGeneratedNum].message;
  message.innerHTML = uniqueMessage;

  //Color message:
  let colorOfMessage = imgMsgColor[randomlyGeneratedNum].color;
  message.style.color = colorOfMessage
};