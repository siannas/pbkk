'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Penelitians', {
      id: {
        type: Sequelize.INTEGER
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      id_dept: {
        type: Sequelize.INTEGER
      },
      nama_dept	:{
        type: Sequelize.STRING
      },
			id_fak	: {
        type: Sequelize.INTEGER
      },
			nama_fakultas	:{
        type: Sequelize.STRING
      },
			penelitian_id	: {
        type: Sequelize.INTEGER
      },
			penelitian_judul	:{
				type: Sequelize.STRING(1000)
			},
			peneliti_id	:{
        type: Sequelize.STRING
      },
			peneliti_nama	:{
        type: Sequelize.STRING
      },
			anggota_sebagai:{
        type: Sequelize.STRING
      },
			anggota_konfirmasi: {
        type: Sequelize.INTEGER
      },	
			anggota_id	: {
        type: Sequelize.INTEGER
      },
			anggota_luar_nama	:{
        type: Sequelize.STRING
      },
			mhs_nama	:{
        type: Sequelize.STRING
      },
			statuspen_id	: {
        type: Sequelize.INTEGER
      },
			statuspen_nama	:{
        type: Sequelize.STRING
      },
			id_bidang_pen	:{
        type: Sequelize.STRING
      },
			bidang_pen_nama	:{
        type: Sequelize.STRING
      },
			skim_nama	:{
        type: Sequelize.STRING
      },
			skim_id	: {
        type: Sequelize.INTEGER
      },
			program_id	: {
        type: Sequelize.INTEGER
      },
			program_nama	:{
        type: Sequelize.STRING
      },
			is_dosen	: {
        type: Sequelize.INTEGER
      },
			PENELITIAN_NOMOR_SK_SELESAI	: {
        type: Sequelize.INTEGER.UNSIGNED(9)
      },
			nip_kepegawaian: {
        type: Sequelize.INTEGER.UNSIGNED(18)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Penelitians');
  }
};