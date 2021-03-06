const Usuarios = require('../models/Usuarios')
const jwt = require ('jsonwebtoken')
const secret = require('../../../configs/secret')
const bcrypt = require ('bcryptjs')

const AuthController = {
    async login (req, res) {
        try {   
            const { email, senha } = req.body

            const usuario = await Usuarios.findOne({
                where: {
                    email
                }
            })

        if (!usuario) {
            return res.status(400).json ('Usuário ou senha Inválido')
        }

        if (!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json ('Usuário ou Senha Inválido')
        }

        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            perfil: usuario.perfil,
            situacao: usuario.situacao,
            empresa_id: usuario.empresa_id
        }, secret.key)
        
        res.cookie('tokenXp', token)
        return res.status(200).json(token)

        } catch (error) {
            console.log(error)
        }
    },

    async genereteToken (id, nome, perfil, situacao, empresa_id) {
        const token = jwt.sign(
            {
            id,
            nome,
            perfil,
            situacao,
            empresa_id
            },
            secret.key
        )
        return token
    }
}

module.exports = AuthController