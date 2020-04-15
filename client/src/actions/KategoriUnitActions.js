import axios from "axios";
import $ from "jquery"
import jexcel from "jexcel";

var tableKu = null;

var changerow = function(obj, cell, x, y, value) {
    var arr = tableKu.getRowData(y);
    arr[x] = value;
    
    const data = {
        id: arr[0],
        nama: arr[1]
    };

    // axios
    //     .post("/kategoriunit/update", data)
    //     .then(res =>{
    //         alert("Success");
    //     })
    //     .catch(err => {
    //         alert("Error");
    //         console.log(err);
    //     });
};

var deleterow = function(obj, cell, val) {
// alert('row excluded on table: ' + $(obj).prop('id'));
    const data = {
        id: "0",
    };
    axios
        .post("/kategoriunit/delete", data)
        .then(res =>{
            alert("Success");
        })
        .catch(err => {
            alert("Error");
            console.log(err);
        });
}

var data = [
    ['1', 'Honda'],
    ['2', 'Suzuko'],
];

var options = {
    setTable: function(tabel){
        tableKu = tabel;
    },
    data: data,
    columns: [
        { type: 'numeric', title:'id', width:100, },
        { type: 'text', title:'nama', width:200, },
    ],
    allowDeleteColumn: false ,
    allowRenameColumn: false,
    columnSorting: false,
    onbeforechange:changerow,
    onbeforedeleterow:deleterow,
    updateTable:function(instance, cell, col, row, val, label, cellName){
     // Odd row colours
        if (row % 2) {
            cell.style.backgroundColor = '#edf3ff';
        }
    }
};

export default options;