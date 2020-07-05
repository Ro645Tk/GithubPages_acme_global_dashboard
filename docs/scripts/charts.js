// charts.js Module
export { drawCharts }

// Callback that creates and populates data tables,
// instantiates charts, passes in the data and draws them.
function drawCharts() {
    /*TOD0: Implement function;
   Un dato interesante del Webstorm es que al escribir tod0
   o TOD0 y vamos a TOD0 (6, parte de abajo) sale que en
   nuestro proyecto tenemos un TOD0 y automaticamente al
   darle click nos reidirecciona a donde se encuentra
   dicho TOD0. Es una manera de hacer una pausa en lo que
   estamos implementado y cuando regresamos al trabajo de
   frente nos ubicamos en la zona donde estabamos trabajando
   o donde queremos trabajar. Recordar que el TOD0 significa
   "to do" (por hacer).

   Este metodo (drawCharts) al invocar estas 2 metodos hara que se
   dibujen los 2 graficos. Este metodo drawCharts sera invocado en
   el main.js
   */
    drawPieChart()
    drawAxisTickColors()
}
/*
Aqui tenemos las 2 funciones que se encargan de presntar cada tipo de grafico.
La 1ra muestra un grafico de tipo Pie y la 1da uno de tipo Bar
*/

function drawPieChart() {
    /*
   Entonces aqui le damos parametros de cual es la
   **** que vamos a mostrar y le decimos tambien
   cuales son las opciones
   */
    // Create the data table
    /*
    Evidentemente tod0 esto (o subrayado por verde) es ingorado porque esto
    pertenece a la biblioteca de Google, no esta localmente
    */
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Project Type');
    data.addColumn('number', 'Thousands of Requests');
    data.addRows([
        ['Automation', 3],
        ['Event Processing', 1],
        ['Gamification', 1],
        ['Geofencing', 1],
        ['Internet Of Things', 2]
    ]);
    // Set chart options
    const options = {
        'title': 'Requests by Project Type',
        'width': 500,
        'height': 300
    };
    // Instantiate and draw the pie chart , passing in specified options.
    /*
    Aqui le decimo en que lugar queremos publicar, en el pie_div se plantara
    el grafico
    */
    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data, options);  // se dibuja los datos que necesitamos con las optiones que tenemos

    // Redraw chart on window resize
    $(window).resize(function () {
        chart.draw(data, options);
    })
    /*
    Los pasos son claros para hacer los charts:
    1. Se construye la fuente de datos
    2. Se establecen las opciones
    3. Se instancia el tipo de grafico que queremos
    4. Se dibuja grafico
    */
}

function drawAxisTickColors() {
    // Create the data table
    const data = google.visualization.arrayToDataTable([
        ['City', '2020 Population', '2010 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000 ],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);
    // Set chart options
    const options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: { width: '50%'},
        // Parametros para el eje horizontal
        hAxis: {
            title: 'Total Population',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        // Parametros para el eje vertical
        vAxis: {
            title: 'City',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };

    // Instantiate and draw the Axis Tick Chart, passing in specified options.
    const chart = new google.visualization.BarChart(document.getElementById('axis_div_tick_div'));
    chart.draw(data, options);

    // Redraw chart on window resize
    $(window).resize(function () {
        chart.draw(data, options);
    });
}
