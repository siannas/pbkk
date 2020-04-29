import Module from './Master';

const instance = new Module('/api/satuankerja');

instance.options.columns = [
    { type: 'numeric', title:'Jenis SatKer', name:'JenisSatKerId', width:100, },
    { type: 'text', title:'Induk SatKer', name:'IndukSatKerId', wordWrap:true, width:300, },
    { type: 'text', title:'Nama', name:'nama', wordWrap:true, align:'left', width:300, },
    { type: 'text', title:'Email', name:'email', wordWrap:true, align:'left', width:300, },
    { type: 'text', title:'Level Unit', name:'levelUnit', wordWrap:true, align:'left', width:300, },
    { type: 'calendar', title:'Expired Date ', name:'expiredDate', width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Create Date ', name:'createDate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Last Update ', name:'lastUpdate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
]


export default instance.options;