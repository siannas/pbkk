import axios from "axios";
import { ArrayOfJsonToArray, JsonToArray } from "../utils/JsonUtil.mjs";

var tableKu = null;

var changerow = function(obj, cell, x, y, value) {
    var arr = tableKu.getRowData(y);
    var trueid = arr[0];
    arr[x] = value;
    
    const data = {
        trueid: trueid,
        id: arr[0],
        KategoriUnitId: arr[1],
        nama: arr[2]
    };

    axios
        .post("/api/unit/update", data)
        .then(res =>{
            alert("Success");
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
};

var deleterow = async function(obj, row) {
    var id = tableKu.getValueFromCoords(0, row);

    const data = {
        id: id
    };
    axios
        .post("/api/unit/delete", data)
        .then(res =>{
            alert("Success");
            return true;
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
}

var addNewRow = async function(obj, row) {
    axios
        .post("/api/unit/create")
        .then(res =>{
            alert("Success");
            console.log(res.data.newData);
            tableKu.setRowData(row+1, res.data.tes);
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
}
    
var options = {
    setTable: async function(tabel){
        tableKu = tabel;

        while (true){
            var n = 0;
            
            try {
                const response = await axios.get("/api/unit/read");
                console.log(response.data.rows)
                tableKu.setData( response.data.rows, true);        
                break;
            } catch (error) {
                console.log(`retrive data : try ${++n}`);
            }

            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
    },
    data:  null,
    columns: [
        { type: 'numeric', title:'id', name:'id', width:100, },
        { type: 'dropdown', title:'kategori unit', name:'KategoriUnitId', width:200, 
            url: '/api/kategoriunit/category', 
            autocomplete:true},
        { type: 'text', title:'nama', name:'nama',  width:200, },
        
    ],
    allowDeleteColumn: false ,
    allowRenameColumn: false,
    columnSorting: false,
    allowManualInsertColumn: false,
    allowManualInsertRow: false,
    allowInsertColumn: false,
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