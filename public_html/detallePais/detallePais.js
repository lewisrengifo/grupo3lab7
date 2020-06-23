
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
                                contentHtml += "<td>" + (i + 1) + "</td>";
                                contentHtml += "<td>" + capital+ "</td>";
                                contentHtml += "<td>" + poblacion + "</td>";
                                contentHtml += "<td>" + subregion + "</td>";
                              contentHtml += "<td>< href='/detalle/' "+ pais.CountryCode + ">editar </button></td>";
                               contentHtml += "</tr>";
                         contentHtml += "</tbody>";
                             $(".table").html(contentHtml);
        
    }).fail(function(err){
        console.log(err);
    });
    
    

    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service
});
