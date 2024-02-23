
const { UserProfile, User, Territory, Challenge } = require('../Models/models');


const getUserProfile = async (req, res) => {
    try {
        const user_id = parseInt(req.params.id, 10); // Corrected to use "id"
        if (isNaN(user_id)) {
            return res.status(400).send({error: 'Invalid user ID.'});
        }

        const userProfile = await UserProfile.findOne({
            where: {user_id: user_id},
            include: [
                {model: User},
                {model: Territory,},
                {model: Challenge,}
            ]
        });

        if (!userProfile) {
            return res.status(404).send({error: 'User Profile not found'});
        }

        res.json(userProfile);
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        res.status(500).send({error: 'Failed to fetch user Profile'});
    }
};

const getAllUserProfiles = async (req , res) => {
    try {
        const userProfiles = await UserProfile.findAll({
            include: [
                {model: User},
                { model: Territory},
                {model:Challenge}
            ]
        });

        if(!userProfiles || userProfiles.length === 0) {
            return res.status(404).send('User Profiles not found')
        }
        res.json(userProfiles);
    } catch (error) {
        console.error('Failed to fetch user Profiles:', error);
        res.status(500).send({error:'Failed to fetch UserProfiles'});
    }
}



module.exports = {
    getUserProfile,
    getAllUserProfiles
};
