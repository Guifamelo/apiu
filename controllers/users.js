const USER = require("../models/Users")
module.exports = {
    store: async (req, res) => {          //METODO POST
        const { nome, idade, email, senha } = req.body
        const user = new USER({ nome, idade, email, senha })
        await user.save()
        res.send({
            mensagem: "Usuário CRIADO com sucesso!",
            user
        })
    },
    index: async (req, res) => {          //METODO GET
        res.send(await USER.find())
    },
    update: async (req, res) => {
        const user = await USER.update(req.query, req.body)
        res.send({
            mensagem: "Usuário ATUALIZADO com sucesso!",
            user
        })
    },
    delete: async (req, res) => {
        const _id = req.params._id
        console.log(_id)
        const user = await USER.deleteOne({ _id }); // returns {deletedCount: 1}
        res.send({
            mensagem: "Usuário DELETADO com sucesso!",
            user
        })
    }


}