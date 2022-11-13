const HANGMAN_PICS = [
    "+---+\n" +
      "|   |\n" +
      "    |\n" +
      "    |\n" +
      "    |\n" +
      "    |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      "      |\n" +
      "      |\n" +
      "      |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      "  |   |\n" +
      "      |\n" +
      "      |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      " /|   |\n" +
      "      |\n" +
      "      |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      " /|\\  |\n" +
      "      |\n" +
      "      |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      " /|\\  |\n" +
      " /    |\n" +
      "      |\n" +
      "=========",
    "  +---+\n" +
      "  |   |\n" +
      "  O   |\n" +
      " /|\\  |\n" +
      " / \\  |\n" +
      "      |\n" +
      "=========",
  ];
  
  // TODO: Fill this list with values about a certain topic
  // you are passionate about: e.g. famous scientists, chess players, ...
  const WORDS_TO_GUESS = [
    [
    'CHINA',
    'JAPAN',
    'AUSTRIA',
    'BELGIUM',
    'ENGLAND',
    'POLAND',
    'SWITZERLAND',
    'SPAIN',
    'MALAYSIA',
    'NIGERA',
    'EGYPT',
    'BRAZIL',
    'AUSTRALIA',
    'ARGENTINA',
    'PARAGUAY',
    'MEXICO',
    'ESTONIA',
    'SWEDEN',
    'DENMARK',
    'ALGERIA',
    'FINLAND',
    'IRAN',
    'RUSSIA',
    'UKRAINE',
    'INDIA'
  ],
  [
    'TOKYO',
    'VIENNA',
    'WARSAW',
    'STOCKHOLME',
    'PARIS',
    'BEIJING',
    'CAIRO',
    'BERLIN',
    'OSLO',
    'OTTAWA',
    'MADRID',
    'CANBERRA',
    'SEOUL',
    'PYONGYANG',
    'BRUSSELS',
    'HELSINKI',
    'BRASILIA',
    'LONDON',
    'LIMA',
    'EDINBURGH',
    'DUBLIN',
    'ZURICH',
    'PRAGUE',
    'BRATISLAVA',
    'BUDAPEST',
    'BANGKOK',
    'ANKARA',
    'MANILA',
    'HANOI'
  ]
    ];
  
  module.exports = {
    HANGMAN_PICS: HANGMAN_PICS,
    WORDS_TO_GUESS: WORDS_TO_GUESS,
  };
  