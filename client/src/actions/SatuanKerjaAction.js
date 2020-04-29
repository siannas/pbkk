import Module from './Master';

const instance = new Module('/api/satuankerja');

instance.options.columns = [
    { type: 'dropdown', title:'Jenis SatKer', name:'JenisSatKerId', width:150, wordWrap:true,
            url: '/api/jenissatker/category', 
            autocomplete:true},
    { type: 'dropdown', title:'Induk SatKer', name:'IndukSatKerId', width:300, wordWrap:true,
            url: '/api/satuankerja/category', 
            autocomplete:true},
    { type: 'text', title:'Nama', name:'nama', wordWrap:true, align:'left', width:300, },
    { type: 'text', title:'Email', name:'email', wordWrap:true,  width:100, },
    { type: 'text', title:'Level Unit', name:'levelUnit', wordWrap:true,  width:100, },
    { type: 'calendar', title:'Create Date ', name:'createDate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Last Update ', name:'lastUpdate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Expired Date ', name:'expiredDate', width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
]


export default instance.options;