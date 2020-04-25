'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DataDasars', 
    [
        {
          "id": 1,
          "nama": "Jumlah prodi terakreditasi internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 2,
          "nama": "Jumlah Penelitian dengan Mitra dari PT Luar Negeri",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 3,
          "nama": "Jumlah Penelitian Kerjasama Internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 4,
          "nama": "Jumlah Program Studi Terakreditasi A",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 5,
          "nama": "Jumlah Publikasi di Jurnal Internasional Terindeks Scopus atau minimum setara",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 6,
          "nama": "Jumlah Publikasi di Jurnal Internasional Terindeks Scopus atau minimum setara sebagai penulis pertama atau corresponding author",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 7,
          "nama": "Jumlah Publikasi Internasional Terindeks Scopus atau minimum setara",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 8,
          "nama": "Jumlah Publikasi Internasional Terindeks Scopus kumulatif",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 9,
          "nama": "Jumlah Sitasi dari Publikasi Internasional Terindeks Scopus kumulatif",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 10,
          "nama": "Total Nilai H-index Scopus Dosen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 11,
          "nama": "Jumlah kejuaraan ranking 1 di lomba tingkat nasional yang diraih Mahasiswa atau Tim Mahasiswa",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 12,
          "nama": "Jumlah Penghargaan diterima Dosen di kegiatan Berskala Nasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 13,
          "nama": "Jumlah tim ilmiah kemahasiswaan yang didanai dalam rangka PIMNAS",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 14,
          "nama": "Jumlah Judul Penelitian",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 15,
          "nama": "Jumlah judul penelitian yang Diketuai oleh Dosen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 16,
          "nama": "jumlah lulusan Program S3 tepat waktu",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 17,
          "nama": "Jumlah mahasiswa yang mendapatkan sertifikasi kompetensi",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 18,
          "nama": "Jumlah Publikasi Bersama (Co-Authorship) Internasional kumulatif",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 19,
          "nama": "mata kuliah daring synchronous (blended learning)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 20,
          "nama": "jumlah lulusan Program S2 tepat waktu",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 21,
          "nama": "Jumlah mahasiswa berwirausaha",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 22,
          "nama": "jumlah lulusan Program S1 atau D4 tepat waktu",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 23,
          "nama": "Jumlah Paper di Jurnal Nasional Terakreditasi",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 24,
          "nama": "Jumlah Publikasi di Seminar Internasional Terindeks Scopus",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 25,
          "nama": "Jumlah lulusan yang langsung bekerja dalam jangka waktu 1 tahun setelah kelulusan",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 26,
          "nama": "mata kuliah daring asynchronous (MOOC)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 27,
          "nama": "Jumlah mahasiswa yang berprestasi (Juara 1, 2, dan 3 ) ditingkat Nasional (lomba kelompok)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 28,
          "nama": "Jumlah mahasiswa yang berprestasi (Juara 1, 2, dan 3 ) ditingkat Nasional (lomba perseorangan)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 29,
          "nama": "Jumlah kejuaraan di lomba tingkat internasional yang dijuarai Mahasiswa ITS",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 30,
          "nama": "Jumlah Dosen yang Diundang sebagai Invited atau Keynote Speaker di Seminar Internasional atau Narasumber",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 31,
          "nama": "Jumlah Dosen yang menjadi Editor publikasi Internasional terindeks global",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 32,
          "nama": "Jumlah Penghargaan diterima Dosen di kegiatan Berskala Internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 33,
          "nama": "Jumlah mahasiswa inbound",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 34,
          "nama": "Jumlah Kegiatan Internasional yang Diselenggarakan (kuliah tamu, workshop dan seminar internasional)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 35,
          "nama": "Jumlah mahasiswa yang berprestasi (Juara 1, 2, dan 3 ) ditingkat Internasional (lomba kelompok)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 36,
          "nama": "Jumlah mahasiswa yang berprestasi (Juara 1, 2, dan 3 ) ditingkat Internasional (lomba perseorangan)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 37,
          "nama": "Jumlah Dosen yang menjadi Reviewer publikasi Internasional terindeks global",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 38,
          "nama": "Jumlah mahasiswa outbound",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 39,
          "nama": "Jumlah Dosen yang menjadi Anggota Asosiasi Profesi Internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 40,
          "nama": "Jumlah prodi yang menyelenggarakan Kelas Internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 41,
          "nama": "Jumlah Temuan Irjen/BPK/KAI",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 42,
          "nama": "Jumlah Mahasiswa Pascasarjana",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 43,
          "nama": "Jumlah Visiting Professor,Lecturer,Researcher ke PTLN mitra",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 44,
          "nama": "Jumlah dosen memperoleh sertifikasi kompetensi/profesional nasional atau internasional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 45,
          "nama": "Jumlah mahasiswa yang mengikuti kegiatan merdeka belajar",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 46,
          "nama": "Jumlah nama PTLN mitra yang mengisi kuesioner QS",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 47,
          "nama": "Jumlah Pendaftaran HKI atau Paten (nominal)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 48,
          "nama": "Jumlah prodi yang menerapkan pembelajaran Kampus Merdeka",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 49,
          "nama": "Jumlah sertifikasi LBE (lab based education)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 50,
          "nama": "Jumlah Mahasiswa S1 Baru Berbeasiswa Afirmasi (termasuk program bidik misi atau kartu indonesia pintar)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 51,
          "nama": "Jumlah Mahasiswa S3 yang teregistrasi",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 52,
          "nama": "Jumlah Revenue dari Mahasiswa (SPP)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 53,
          "nama": "Jumlah mahasiswa yang mengikuti program magang industri",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 54,
          "nama": "Jumlah layanan yang telah diintegrasikan dengan layanan ULT (Unit Layanan Terpadu)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 55,
          "nama": "Jumlah Mahasiswa S2 yang teregistrasi",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 56,
          "nama": "Jumlah Visiting Professor/Lecturer/Researcher dari PTLN mitra",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 57,
          "nama": "Ketersediaan profil unit berupa PPT dan video (dalam bahasa Indonesia dan English)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 58,
          "nama": "jumlah buku ber-ISBN dan dipasarkan kumulatif 3 tahun terakhir)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 59,
          "nama": "Jumlah Revenue dari Mahasiswa (UKT, SPI, SPP)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 60,
          "nama": "Tingkat Maturitas Penyelenggaraan Sistem Pengendalian Intern Pemerintah (SPIP)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 61,
          "nama": "Jumlah kelas mata kuliah/praktikum yang dikelola atau dilayani oleh Laboratorium",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 62,
          "nama": "Jumlah Mahasiswa yang terlibat dalam penelitian Dosen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 63,
          "nama": "Jumlah Prodi Baru",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 64,
          "nama": "jumlah dosen yang mengalami kenaikan jabatan fungsional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 65,
          "nama": "Jumlah Dosen yang Mulai Mengikuti Pendidikan S3 Pada Tahun Berjalan",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 66,
          "nama": "Jumlah Dosen dalam Jabatan Lektor Kepala",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 67,
          "nama": "Jumlah Dosen dalam Jabatan Profesor",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 68,
          "nama": "Jumlah dosen yang memiliki pengalaman bekerja di industri atau lembaga profesi minimal 1 tahun dan/atau bekerja di luar negeri minimal 1 tahun",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 69,
          "nama": "Jumlah Dosen bergelar S3",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 70,
          "nama": "jumlah dosen PNS dan NON-PNS yang mendapatkan jabatan fungsional pertama",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 71,
          "nama": "Jumlah Dosen yang Mengikuti Pelatihan atau Workshop",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 72,
          "nama": "Jumlah Tenaga Kependidikan yang Mengikuti Pelatihan atau Workshop",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 73,
          "nama": "Rata-rata waktu dosen mendapatkan jabatan fungsional pertama",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 74,
          "nama": "Jumlah Dosen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 75,
          "nama": "Terlaksananya Indeks Kualitas Lingkungan dan K3L lebih dari 2",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 76,
          "nama": "Terlaksananya toilet bersih lebih dari 80% ",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 77,
          "nama": "Terlaksananya program 3 R Sampah (Reduce, Reuse, Recycle)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 78,
          "nama": "Jumlah kegiatan pengabdian kepada masyarakat yang Diketuai Dosen Lab terkait",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 79,
          "nama": "Jumlah Kerjasama dengan Industri yang diketuai Dosen dari Lab terkait",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 80,
          "nama": "Nilai Kerjasama dengan Industri dengan kontrak atas nama ITS  (Rp juta)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 81,
          "nama": "Jumlah mahasiswa yang terlibat dalam pengabdian Dosen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 82,
          "nama": "Jumlah Program Studi",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 83,
          "nama": "Jumlah lulusan Program S3",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 84,
          "nama": "Jumlah Mahasiswa",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 85,
          "nama": "Jumlah lulusan Program S2",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 86,
          "nama": "Jumlah Mahasiswa S1 atau D4",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 87,
          "nama": "Jumlah lulusan Program S1 atau D4",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 88,
          "nama": "Jumlah lulusan",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 89,
          "nama": "Jumlah Mahasiswa Baru S1",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 90,
          "nama": "Jumlah Mahasiswa (Program Pasca Sarjana)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 91,
          "nama": "Jumlah Departemen",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 92,
          "nama": "jumlah dosen (diluar gol IV-E)",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 93,
          "nama": "Jumlah Dosen Bergelar S2 non TB+IB",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 94,
          "nama": "jumlah dosen PNS dan NON-PNS yang belum punya jabatan fungsional",
          "createDate": new Date(),
           "lastUpdate": new Date()
       },
        {
          "id": 95,
          "nama": "Jumlah Tenaga Kependidikan",
          "createDate": new Date(),
           "lastUpdate": new Date()
       }
    ], 
    {},
    {
        'id': {
          autoIncrement: true
        }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DataDasars', null, {});
  }
};
