const imagesOfDie = {
  1:'https://i.imgur.com/VjeQG20.png',
  2:'https://i.imgur.com/5Yjwn6e.png',
  3:'https://i.imgur.com/FOqNrQT.png',
  4:'https://i.imgur.com/5xr2QJF.png',
  5:'https://i.imgur.com/uaESiMS.png',
  6:'https://i.imgur.com/mPaO13v.png'
}

const uniqueMessages = {
  1: "You got a one, that's so fun",
  2: "You got MewTwo!",
  3: "Three thrice mice rice.",
  4: "Four!!",
  5: "Hive mind rhymes with mind five",
  6: "Sexy sixes"
}

const messageColors = {
  1: "red",
  2: "blue",
  3: "yellow",
  4: "green",
  5: "blue",
  6: "violet"
}

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const rollDice = () => {
  let randomlyGeneratedNum = generateRandomNum(1, 6);
  const image = document.getElementById("myImg");
  const message = document.getElementById("result");

  //Generate image:
  let urlOfImg = imagesOfDie[randomlyGeneratedNum];
  image.setAttribute('src', urlOfImg);
  image.setAttribute('transition-property', 'margin-right')
  
  //Image animation:
  image.classList.toggle('rotate');

  //Generate message:
  let uniqueMessage = uniqueMessages[randomlyGeneratedNum];
  message.innerHTML = uniqueMessage;

  //Color message:
  let colorOfMessage = messageColors[randomlyGeneratedNum];
  message.style.color = colorOfMessage

};
