import Module from './Master';

const instance = new Module('/api/masterindikator');

instance.options.columns = [
    { type: 'numeric', title:'Id', name:'id', width:50, },
    { type: 'text', title:'Nama', name:'nama', wordWrap:true, align:'left',  width:200, },
    { type: 'dropdown', title:'Aspek', name:'AspekId', width:200, 
            url: '/api/aspek/category', 
            autocomplete:true},
    { type: 'dropdown', title:'Pembilang', name:'PembilangId', width:150, wordWrap:true,
            url: '/api/datadasar/category', 
            autocomplete:true},
    { type: 'dropdown', title:'Penyebut', name:'PenyebutId', width:150, wordWrap:true,
            url: '/api/datadasar/category', 
            autocomplete:true},
    { type: 'text', title:'Deskripsi', name:'deskripsi', wordWrap:true, align:'left',  width:400, },
    { type: 'numeric', title:'Default Bobot', name:'defaultBobot', width:100, },
    { type: 'calendar', title:'Expired Date ', name:'expiredDate', width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Create Date ', name:'createDate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
    { type: 'calendar', title:'Last Update ', name:'lastUpdate',  width:200, options: { format:'DD/MM/YYYY HH24:MI', time:1 }, },
]

export default instance.options;