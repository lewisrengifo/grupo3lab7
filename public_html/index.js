
$(document).ready(function () {
    // TODO, consultas a las web services

    
    $.ajax({
        method: "get",
        dataType: "json",
        crossDomain: true,
        url: "https://api.covid19api.com/summary"
    }).done(function(data){

        
        $("#newConfirmed").text(data.Global.NewConfirmed);

        var date= data.Date;
        $("#newConfirmed").text(data.Global.NewConfirmed);

        
         $("#newConfirmed").text(data.Global.NewConfirmed);


        $("#newDeaths").text(data.Global.NewDeaths);
        $("#newRecovered").text(data.Global.NewRecovered);
        $("#totalConfirmed").text(data.Global.TotalConfirmed);
        $("#totalDeaths").text(data.Global.TotalDeaths);
        $("#totalRecovered").text(data.Global.TotalRecovered);



        $("#titulo-resumen-global").text("Resumen a la fecha: " +formatDate(date));
        console.log(formatDate(date));

        


        var listaPaises = data.Countries;
        var contentHtml = "";
        $.each(listaPaises, function (i, pais) {
                                contentHtml += "<tr>";
                                contentHtml += "<td>" + (i + 1) + "</td>";
                                contentHtml += "<td>" + pais.Country + "</td>";
                                contentHtml += "<td>" + pais.TotalConfirmed + "</td>";
                                contentHtml += "<td>" + pais.TotalDeaths + "</td>";
                                contentHtml += "<td>" + pais.TotalRecovered + "</td>";
                                contentHtml += "<td>" + pais.NewConfirmed + "</td>";
                                contentHtml += "<td>" + pais.NewDeaths + "</td>";
                                contentHtml += "<td>" + pais.NewRecovered + "</td>";

                                contentHtml += "<td>" +" "+ "</td>";



                                contentHtml += "<td> <a class='btn btn-primary' href='detallePais/detallePais.html?name="+ pais.Country + "&code="+ pais.CountryCode+ "&slug="+ pais.Slug +"'" +   ">Ver detalles </a></td>" ;

                                contentHtml += "</tr>";

                                });
                             $("#body-paises").html(contentHtml);      
                    });
});


function compare(a, b) {
    // TODO
}
// Función para devolver un formato de fecha
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