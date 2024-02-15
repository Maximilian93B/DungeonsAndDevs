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
    name: "Semantic Shores",
    description: "Quiz 1",
  },
  {
    name: "Glyphic Glades of Tagcraft",
    description: "Quiz-2",
  },
  {
    name: "Fey Folk of Flexbox",
    description: "Refactor",
  },
  {
    name: "Cascade Canyons",
    description: "Quiz 3",
  },
  {
    name: "Animation Abyss",
    description: "Repo",
  },
  {
    name: "Function Foothills",
    description: "Repo",
  },
  {
    name: "Domain of Draconic Manipulation",
    description: "Quiz 1",
  },
  {
    name: "Promise Peaks",
    description: "Quiz 2",
  },
  {
    name: "Mystic Mists of Middleware",
    description: "Quiz 3",
  },
  {
    name: "Server StrongHold",
    description: "Repo",
  },
  {
    name: "Quag-Mires of Query",
    description: "Quiz 4",
  },
  {
    name: "Tables Tower",
    description: "Repo",
  },
  {
    name: "Citadel of Syntax",
    description: "Quiz 5",
  },
];
