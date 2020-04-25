import axios from "axios";

var MyModule = function (url) {

    var baseurl = url;
    var tableKu = null;

    var deleterow = async function (obj, row) {
        var id = tableKu.getValueFromCoords(0, row);

        const data = {
            id: id
        };
        axios
            .post(baseurl + "/delete", data)
            .then(res => {
                alert("Success");
                return true;
            })
            .catch(err => {
                alert("Error");
                console.log(err);
            });

        return true;
    };

    var changerow = function (obj, cell, x, y, value) {
        var arr = tableKu.getRowData(y);
        var trueid = arr[0];
        arr[x] = value;

        const data = {
            trueid: trueid,
            id: arr[0],
            nama: arr[1]
        };

        axios
            .post(baseurl + "/update", data)
            .then(res => {
                alert("Success");
            })
            .catch(err => {
                alert("Error");
                console.log(err);
            });
    };


    var addNewRow = async function (obj, row) {
        axios
            .post("/api/unit/create")
            .then(res => {
                alert("Success");
                console.log(res.data.newData);
                tableKu.setRowData(row + 1, res.data.tes);
            })
            .catch(err => {
                alert("Error");
                console.log(err);
            });
    }

    async function initTable (tabel) {
        tableKu = tabel;

        while (true) {
            var n = 0;

            try {
                const response = await axios.get(baseurl + "/read");
                console.log(response.data);
                tableKu.setData(response.data.rows, true);
                break;
            } catch (error) {
                console.log(`retrive data : try ${++n}`);
            }

            await new Promise(resolve => setTimeout(resolve, 500));
        }

    }

    var options = {
        setTable: initTable,
        data: [],
        columns: [],
        allowDeleteColumn: false,
        allowRenameColumn: false,
        columnSorting: false,
        allowManualInsertColumn: false,
        allowManualInsertRow: false,
        allowInsertColumn: false,
        onbeforechange: changerow,
        onbeforedeleterow: deleterow,
        oninsertrow: addNewRow,
        updateTable: function (instance, cell, col, row, val, label, cellName) {
            // Odd row colours
            if (row % 2) {
                cell.style.backgroundColor = '#edf3ff';
            }
        }
    };


    this.options = options;

    return this;
};

export default MyModule;