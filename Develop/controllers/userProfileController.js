
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

module.exports = {
    getUserProfile
};
