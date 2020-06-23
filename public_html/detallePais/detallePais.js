
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const code = urlParams.get('code');
    $.ajax({
        method: "get",
        dataType: "json",
        crossDomain: true,
        url: "https://www.countryflags.io/"+code+"/flat/64.png"
    }).done(function(data){
        $("#titulo").text("Resumen del Pais "+name);
        $("#bandera-div").append(data);
    });
    $.ajax({
        method: "get",
        dataType: "json",
        crossDomain: true,
        url: "https://api.covid19api.com/total/dayone/country/"+code+"/status/confirmed"
    }).done(function(data){
        var lista = data;
        var contentHtml = "";
        $.each(lista, function (i, pais) {
                                contentHtml += "<tr>";
                                contentHtml += "<td>" + pais.Date + "</td>";
                                contentHtml += "<td>" + pais.Cases + "</td>";
                                contentHtml += "</tr>";
                                });
                             $("#casos-pais").html(contentHtml);
    });
    
    

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service
});
