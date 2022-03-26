window.onload = function () {
    var casilla1 = 0;
    var casilla2 = 0;
    var casilla3 = 0;
    var casilla4 = 0;
    var casilla5 = 0;
    var casilla6 = 0;
    var casilla7 = 0;
    var casilla8 = 0;
    var casilla9 = 0;
    var resultado = " ";
    var cont = 1;

    function marcar_ficha(x) {
        switch (x) {
            case "uno":
                casilla1 = verificar_ficha(casilla1, x);
                break;
            case "dos":
                casilla2 = verificar_ficha(casilla2, x);
                break;
            case "tres":
                casilla3 = verificar_ficha(casilla3, x);
                break;
            case "cuatro":
                casilla4 = verificar_ficha(casilla4, x);
                break;
            case "cinco":
                casilla5 = verificar_ficha(casilla5, x);
                break;
            case "seis":
                casilla6 = verificar_ficha(casilla6, x);
                break;
            case "siete":
                casilla7 = verificar_ficha(casilla7, x);
                break;
            case "ocho":
                casilla8 = verificar_ficha(casilla8, x);
                break;
            case "nueve":
                casilla9 = verificar_ficha(casilla9, x);
                break;
        }
        if (auxiliar_condicion() == 1) {
            resultado = "Ganador: Jugador 1";
        } else if (auxiliar_condicion() == 2) {
            resultado = "Ganador: Jugador 2";
        }
        document.getElementById("result").innerHTML = resultado;
    }


    function verificar_ficha(casilla, x) {
        var casilla_selec = casilla;
        if (casilla == 0) {
            if (cont % 2 == 0) {
                document.getElementById(x).value = "O";
                casilla_selec = 2;
            } else {
                document.getElementById(x).value = "X";
                casilla_selec = 1;
            }
            cont++;
        }
        return casilla_selec;
    }

    function auxiliar_condicion() {
        var aux = 0;
        if (casilla1 == 1 && casilla2 == 1 && casilla3 == 1) {
            aux = 1;
        }
        if (casilla3 == 1 && casilla6 == 1 && casilla9 == 1) {
            aux = 1;
        }
        if (casilla9 == 1 && casilla8 == 1 && casilla7 == 1) {
            aux = 1;
        }
        if (casilla7 == 1 && casilla4 == 1 && casilla1 == 1) {
            aux = 1;
        }
        if (casilla1 == 1 && casilla5 == 1 && casilla9 == 1) {
            aux = 1;
        }
        if (casilla3 == 1 && casilla5 == 1 && casilla7 == 1) {
            aux = 1;
        }
        if (casilla4 == 1 && casilla5 == 1 && casilla6 == 1) {
            aux = 1;
        }
        if (casilla2 == 1 && casilla5 == 1 && casilla8 == 1) {
            aux = 1;
        }

        if (casilla1 == 2 && casilla2 == 2 && casilla3 == 2) {
            aux = 2;
        }
        if (casilla3 == 2 && casilla6 == 2 && casilla9 == 2) {
            aux = 2;
        }
        if (casilla9 == 2 && casilla8 == 2 && casilla7 == 2) {
            aux = 2;
        }
        if (casilla7 == 2 && casilla4 == 2 && casilla1 == 2) {
            aux = 2;
        }
        if (casilla1 == 2 && casilla5 == 2 && casilla9 == 2) {
            aux = 2;
        }
        if (casilla3 == 2 && casilla5 == 2 && casilla7 == 2) {
            aux = 2;
        }
        if (casilla4 == 2 && casilla5 == 2 && casilla6 == 2) {
            aux = 2;
        }
        if (casilla2 == 2 && casilla5 == 2 && casilla8 == 2) {
            aux = 2;
        }

        return aux;
    }

    function reiniciar_juego() {
        casilla1 = 0;
        casilla2 = 0;
        casilla3 = 0;
        casilla4 = 0;
        casilla5 = 0;
        casilla6 = 0;
        casilla7 = 0;
        casilla8 = 0;
        casilla9 = 0;
        resultado = " ";
        cont = 1;
        document.getElementById("uno").value = " ";
        document.getElementById("dos").value = " ";
        document.getElementById("tres").value = " ";
        document.getElementById("cuatro").value = " ";
        document.getElementById("cinco").value = " ";
        document.getElementById("seis").value = " ";
        document.getElementById("siete").value = " ";
        document.getElementById("ocho").value = " ";
        document.getElementById("nueve").value = " ";
        document.getElementById("result").innerHTML = " ";
    }

    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var reinicio = document.getElementById('reinicio');

    uno.addEventListener("click", function () {
        marcar_ficha("uno");
    })
    dos.addEventListener('click', function () {
        marcar_ficha("dos");
    })
    tres.addEventListener('click', function () {
        marcar_ficha("tres");
    })
    cuatro.addEventListener('click', function () {
        marcar_ficha("cuatro");
    })
    cinco.addEventListener('click', function () {
        marcar_ficha("cinco");
    })
    seis.addEventListener('click', function () {
        marcar_ficha("seis");
    })
    siete.addEventListener('click', function () {
        marcar_ficha("siete");
    })
    ocho.addEventListener('click', function () {
        marcar_ficha("ocho");
    })
    nueve.addEventListener('click', function () {
        marcar_ficha("nueve");
    })
    reinicio.addEventListener('click', function () {
        reiniciar_juego();
    })
}