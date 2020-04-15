import axios from "axios";
import $ from "jquery"
import jexcel from "jexcel";
import { ArrayOfJsonToArray, JsonToArray } from "../utils/JsonUtil.mjs";

var tableKu = null;

var changerow = function(obj, cell, x, y, value) {
    var arr = tableKu.getRowData(y);
    var trueid = arr[0];
    arr[x] = value;
    
    const data = {
        trueid: trueid,
        id: arr[0],
        nama: arr[1]
    };

    axios
        .post("/api/kategoriunit/update", data)
        .then(res =>{
            alert("Success");
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
};

var deleterow = function(obj, row) {
    var id = tableKu.getValueFromCoords(0, row);

    const data = {
        id: id
    };
    axios
        .post("/api/kategoriunit/delete", data)
        .then(res =>{
            alert("Success");
            return true;
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
}

var addNewRow = function(obj, row) {
    axios
        .post("/api/kategoriunit/create")
        .then(res =>{
            alert("Success");
            tableKu.setRowData(row+1, JsonToArray(res.data.newData));
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
}
    
var options = {
    setTable: async function(tabel){
        tableKu = tabel;
        try {
            const response = await axios.get("/api/kategoriunit/read");
            console.log(response);
            this.data = ArrayOfJsonToArray(response.data.rows);
            
            tableKu.setData(this.data, false);
        } catch (error) {
            console.log(error);
        }

    },
    data: null,
    columns: [
        { type: 'numeric', title:'id', width:100, },
        { type: 'text', title:'nama', width:200, },
    ],
    allowDeleteColumn: false ,
    allowRenameColumn: false,
    columnSorting: false,
    onbeforechange:changerow,
    onbeforedeleterow:deleterow,
    oninsertrow:addNewRow,
    updateTable:function(instance, cell, col, row, val, label, cellName){
     // Odd row colours
        if (row % 2) {
            cell.style.backgroundColor = '#edf3ff';
        }
    }
};

export default options;