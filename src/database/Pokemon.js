const { MongoClient } = require("mongodb");
const uri = require("../../atlas_uri");
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(uri);

const dbname = "poke_api";
const collection_name = "pokemon";

const pokemonsCollection = client.db(dbname).collection(collection_name);

const connectToDataBase = async () => {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  }
}

const sampleAbilities = [
  {
    id: 1,
    accuracy: 100,
    name: "Absorb",
    power: 20,
    pp: 25,
    type: "Grass"
  },
  {
    id: 2,
    accuracy: 100,
    name: "Acid",
    power: 40,
    pp: 30,
    type: "Poison"
  },
  {
    id: 3,
    accuracy: null,
    name: "Acid Armor",
    power: null,
    pp: 20,
    type: "Poison"
  },
  {
    id: 4,
    accuracy: null,
    name: "Agility",
    power: null,
    pp: 30,
    type: "Psychic"
  },
  {
    id: 5,
    accuracy: null,
    name: "Amnesia",
    power: null,
    pp: 20,
    type: "Psychic",
    pokemon: [
      "Psyduck",
      "Golduck",
      "Slowpoke",
      "Slowbro",
      "Snorlax",
      "Mewtwo",
      "Mew"
    ]
  },
  {
    id: 6,
    accuracy: 85,
    name: "Barrage",
    power: 15,
    pp: 20,
    type: "Normal",
    pokemon: [
      "Exeggcute",
      "Exeggutor"
    ]
  },
  {
    id: 7,
    accuracy: null,
    name: "Barrier",
    power: null,
    pp: 30,
    type: "Psychic"
  },
  {
    id: 8,
    accuracy: null,
    name: "Bide",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 9,
    accuracy: 85,
    name: "Bind",
    power: 15,
    pp: 20,
    type: "Normal"
  },
  {
    id: 10,
    accuracy: 100,
    name: "Bite",
    power: 60,
    pp: 25,
    type: "Dark"
  },
  {
    id: 11,
    accuracy: 70,
    name: "Blizzard",
    power: 110,
    pp: 5,
    "tm": 14,
    type: "Ice"
  },
  {
    id: 12,
    accuracy: 100,
    name: "Body Slam",
    power: 85,
    pp: 15,
    type: "Normal"
  },
  {
    id: 13,
    accuracy: 85,
    name: "Bone Club",
    power: 65,
    pp: 20,
    type: "Ground"
  },
  {
    id: 14,
    accuracy: 90,
    name: "Bonemerang",
    power: 50,
    pp: 10,
    type: "Ground"
  },
  {
    id: 15,
    accuracy: 100,
    name: "Bubble",
    power: 40,
    pp: 30,
    type: "Water"
  },
  {
    id: 16,
    accuracy: 100,
    name: "Bubble Beam",
    power: 65,
    pp: 20,
    type: "Water"
  },
  {
    id: 17,
    accuracy: 85,
    name: "Clamp",
    power: 35,
    pp: 10,
    type: "Water"
  },
  {
    id: 18,
    accuracy: 85,
    name: "Comet Punch",
    power: 18,
    pp: 15,
    type: "Normal"
  },
  {
    id: 19,
    accuracy: 100,
    name: "Confuse Ray",
    power: null,
    pp: 10,
    type: "Ghost"
  },
  {
    id: 20,
    accuracy: 100,
    name: "Confusion",
    power: 50,
    pp: 25,
    type: "Psychic"
  },
  {
    id: 21,
    accuracy: 100,
    name: "Constrict",
    power: 10,
    pp: 35,
    type: "Normal"
  },
  {
    id: 22,
    accuracy: null,
    name: "Conversion",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 23,
    accuracy: 100,
    name: "Counter",
    power: null,
    pp: 20,
    type: "Fighting"
  },
  {
    id: 24,
    accuracy: 90,
    name: "Crabhammer",
    power: 100,
    pp: 10,
    type: "Water"
  },
  {
    id: 25,
    accuracy: 95,
    name: "Cut",
    power: 50,
    pp: 30,
    type: "Normal"
  },
  {
    id: 26,
    accuracy: null,
    name: "Defense Curl",
    power: null,
    pp: 40,
    type: "Normal"
  },
  {
    id: 27,
    accuracy: 100,
    name: "Dig",
    power: 80,
    pp: 10,
    "tm": 28,
    type: "Ground"
  },
  {
    id: 28,
    accuracy: 100,
    name: "Disable",
    power: null,
    pp: 20,
    type: "Normal"
  },
  {
    id: 29,
    accuracy: 100,
    name: "Dizzy Punch",
    power: 70,
    pp: 10,
    type: "Normal"
  },
  {
    id: 30,
    accuracy: 100,
    name: "Double Kick",
    power: 30,
    pp: 30,
    type: "Fighting"
  },
  {
    id: 31,
    accuracy: 85,
    name: "Double Slap",
    power: 15,
    pp: 10,
    type: "Normal"
  },
  {
    id: 32,
    accuracy: null,
    name: "Double Team",
    power: null,
    pp: 15,
    "tm": 32,
    type: "Normal"
  },
  {
    id: 33,
    accuracy: 100,
    name: "Double-Edge",
    power: 120,
    pp: 15,
    type: "Normal"
  },
  {
    id: 34,
    accuracy: 100,
    name: "Dragon Rage",
    power: null,
    pp: 10,
    type: "Dragon"
  },
  {
    id: 35,
    accuracy: 75,
    name: "Dragon Rush",
    power: 100,
    pp: 10,
    type: "Dragon"
  },
  {
    id: 36,
    accuracy: 90,
    name: "Dragon Tail",
    power: 60,
    pp: 10,
    "tm": 82,
    type: "Dragon"
  },
  {
    id: 37,
    accuracy: 100,
    name: "Dream Eater",
    power: 100,
    pp: 15,
    "tm": 85,
    type: "Psychic"
  },
  {
    id: 38,
    accuracy: 100,
    name: "Drill Peck",
    power: 80,
    pp: 20,
    type: "Flying"
  },
  {
    id: 39,
    accuracy: 100,
    name: "Earthquake",
    power: 100,
    pp: 10,
    "tm": 26,
    type: "Ground"
  },
  {
    id: 40,
    accuracy: 75,
    name: "Egg Bomb",
    power: 100,
    pp: 10,
    type: "Normal"
  },
  {
    id: 41,
    accuracy: 100,
    name: "Ember",
    power: 40,
    pp: 25,
    type: "Fire"
  },
  {
    id: 42,
    accuracy: 100,
    name: "Explosion",
    power: 250,
    pp: 5,
    "tm": 64,
    type: "Normal"
  },
  {
    id: 43,
    accuracy: 85,
    name: "Fire Blast",
    power: 110,
    pp: 5,
    "tm": 38,
    type: "Fire"
  },
  {
    id: 44,
    accuracy: 100,
    name: "Fire Punch",
    power: 75,
    pp: 15,
    type: "Fire"
  },
  {
    id: 45,
    accuracy: 85,
    name: "Fire Spin",
    power: 35,
    pp: 15,
    type: "Fire"
  },
  {
    id: 46,
    accuracy: 30,
    name: "Fissure",
    power: null,
    pp: 5,
    type: "Ground"
  },
  {
    id: 47,
    accuracy: 100,
    name: "Flamethrower",
    power: 90,
    pp: 15,
    "tm": 35,
    type: "Fire"
  },
  {
    id: 48,
    accuracy: 100,
    name: "Flash",
    power: null,
    pp: 20,
    "tm": 70,
    type: "Normal"
  },
  {
    id: 49,
    accuracy: 95,
    name: "Fly",
    power: 90,
    pp: 15,
    type: "Flying"
  },
  {
    id: 50,
    accuracy: null,
    name: "Focus Energy",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 51,
    accuracy: 85,
    name: "Fury Attack",
    power: 15,
    pp: 20,
    type: "Normal"
  },
  {
    id: 52,
    accuracy: 80,
    name: "Fury Swipes",
    power: 18,
    pp: 15,
    type: "Normal"
  },
  {
    id: 53,
    accuracy: 100,
    name: "Glare",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 54,
    accuracy: 100,
    name: "Growl",
    power: null,
    pp: 40,
    type: "Normal"
  },
  {
    id: 55,
    accuracy: null,
    name: "Growth",
    power: null,
    pp: 40,
    type: "Normal"
  },
  {
    id: 56,
    accuracy: 30,
    name: "Guillotine",
    power: null,
    pp: 5,
    type: "Normal"
  },
  {
    id: 57,
    accuracy: 100,
    name: "Gust",
    power: 40,
    pp: 35,
    type: "Flying"
  },
  {
    id: 58,
    accuracy: null,
    name: "Harden",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 59,
    accuracy: null,
    name: "Haze",
    power: null,
    pp: 30,
    type: "Ice"
  },
  {
    id: 60,
    accuracy: 100,
    name: "Headbutt",
    power: 70,
    pp: 15,
    type: "Normal"
  },
  {
    id: 61,
    accuracy: 90,
    name: "High Jump Kick",
    power: 130,
    pp: 10,
    type: "Fighting"
  },
  {
    id: 62,
    accuracy: 100,
    name: "Horn Attack",
    power: 65,
    pp: 25,
    type: "Normal"
  },
  {
    id: 63,
    accuracy: 30,
    name: "Horn Drill",
    power: null,
    pp: 5,
    type: "Normal"
  },
  {
    id: 64,
    accuracy: 80,
    name: "Hydro Pump",
    power: 110,
    pp: 5,
    type: "Water"
  },
  {
    id: 65,
    accuracy: 90,
    name: "Hyper Beam",
    power: 150,
    pp: 5,
    "tm": 15,
    type: "Normal"
  },
  {
    id: 66,
    accuracy: 90,
    name: "Hyper Fang",
    power: 80,
    pp: 15,
    type: "Normal"
  },
  {
    id: 67,
    accuracy: 60,
    name: "Hypnosis",
    power: null,
    pp: 20,
    type: "Psychic"
  },
  {
    id: 68,
    accuracy: 100,
    name: "Ice Beam",
    power: 90,
    pp: 10,
    "tm": 13,
    type: "Ice"
  },
  {
    id: 69,
    accuracy: 100,
    name: "Ice Punch",
    power: 75,
    pp: 15,
    type: "Ice"
  },
  {
    id: 70,
    accuracy: 95,
    name: "Jump Kick",
    power: 130,
    pp: 10,
    type: "Fighting"
  },
  {
    id: 71,
    accuracy: 100,
    name: "Karate Chop",
    power: 50,
    pp: 25,
    type: "Fighting"
  },
  {
    id: 72,
    accuracy: 80,
    name: "Kinesis",
    power: null,
    pp: 15,
    type: "Psychic"
  },
  {
    id: 73,
    accuracy: 100,
    name: "Leech Life",
    power: 20,
    pp: 15,
    type: "Bug"
  },
  {
    id: 74,
    accuracy: 90,
    name: "Leech Seed",
    power: null,
    pp: 10,
    type: "Grass"
  },
  {
    id: 75,
    accuracy: 100,
    name: "Leer",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 76,
    accuracy: 100,
    name: "Lick",
    power: 30,
    pp: 30,
    type: "Ghost"
  },
  {
    id: 77,
    accuracy: null,
    name: "Light Screen",
    power: null,
    pp: 30,
    "tm": 16,
    type: "Psychic"
  },
  {
    id: 78,
    accuracy: 75,
    name: "Lovely Kiss",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 79,
    accuracy: 100,
    name: "Low Kick",
    power: null,
    pp: 20,
    type: "Fighting"
  },
  {
    id: 80,
    accuracy: null,
    name: "Meditate",
    power: null,
    pp: 40,
    type: "Psychic"
  },
  {
    id: 81,
    accuracy: 100,
    name: "Mega Drain",
    power: 40,
    pp: 15,
    type: "Grass"
  },
  {
    id: 82,
    accuracy: 75,
    name: "Mega Kick",
    power: 120,
    pp: 5,
    type: "Normal"
  },
  {
    id: 83,
    accuracy: 85,
    name: "Mega Punch",
    power: 80,
    pp: 20,
    type: "Normal"
  },
  {
    id: 84,
    accuracy: null,
    name: "Metronome",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 85,
    accuracy: null,
    name: "Mimic",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 86,
    accuracy: null,
    name: "Minimize",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 87,
    accuracy: null,
    name: "Mirror Move",
    power: null,
    pp: 20,
    type: "Flying"
  },
  {
    id: 88,
    accuracy: null,
    name: "Mist",
    power: null,
    pp: 30,
    type: "Ice"
  },
  {
    id: 89,
    accuracy: 100,
    name: "Night Shade",
    power: null,
    pp: 15,
    type: "Ghost"
  },
  {
    id: 90,
    accuracy: 100,
    name: "Pay Day",
    power: 40,
    pp: 20,
    type: "Normal"
  },
  {
    id: 91,
    accuracy: 100,
    name: "Peck",
    power: 35,
    pp: 35,
    type: "Flying"
  },
  {
    id: 92,
    accuracy: 100,
    name: "Petal Dance",
    power: 120,
    pp: 10,
    type: "Grass"
  },
  {
    id: 93,
    accuracy: 95,
    name: "Pin Missile",
    power: 25,
    pp: 20,
    type: "Bug"
  },
  {
    id: 94,
    accuracy: 90,
    name: "Poison Gas",
    power: null,
    pp: 40,
    type: "Poison"
  },
  {
    id: 95,
    accuracy: 75,
    name: "Poison Powder",
    power: null,
    pp: 35,
    type: "Poison"
  },
  {
    id: 96,
    accuracy: 100,
    name: "Poison Sting",
    power: 15,
    pp: 35,
    type: "Poison"
  },
  {
    id: 97,
    accuracy: 100,
    name: "Pound",
    power: 40,
    pp: 35,
    type: "Normal"
  },
  {
    id: 98,
    accuracy: 100,
    name: "Psybeam",
    power: 65,
    pp: 20,
    type: "Psychic"
  },
  {
    id: 99,
    accuracy: 100,
    name: "Psychic",
    power: 90,
    pp: 10,
    "tm": 29,
    type: "Psychic"
  },
  {
    id: 100,
    accuracy: 100,
    name: "Psywave",
    power: null,
    pp: 15,
    type: "Psychic"
  },
  {
    id: 101,
    accuracy: 100,
    name: "Quick Attack",
    power: 40,
    pp: 30,
    type: "Normal"
  },
  {
    id: 102,
    accuracy: 100,
    name: "Rage",
    power: 20,
    pp: 20,
    type: "Normal"
  },
  {
    id: 103,
    accuracy: 95,
    name: "Razor Leaf",
    power: 55,
    pp: 25,
    type: "Grass"
  },
  {
    id: 104,
    accuracy: 100,
    name: "Razor Wind",
    power: 80,
    pp: 10,
    type: "Normal"
  },
  {
    id: 105,
    accuracy: null,
    name: "Recover",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 106,
    accuracy: null,
    name: "Reflect",
    power: null,
    pp: 20,
    "tm": 33,
    type: "Psychic"
  },
  {
    id: 107,
    accuracy: 90,
    name: "Rock Slide",
    power: 75,
    pp: 10,
    "tm": 80,
    type: "Rock"
  },
  {
    id: 108,
    accuracy: 90,
    name: "Rock Throw",
    power: 50,
    pp: 15,
    type: "Rock"
  },
  {
    id: 109,
    accuracy: 85,
    name: "Rolling Kick",
    power: 60,
    pp: 15,
    type: "Fighting"
  },
  {
    id: 110,
    accuracy: 100,
    name: "Sand Attack",
    power: null,
    pp: 15,
    type: "Ground"
  },
  {
    id: 111,
    accuracy: 100,
    name: "Scratch",
    power: 40,
    pp: 35,
    type: "Normal"
  },
  {
    id: 112,
    accuracy: 85,
    name: "Screech",
    power: null,
    pp: 40,
    type: "Normal"
  },
  {
    id: 113,
    accuracy: 100,
    name: "Seismic Toss",
    power: null,
    pp: 20,
    type: "Fighting"
  },
  {
    id: 114,
    accuracy: 100,
    name: "Self-Destruct",
    power: 200,
    pp: 5,
    type: "Normal"
  },
  {
    id: 115,
    accuracy: null,
    name: "Sharpen",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 116,
    accuracy: 55,
    name: "Sing",
    power: null,
    pp: 15,
    type: "Normal"
  },
  {
    id: 117,
    accuracy: 100,
    name: "Skull Bash",
    power: 130,
    pp: 10,
    type: "Normal"
  },
  {
    id: 118,
    accuracy: 90,
    name: "Sky Attack",
    power: 140,
    pp: 5,
    type: "Flying"
  },
  {
    id: 119,
    accuracy: 75,
    name: "Slam",
    power: 80,
    pp: 20,
    type: "Normal"
  },
  {
    id: 120,
    accuracy: 100,
    name: "Slash",
    power: 70,
    pp: 20,
    type: "Normal"
  },
  {
    id: 121,
    accuracy: 75,
    name: "Sleep Powder",
    power: null,
    pp: 15,
    type: "Grass"
  },
  {
    id: 122,
    accuracy: 100,
    name: "Sludge",
    power: 65,
    pp: 20,
    type: "Poison"
  },
  {
    id: 123,
    accuracy: 70,
    name: "Smog",
    power: 30,
    pp: 20,
    type: "Poison"
  },
  {
    id: 124,
    accuracy: 100,
    name: "Smokescreen",
    power: null,
    pp: 20,
    type: "Normal"
  },
  {
    id: 125,
    accuracy: null,
    name: "Soft-Boiled",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 126,
    accuracy: 100,
    name: "Solar Beam",
    power: 120,
    pp: 10,
    "tm": 22,
    type: "Grass"
  },
  {
    id: 127,
    accuracy: 90,
    name: "Sonic Boom",
    power: null,
    pp: 20,
    type: "Normal"
  },
  {
    id: 128,
    accuracy: 100,
    name: "Spike Cannon",
    power: 20,
    pp: 15,
    type: "Normal"
  },
  {
    id: 129,
    accuracy: null,
    name: "Splash",
    power: null,
    pp: 40,
    type: "Normal"
  },
  {
    id: 130,
    accuracy: 100,
    name: "Spore",
    power: null,
    pp: 15,
    type: "Grass"
  },
  {
    id: 131,
    accuracy: 100,
    name: "Stomp",
    power: 65,
    pp: 20,
    type: "Normal"
  },
  {
    id: 132,
    accuracy: 100,
    name: "Strength",
    power: 80,
    pp: 15,
    type: "Normal"
  },
  {
    id: 133,
    accuracy: 95,
    name: "String Shot",
    power: null,
    pp: 40,
    type: "Bug"
  },
  {
    id: 134,
    accuracy: null,
    name: "Struggle",
    power: 50,
    pp: null,
    type: "Normal"
  },
  {
    id: 135,
    accuracy: 75,
    name: "Stun Spore",
    power: null,
    pp: 30,
    type: "Grass"
  },
  {
    id: 136,
    accuracy: 80,
    name: "Submission",
    power: 80,
    pp: 25,
    type: "Fighting"
  },
  {
    id: 137,
    accuracy: null,
    name: "Substitute",
    power: null,
    pp: 10,
    "tm": 90,
    type: "Normal"
  },
  {
    id: 138,
    accuracy: 90,
    name: "Super Fang",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 139,
    accuracy: 55,
    name: "Supersonic",
    power: null,
    pp: 20,
    type: "Normal"
  },
  {
    id: 140,
    accuracy: 100,
    name: "Surf",
    power: 90,
    pp: 15,
    type: "Water"
  },
  {
    id: 141,
    accuracy: null,
    name: "Swift",
    power: 60,
    pp: 20,
    type: "Normal"
  },
  {
    id: 142,
    accuracy: null,
    name: "Swords Dance",
    power: null,
    pp: 20,
    "tm": 75,
    type: "Normal"
  },
  {
    id: 143,
    accuracy: 100,
    name: "Tackle",
    power: 50,
    pp: 35,
    type: "Normal"
  },
  {
    id: 144,
    accuracy: 100,
    name: "Tail Whip",
    power: null,
    pp: 30,
    type: "Normal"
  },
  {
    id: 145,
    accuracy: 85,
    name: "Take Down",
    power: 90,
    pp: 20,
    type: "Normal"
  },
  {
    id: 146,
    accuracy: null,
    name: "Teleport",
    power: null,
    pp: 20,
    type: "Psychic"
  },
  {
    id: 147,
    accuracy: 100,
    name: "Thrash",
    power: 120,
    pp: 10,
    type: "Normal"
  },
  {
    id: 148,
    accuracy: 70,
    name: "Thunder",
    power: 110,
    pp: 10,
    "tm": 25,
    type: "Electric"
  },
  {
    id: 149,
    accuracy: 100,
    name: "Thunder Punch",
    power: 75,
    pp: 15,
    type: "Electric"
  },
  {
    id: 150,
    accuracy: 100,
    name: "Thunder Shock",
    power: 40,
    pp: 30,
    type: "Electric"
  },
  {
    id: 151,
    accuracy: 100,
    name: "Thunder Wave",
    power: null,
    pp: 20,
    "tm": 73,
    type: "Electric"
  },
  {
    id: 152,
    accuracy: 100,
    name: "Thunderbolt",
    power: 90,
    pp: 15,
    "tm": 24,
    type: "Electric"
  },
  {
    id: 153,
    accuracy: 90,
    name: "Toxic",
    power: null,
    pp: 10,
    "tm": 6,
    type: "Poison"
  },
  {
    id: 154,
    accuracy: null,
    name: "Transform",
    power: null,
    pp: 10,
    type: "Normal"
  },
  {
    id: 155,
    accuracy: 100,
    name: "Tri Attack",
    power: 80,
    pp: 10,
    type: "Normal"
  },
  {
    id: 156,
    accuracy: 100,
    name: "Twineedle",
    power: 25,
    pp: 20,
    type: "Bug"
  },
  {
    id: 157,
    accuracy: 100,
    name: "Vine Whip",
    power: 45,
    pp: 25,
    type: "Grass"
  },
  {
    id: 158,
    accuracy: 100,
    name: "Vise Grip",
    power: 55,
    pp: 30,
    type: "Normal"
  },
  {
    id: 159,
    accuracy: 100,
    name: "Water Gun",
    power: 40,
    pp: 25,
    type: "Water"
  },
  {
    id: 160,
    accuracy: 100,
    name: "Waterfall",
    power: 80,
    pp: 15,
    type: "Water"
  },
  {
    id: 161,
    accuracy: 100,
    name: "Whirlwind",
    power: null,
    pp: 20,
    type: "Normal"
  },
  {
    id: 162,
    accuracy: 100,
    name: "Wing Attack",
    power: 60,
    pp: 35,
    type: "Flying"
  },
  {
    id: 163,
    accuracy: null,
    name: "Withdraw",
    power: null,
    pp: 40,
    type: "Water"
  }
];

// const main = async () => {
//   try {
//     await connectToDataBase();
//   } catch (err) {
//     console.error(`Error: ${err}`);
//   } finally {
//     await client.close();
//   }
// }

// main();

const getAllPokemons = async () => {
  try {
    await connectToDataBase();
    const result = await pokemonsCollection.find().toArray();
    return result;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

const getPokemonById = async (pokemonId) => {
  if (!pokemonId) {
    throw new Error("Pokemon ID is required");
  }

  try {
    await connectToDataBase();
    const result = await pokemonsCollection.findOne({ id: parseInt(pokemonId) });

    if (!result) {
      throw new Error("Pokemon not found");
    }

    const { name, id, type, ability, image, base } = result;

    const pokemon = {
      name,
      id,
      type,
      ability,
      image,
      base,
    };

    return pokemon;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
};
