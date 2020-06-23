
$(document).ready(function () {
    // TODO, consultas a las web services
    $.ajax({
        method: "GET",
        dataType:"json",
        url:"https://api.covid19api.com/summary"
    }).done(function(data){
        $("#newConfirmed").text(data.Global.NewConfirmed);
        $("#newDeaths").text(data.Global.NewDeaths);
        $("#newRecovered").text(data.Global.NewRecovered);
        $("#totalConfirmed").text(data.Global.TotalConfirmed);
        $("#totalDeaths").text(data.Global.TotalDeaths);
        $("#totalRecovered").text(data.Global.TotalRecovered);
    }).fail(function(err){})
});

// Función para hacer el sort de un array
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
    return '';
}