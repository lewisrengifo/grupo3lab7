
$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
     const code = urlParams.get('code');

    $.ajax({
        method : "get",
        url: "https://restcountries.eu/rest/v2/alpha/"+code
    }).done(function(data){
        var capital = data.capital;
        var poblacion =data.population;
        var subregion =data.subregion;
        
        var contentHtml = "";
                        contentHtml += "<head>";
                        contentHtml += "<tr>";
                        contentHtml += "<th>caracteristica</h>";
                        contentHtml += "<th>valor</h>";
                        contentHtml += "</tr>";
                        contentHtml += "</head>";
                        contentHtml += "<tbody>";
                        contentHtml += "<tr>";
                                contentHtml += "<tr>";
                               
                                contentHtml += "<td>" + capital+ "</td>";
                                contentHtml += "<td>" + poblacion + "</td>";
                                contentHtml += "<td>" + subregion + "</td>";
                              
                               contentHtml += "</tr>";
                         contentHtml += "</tbody>";
                             $("#caracteristica").html(contentHtml);
        
    }).fail(function(err){
        console.log(err);
    });
    
    

    // Metodo de obtención de parámetros

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
            var date= pais.Date;
                                contentHtml += "<tr>";
                                contentHtml += "<td>" +  formatDate(date)+ "</td>";
                                contentHtml += "<td>" + pais.Cases + "</td>";
                                contentHtml += "</tr>";
                                });
                             $("#casos-pais").html(contentHtml);
    });
    
    

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service
    
});
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    // TODO
    return year+"/" +month+"/" + day;
}