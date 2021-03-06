'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER()
      },
      empresa_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        references: {
          model: 'empresas',
          key: 'id'
        }
      },
      nome_completo: {
        type: Sequelize.STRING (100),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(19)
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      perfil: {
        type: Sequelize.STRING(),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      situacao: {
        type: Sequelize.ENUM ('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'ativo'
      },
      avatar: {
        type: Sequelize.STRING(200)
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      },
      alteradoEm: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};