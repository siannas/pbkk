export const ArrayOfJsonToArray = (json) => {
    var result = [];
    json.forEach(element => {
        var a = [];
        for(var val in element){
            a.push(element[val])
        }        

        result.push(a);
    });
    
    return result;
}

export const JsonToArray = (json) => {
    var result = [];
    for(var val in json){
        result.push(json[val])
    } 
    
    return result;
}

