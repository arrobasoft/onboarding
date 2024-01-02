
var ingredientes = [
    {
        'tipo': 'pasta',
        'ingrediente': '400 g de pasta (puedes usar tu forma favorita)'
    },
    {
        'tipo': 'guiso',
        'ingrediente': '500 g de carne molida (puede ser de res, cerdo, o una mezcla)'
    }
];

function verIngredientes(tipo){
    var buffer = [];
    ingredientes.forEach(element => {
        if (element.tipo === tipo){
            buffer.push('<li>' + element.ingrediente + '</li>');
        }
    });
    return buffer.join('');
}
