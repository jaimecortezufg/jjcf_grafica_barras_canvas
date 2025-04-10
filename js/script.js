//CAPTURANDO EL OBJETO CANVAS
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

//DATOS O VALORES DE LA GRAFICA
const labels = ["Baloncesto","Beisbol","Futbol"];
const values = [300,200,400];
const colors = ["#E74C3C","#3498DB","#E67E22"];


const chartWidth = canvas.width - 100; //ÁREA HORIZONTAL UTILIZABLE DEL GRÁFICO
const chartHeight = canvas.height -100; //ÁREA VERTICAL UTILIZABLE DEL GRÁFICO
const barWidth = 50; //ANCHO DE CADA BARRA
const gap = (chartWidth - labels.length * barWidth) / (labels.length + 1); //ESPACIO ENTRE BARRAS
const maxValue = 500; //VALOR MÁXIMO DEL EJE "Y"
const numSteps = 5; // CANTIDAD DE DIVISIONES DEL EJE "Y"
const stepValue = maxValue/numSteps;


function drawGrid(){
    //EN ESTA FUNCIÓN SE DIBUJA UNA CUADRICULA
    ctx.strokeStyle = "#CCC";
    ctx.lineWidth = 1;

    for(let i = 0; i<= numSteps; i++){
        const y = canvas.height - 50 - (i * chartHeight/numSteps); //ALTURA DE CADA LÍNEA EN EL EJE Y
        ctx.beginPath();
        ctx.moveTo(50,y);
        ctx.lineTo(canvas.width - 50, y); //POSICION DE LA LÍNEA DE CUADRÍCULA (CAMBIARÁ DE ACUERDO AL CÁLCULO ANTERIOR)
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(stepValue * i,20, y + 5); //SE COLOCARÁ UNA ETIQUETA EN EL EJE "Y" EN LA POSICIÓN EJE X= 20, EJE "Y"= Y+5
    }


    ctx.beginPath();
    ctx.moveTo(50,50); //INICIA EL EJE "Y"
    ctx.lineTo(50,canvas.height - 50);
    ctx.moveTo(50,canvas.height - 50); //INICI EL EJE "X"
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

function drawBars(){
    for(let i=0;i<labels.length; i++){
        const x = 50 + gap * ( i + 1 ) + barWidth * i; //ESTA ES LA POSICIÓN INICIAL DE LA BARRA EN EL EJE "X"
        const barHeight = (values[i]/maxValue) * chartHeight; //ESTA ES LA ALTURA PROPORCIONAL DE CADA BARRA, CONSIDERANDO EL BUCLE FOR
        const y = canvas.height - 50 - barHeight; // ESTA ES LA POSICIÓN "Y" DE LA BARRA (PUEDE CONSIDERARSE COMO ALTURA)

        ctx.fillStyle = colors[i];
        ctx.fillRect(x,y,barWidth,barHeight); //SE DIBUJA EL RECTÁNGULO DE LA BARRA CON LA POSICIÓN Y LA ALTURA
        
        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(values[i],x + barWidth/4, y - 10); //SE COLOCA EL VALOR DE LA BARRA SOBRE LA MISMA

        ctx.fillText(labels[i],x + barWidth/4, canvas.height - 30); //SE COLOCA LA ETIQUETA O NOMBRE DE LA BARRA
    }
}

function drawTitle(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Unidades vendidas en categorías deportivas", canvas.width/2 - 150 , 20); //SE COLOCA UNA LEYENDA O TÍTULO
}

drawGrid();
drawBars();
drawTitle();