const Room = require('../models/room.model')

exports.createRoom = async (req, res, next) => {
    const room = await Room.findOne({
        title: req.body.title
    })

    if(!room) {
        const { title, expiration } = req.body
        const room = new Room({
            title,
            expiration,
        })

        room.save((err, newRoom) => {
            if(err) {
                console.error(err)
                res.status(500).send({error: 'No se pudo crear la sala'})
            } else {
                res.send(newRoom)
            }
        })
    } else {
        res.status(400).send({
            error: 'Ese nombre ya existe'
        })
    }
}

exports.getRooms = async (req, res, next) => {
    const rooms = await Room.find({})
    if(!rooms){
        return
    }

    return res.send(rooms)
}
