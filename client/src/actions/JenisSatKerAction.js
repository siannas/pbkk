import Module from './Master';

const instance = new Module('/api/jenissatker');

instance.options.columns = [
    { type: 'numeric', title:'Id', name:'id', width:100, },
    { type: 'text', title:'Nama', name:'nama', wordWrap:true, align:'left', width:300, },
    { type: 'calendar', title:'Create Date ', name:'createDate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Last Update ', name:'lastUpdate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Expired Date ', name:'expiredDate', width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
]


export default instance.options;