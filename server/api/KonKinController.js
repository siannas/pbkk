'use strict';
var express = require('express');
const router = express.Router();
const sequelize = require('../models/index')['sequelize'];
const Op = sequelize.Op;

const IndikatorSatuanKerja = require('../models/index')['IndikatorSatuanKerja'];
const SatuanKerja = require('../models/index')['SatuanKerja'];
const IndikatorPeriode = require('../models/index')['IndikatorPeriode'];
const MasterIndikator = require('../models/index')['MasterIndikator'];
const Aspek = require('../models/index')['Aspek'];

const List = {
    "Aktuaria": "Departemen Aktuaria",
    "Arsitektur": "Departemen Arsitektur",
    "Biologi": "Departemen Biologi",
    "DesainInterior": "Departemen Desain Interior",
    "DesainKomunikasiVisual": "Departemen Desain Komunikasi Visual",
    "DesainProduk": "Departemen Desain Produk",
    "Fisika": "Departemen Fisika",
    "Kimia": "Departemen Kimia",
    "ManajemenBisnis": "Departemen Manajemen Bisnis",
    "ManajemenTeknologi": "Departemen Manajemen Teknologi",
    "Matematika": "Departemen Matematika",
    "PerencanaanWilayahKota": "Departemen Perencanaan Wilayah Kota",
    "SistemInformasi": "Departemen Sistem Informasi",
    "StatistikaBisnis": "Departemen Statistika Bisnis",
    "Statistika": "Departemen Statistika",
    "StudiPembangunan": "Departemen Studi Pembangunan",
    "TeknikBiomedik": "Departemen Teknik Biomedik",
    "TeknikElektroOtomasi": "Departemen Teknik Elektro Otomasi",
    "TeknikElektro": "Departemen Teknik Elektro",
    "TeknikFisika": "Departemen Teknik Fisika",
    "TeknikGeofisika": "Departemen Teknik Geofisika",
    "TeknikGeomatika": "Departemen Teknik Geomatika",
    "TeknikInformatika": "Departemen Teknik Informatika",
    "TeknikInfrastrukturSipil": "Departemen Teknik Infrastruktur Sipil",
    "TeknikInstrumentasi": "Departemen Teknik Instrumentasi",
    "TeknikKelautan": "Departemen Teknik Kelautan",
    "TeknikKimiaIndustri": "Departemen Teknik Kimia Industri",
    "TeknikKimia": "Departemen Teknik Kimia",
    "TeknikKomputer": "Departemen Teknik Komputer",
    "TeknikLingkungan": "Departemen Teknik Lingkungan",
    "TeknikMaterialMetalurgi": "Departemen Teknik Material dan Metalurgi",
    "TeknikMesinIndustri": "Departemen Teknik Mesin Industri",
    "TeknikMesin": "Departemen Teknik Mesin",
    "TeknikPerkapalan": "Departemen Teknik Perkapalan",
    "TeknikSipil": "Departemen Teknik Sipil",
    "TeknikSistemIndustri": "Departemen Teknik Sistem dan Industri",
    "TeknikSistemPerkapalan": "Departemen Teknik Sistem Perkapalan",
    "TeknikTransportasiLaut": "Departemen Teknik Transportasi Laut",
    "TeknologiInformasi": "Departemen Teknologi Informasi",
    "Civplan": "Fakultas Teknik Sipil, Perencanaan, dan Kebumian",
    "Creabiz": "Fakultas Desain Kreatif dan Bisnis Digital",
    "Electics": "Fakultas Teknologi Elektro dan Informatika Cerdas",
    "Indsys": "Fakultas Teknologi Industri dan Rekayasa Sistem",
    "Martech": "Fakultas Teknologi Kelautan",
    "Scientics": "Fakultas Sains dan Analitika Data",
    "Vocation": "Fakultas Vokasi"
}

router.get('/read/:satker', async (req, res) => {
    // IndikatorSatuanKerja.findAll({
    //     include: [
    //         {
    //             model: IndikatorPeriode,
    //             attributes: ['id'],
    //             include: {
    //                 model: MasterIndikator,
    //                 attributes: ['nama'],
    //                 include: {
    //                     model: Aspek,
    //                 },

    //             },

    //         },
    //         {
    //             model: SatuanKerja,
    //             attributes: ['id','nama'],
    //             where: {
    //                 nama: "Departemen Arsitektur"
    //             }

    //         },
    //     ]
    // }).then((rows) => {
    //     return res.status(200).json(rows);
    // });

    const satkerku = List[req.params.satker];

    if(typeof satkerku == 'undefined'){
        return res.status(404)        // HTTP status 404: NotFound
            .send('Not found');
    }

    var myquery = `SELECT [IndikatorSatuanKerja].[id], 
                    [IndikatorSatuanKerja].[bobot], 
                    [IndikatorSatuanKerja].[target], 
                    [IndikatorSatuanKerja].[capaian],
                    [MasterIndikator].[nama] AS [indikatorKinerja],  
                    [Aspek].[aspek] AS [aspek], 
                    [Aspek].[komponenAspek] AS [komponenAspek], 
                    [SatuanKerja].[nama] AS [SatuanKerja] 

                    FROM [IndikatorSatuanKerjas] AS [IndikatorSatuanKerja] 
                    LEFT OUTER JOIN [IndikatorPeriodes] AS [IndikatorPeriode] ON [IndikatorSatuanKerja].[IndikatorPeriodeId] = [IndikatorPeriode].[id] 
                    LEFT OUTER JOIN [MasterIndikators] AS [MasterIndikator] ON [IndikatorPeriode].[MasterId] = [MasterIndikator].[id] 
                    LEFT OUTER JOIN [Aspeks] AS [Aspek] ON [MasterIndikator].[AspekId] = [Aspek].[id] 
                    INNER JOIN [SatuanKerjas] AS [SatuanKerja] ON [IndikatorSatuanKerja].[SatKerId] = [SatuanKerja].[id] AND [SatuanKerja].[nama] = N'${satkerku}';`

    sequelize.query(myquery,{ raw: true  } ).then( (rows) => {
        return res.status(200).json(rows[0]);
    });
})

module.exports = router;