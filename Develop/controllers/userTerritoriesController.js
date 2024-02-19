// user_territories Controller 

const { UserTerritory } = require('../Models/userTerritory');


const userTerritoriesController = {
    getallUserTerrData : async (req, res ) => {
        try {
            const userTerritories = await UserTerritory.findAll();
            res.json(userTerritories);
        
        } catch (error) {
            console.error('Error fetching user territories:', error) ;       }
    }
}

module.exports = { userTerritoriesController }; 