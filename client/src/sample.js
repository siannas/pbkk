import React from "react";
import ReactDOM from "react-dom";
import jexcel from "jexcel";

// import "./styles.css";
import "../node_modules/jexcel/dist/jexcel.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.options = props.options;
  }

  componentDidMount = function() {
    this.el = jexcel(ReactDOM.findDOMNode(this).children[0], this.options);
  };

  addRow = function() {
    this.el.insertRow();
  };

  render() {
    return (
      <div>
        <div />
        <br />
        <input
          type="button"
          value="Add new row"
          onClick={() => this.addRow()}
        />
      </div>
    );
  }
}

var data = [
  ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
  ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
];

var handler = function(obj, cell, val) {
  // console.log('My table id: ' + $(obj).prop('id'));
  // console.log('Cell changed: ' + $(cell).prop('id'));
  // console.log('Value: ' + val);
};

var insertrow = function(obj) {
  // alert('new row added on table: ' + $(obj).prop('id'));
}

var deleterow = function(obj) {
  // alert('row excluded on table: ' + $(obj).prop('id'));
}

var options = {
  data: data,
  columns: [
    { type: 'text', title:'id', width:120, readOnly:true, },
    { type: 'dropdown', title:'Make', width:200, source:[ "Alfa Romeo", "Audi", "Bmw" ] },
    { type: 'calendar', title:'Available', width:200 },
    { type: 'image', title:'Photo', width:120 },
    { type: 'checkbox', title:'Stock', width:80 },
    { type: 'numeric', title:'Price', width:100, mask:'$ #.##,00', decimal:',' },
    { type: 'color', width:100, render:'square', }
  ],
  allowDeleteColumn: false ,
  allowRenameColumn: false,
  columnSorting: false,
  onchange:handler,
  oninsertrow:insertrow,
  ondeleterow:deleterow,
  updateTable:function(instance, cell, col, row, val, label, cellName){
   // Odd row colours
    if (row % 2) {
      cell.style.backgroundColor = '#edf3ff';
    }
  }
};

export default Table;