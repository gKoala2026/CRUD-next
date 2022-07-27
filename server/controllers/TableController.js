const UserModel = require('../models/User')

exports.getTable = async( req, res, next ) => {
    const users = await UserModel.find()
    res.json(users);
}

exports.addUser = async( req, res, next ) => {
    const { name, email, adress } = req.body
    const oldUser = await UserModel.findOne({email})
    if(oldUser) return res.status(409).send('User already exist.')

    const user = await UserModel.create({
        name,
        email,
        adress,
    })
    const users = await UserModel.find()
    res.json(users);
}

exports.delUser = async( req, res, next ) => {
    const email = req.body.email
    await UserModel.deleteOne({email})
    const users = await UserModel.find()
    res.json(users);
}

exports.updateUser = async( req, res, next ) => {
    const { name, email, adress } = req.body
    await UserModel.updateOne({email}, { name, adress })
    const users = await UserModel.find()
    res.json(users);
}