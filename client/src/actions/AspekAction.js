import Module from './Master';

const instance = new Module('/api/aspek');

instance.options.columns = [
    { type: 'numeric', title:'Id', name:'id', width:100, },
    { type: 'text', title:'Aspek', name:'aspek', wordWrap:true, align:'left',  width:200, },
    { type: 'text', title:'Komponen Aspek',  name:'komponenAspek', wordWrap:true, align:'left',  width:200, },
]


export default instance.options;