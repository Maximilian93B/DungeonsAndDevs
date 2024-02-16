// Import Modules

const { Province } = require("../../Models/province");
const sequelize = require("../../config/connection");

const seedTerritories = async () => {
  try {
    await sequelize.sync({ force: true }); // CHANGE TO FALSE WHEN DEPLOYING
    // call territoryData to seed tables
    await Province.bulkCreate(provinceData);
    console.log("Provinces Seeded");
  } catch (error) {
    console.error("Provinces Failed:", error);
  }
};

seedProvinces().then(() => {
  process.exit(0); // exit process when done
});

const provinceData = [

   {
    name: "Commemcement Challenge",
    type: "a",
    description: "Repo-Enter Link",
  },
  {
    name: "Semantic Shores",
    type: "1",
    description: "Quiz-True or False",
  },
  {
    name: "Glyphic Glades of Tagcraft",
    type: "b",
    description: "Repo-Refactor",
  },
  {
    name: "Fey Folk of Flexbox",
    type: "6",
    description: "Quiz-Matching",
  },
  {
    name: "Cascade Canyons",
    type: "a",
    description: "Repo-Enter Link",
  },
  {
    name: "Animation Abyss",
    type: "3",
    description: "Quiz-Fill in the Blank",
  },
  {
    name: "Function Foothills",
    type: "2",
    description: "Quiz-Sequence",
  },
  {
    name: "Domain of Draconic Manipulation",
    type: "3",
    description: "Quiz-Fill in the Blank",
  },
  {
    name: "Promise Peaks",
    type: "4",
    description: "Quiz-Multiple Choice",
  },
  {
    name: "Mystic Mists of Middleware",
    type: "3",
    description: "Quiz-Fill in the Blank",
  },
  {
    name: "Server StrongHold",
    type: "c",
    description: "Repo-Honor System",
  },
  {
    name: "Quag-Mires of Query",
    type: "6",
    description: "Quiz-Matching",
  },
  {
    name: "Tables Tower",
    type: "5",
    description: "Quiz-Sorting",
  },
  {
    name: "Citadel of Syntax",
    type: "7",
    description: "Quiz-20 Questions",
  },
];
