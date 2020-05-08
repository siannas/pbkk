import axios from "axios";
const fs = require("fs");
const { Parser } = require('json2csv');
const json2csvParser = new Parser();

var Module = {
    read: async function(){
        var response = await axios.get("api/dosen/read");

        // const csv = json2csvParser.parse(response);

        // fs.writeFile("dosen.csv", csv, function(error) {
        //     if (error) throw error;
        //     console.log("dosen.csv successfully!");
        // });
        console.log(response.data);
        return response.data;
    }
}

export default Module;