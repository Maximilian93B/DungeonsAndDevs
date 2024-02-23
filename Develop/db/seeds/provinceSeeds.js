// Import Modules

const { Province } = require("../../Models/province");
const sequelize = require("../../config/connection");
const { Territory } = require('../../Models/territory');

// Decalre async 
const seedProvinces = async () => {
  await sequelize.sync({force: false });
 
   // Fetch existing territories and map them by name to access their IDs
   // Super Proud of this :)! 
   const territories = await Territory.findAll(); // Fetch the All territories from terriotires --> has to be seeeded FIRST 
   const territoryMap = territories.reduce((acc, territory) => 
   // Reduce the fetched territories array to a OBJECT !!! 
   // Then it maps the territories 'name' to the territories ID. 
   {
      // point territory.name to territory.id to confirm ID fields in territory table !!
       acc[territory.name] = territory.territory_id; // Ensure you're using the correct attribute for the ID
       // Return the accumulator 
       return acc;
   }, {}); // The initial value of the accumulator is an empty object 

   console.log('Territory Map:', territoryMap); // logging for Debug

   // Seed Data 
  const provinceData = [
    {
      name: "Open Waters",
      description: "Repo-Enter Link",
      territory_id: territoryMap['Open Waters'],
    },
    {
      name: "Semantic Shores",
      description: "Quiz-True or False",
      territory_id: territoryMap['The Isles of Structure & Styling'],
    },
    {
      name: "Glyphic Glades of Tagcraft",
      description: "Quiz-Fill in the blank",
      territory_id: territoryMap['The Isles of Structure & Styling'],
    },
    {
      name: "Fey Folk of Flexbox",
      description: "Quiz-Matching",
      territory_id: territoryMap['The Isles of Structure & Styling'],
    },
    {
      name: "Cascade Canyons",
      description: "Repo-Upload Photo",
      territory_id: territoryMap['The Isles of Structure & Styling'],
    },
    {
      name: "Animation Abyss",
      description: "Quiz-Multiple Choice",
      territory_id: territoryMap['The Isles of Structure & Styling'],
    },
    {
      name: "Function Foothills",
      description: "Quiz-Doesn't Belong",
      territory_id: territoryMap['Handler Highlands'],
    },
    {
      name: "Domain of Draconic Manipulation",
      description: "Quiz-Fill in the Blank",
      territory_id: territoryMap['Handler Highlands'],
    },
    {
      name: "Promise Peaks",
      description: "Quiz-Multiple Choice",
      territory_id: territoryMap['Handler Highlands'],
    },
    
    {
      name: "Mystic Mists of Middleware",
      description: "Quiz-Fill in the Blank",
      territory_id: territoryMap['Eerie Express'],
    },
    {
      name: "Server StrongHold",
      description: "Repo-Honor System",
      territory_id: territoryMap['Eerie Express'],
    },
    {
      name: "Quag-Mires of Query",
      description: "Quiz-Matching",
      territory_id: territoryMap['SQL Summit'],
    },
    {
      name: "Tables Tower",
      description: "Quiz-Sorting",
      territory_id: territoryMap['SQL Summit'],
    },
    {
      name: "Citadel of Syntax",
      description: "Quiz-20 Questions",
      territory_id: territoryMap['Final Quest'],
    },
  ];
  // await table and Error Handle 
  try {
    await Province.bulkCreate(provinceData);
    console.log('Provinces seeded');
  } catch (error) {
    console.error('Error seeding Provinces:', error);
  }

};

// Export Function 
module.exports = seedProvinces;
