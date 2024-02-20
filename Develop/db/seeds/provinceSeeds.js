// Import Modules

const { Province } = require("../../Models/province");
const sequelize = require("../../config/connection");

const seedProvinces = async () => {

  const provinceData = [

    {
      name: "Open Waters",
      description: "Repo-Enter Link",
    },
    {
      name: "Semantic Shores",
      description: "Quiz-True or False",
    },
    {
      name: "Glyphic Glades of Tagcraft",
      description: "Quiz-Fill in the blank",
    },
    {
      name: "Fey Folk of Flexbox",
      description: "Quiz-Matching",
    },
    {
      name: "Cascade Canyons",
      description: "Repo-Upload Photo",
    },
    {
      name: "Animation Abyss",
      description: "Quiz-Multiple Choice",
    },
    {
      name: "Function Foothills",
      description: "Quiz-Doesn't Belong",
    },
    {
      name: "Domain of Draconic Manipulation",
      description: "Quiz-Fill in the Blank",
    },
    {
      name: "Promise Peaks",
      description: "Quiz-Multiple Choice",
    },
    {
      name: "Mystic Mists of Middleware",
      description: "Quiz-Fill in the Blank",
    },
    {
      name: "Server StrongHold",
      description: "Repo-Honor System",
    },
    {
      name: "Quag-Mires of Query",
      description: "Quiz-Matching",
    },
    {
      name: "Tables Tower",
      description: "Quiz-Sorting",
    },
    {
      name: "Citadel of Syntax",
      description: "Quiz-20 Questions",
    },
  ];

  try {
    await sequelize.sync({force: true}); 
    await Province.bulkCreate(provinceData);
    console.log('Province Seeded');
  } catch (error) {
    console.error('Failed to seed provinces:', error);

  };
};

seedProvinces().then(() => {
  console.log("Seeding compelte");
});


