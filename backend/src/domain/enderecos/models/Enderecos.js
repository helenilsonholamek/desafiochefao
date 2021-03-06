const db = require("../../../infrastructure/database/dbConexao");
const { Sequelize } = require("sequelize");

const Enderecos = db.define(
  "Enderecos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    rua: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    numero: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    complemento: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    cidade: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    estado: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    criadoEm: {
      allowNull: false,
      type: Sequelize.DATE
    },
    alteradoEm: {
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    tableName: "enderecos",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Enderecos;

