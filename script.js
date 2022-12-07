
var RegistroEmpleados=new Array();
function agregarRegistro()
{
    var registro = new Array();

    registro =[

        RegistroEmpleados.length+1,
        document.getElementById("apellido-paterno").value,
        document.getElementById("apellido-materno").value,
        document.getElementById("nombre").value,
        document.getElementById("fecha-nacimiento").value,
        document.getElementById("area").value
    ];

    RegistroEmpleados.push(registro)
    actualizar();
}


function actualizar() {
    $('#tbRegistros  tbody tr').remove();
    for (let i = 0; i < RegistroEmpleados.length; i++) 
    {
    var htmlTags = 
        '<tr>'+
        '<td hidden >'+ RegistroEmpleados[i][0] + '</td>'+
        '<td>' + RegistroEmpleados[i][1] + '</td>'+
        '<td>' + RegistroEmpleados[i][2] + '</td>'+
        '<td>' + RegistroEmpleados[i][3] + '</td>'+
        '<td>' + RegistroEmpleados[i][4] + '</td>'+
        '<td>' + RegistroEmpleados[i][5] + '</td>'+
        '</tr>';

        $('#tbRegistros tbody').append(htmlTags);    

    } 
    var ultimaFila = null;
    var colorOriginal;
    $(Inicializar);
    function Inicializar() {
    $('#tbRegistros tr').click(function () {
        if (ultimaFila != null) {
            ultimaFila.css('background-color', colorOriginal)
        }
        colorOriginal = $(this).css('background-color');
        $(this).css('background-color', 'rgba(117, 190, 218, 0.5)');
        ultimaFila = $(this);
    });
}
    
    $('#tbRegistros tr').on('click', function(){
        var dato = $(this).find('td:first').html();
        $('#id').val(dato);
      });
}

function Eliminar ()

{
   var dato =document.getElementById("id").value 
var tempResgistro = [];
    for (let i = 0; i < RegistroEmpleados.length; i++) 
    { 
        if (RegistroEmpleados[i][0]!=dato)
        {
            tempResgistro.push(RegistroEmpleados[i]);
        }

    }
    RegistroEmpleados= tempResgistro ;
     actualizar();
    
   
}
