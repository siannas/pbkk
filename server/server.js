//MSSQL Instance Creation  
var sqlInstance = require("mssql");

//Database configuration  
var setUp = {
  server: 'localhost',
  database: 'TrialDB',
  user: 'sa',
  password: 'sa',
  port: 1433
};

sqlInstance.connect(setUp)

// To retrieve all the data - Start  
new sqlInstance.Request()
  .query("select * from Course")
  .then(function (dbData) {
    if (dbData == null || dbData.length === 0)
      return;
    console.dir('All the courses');
    console.dir(dbData);
  })
  .catch(function (error) {
    console.dir(error);
  });
// To retrieve all the data - End