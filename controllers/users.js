const mongodb = require('../data/database');
const objectId = require('mongodb').objectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection('users').find();
    result.toArray().then((users) => {
       res.setHeader('content-Type', 'application/json');
       res.status(200).json(users);
   
    });
};

const getsingle = async (req, res) => {
    const userId = new objectId(req,params.id);
    const result = await mongodb.getDatabase().collection('users').find({ _id: userId});
    result.toArray().then((users) => {
       res.setHeader('content-Type', 'application/json');
       res.status(200).json(users[0]);
   
    });
};

module.exports ={
    getAll,
    getsingle
};