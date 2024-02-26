// This route will handle update user_territories 

const express = require('express');
const { UserTerritory, UserProfile } = require('../../../Models/models');
const sequelize = require('../../../config/connection');
const router = express.Router();



// POST Route to update 

router.post ('/', async (req,res) => {
    const { userId , territoryId} = req.body;

    try {
        await updateUserTerritory(userId, territoryId);
        res.json({ success: true, message: 'Territory updated!'});
    } catch (error){
        console.error('Error updating territory:', error);
        res.status(500).send({success: false, message: 'Error updating territory'})
    }
});

async function updateUserTerritory(userId, territoryId) {
    // Start sequelize transaction IOT to protect DB 

    const t = await sequelize.transaction();

    try {
        await UserTerritory.update({ territory_id: territoryId }, { where: { user_id: userId }, t});

        // Update UserProfile
        await UserProfile.update({ territory_id: territoryId }, { where: { user_id: userId }, t});
    
        await t.commit();
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

module.exports = router; 

// Comment for commit 