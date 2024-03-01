"use strict";
var Juego = /** @class */ (function () {
    function Juego(filas, columnas) {
        this.tauler = new Tablero(filas, columnas);
        this.gameOver = false;
        console.log("Tablero creado correctamente!");
    }
    Juego.prototype.revelarCasilla = function (row, col) {
        if (!this.gameOver) {
            var casilla = this.tauler.getCasillas(row, col);
            if (!casilla.getIsRevealed() && !casilla.getIsFlag()) {
                casilla.setIsRevealed(true);
                if (casilla.getIsBoomb()) {
                    this.gameOver = true;
                    console.log("¡Has perdido!");
                    // Aquí podrías mostrar un mensaje de juego perdido y revelar todas las casillas
                    this.revelarTodasLasCasillas();
                }
                else {
                    // Si la casilla no es una bomba, revelar recursivamente las casillas adyacentes si no tienen bombas adyacentes
                    if (casilla.getMinasAlrededor() === 0) {
                        this.revelarCasillasAdyacentes(row, col);
                    }
                }
            }
        }
    };
    Juego.prototype.revelarCasillasAdyacentes = function (row, col) {
        var casillasAdyacentes = this.tauler.getCasillasAdyacentes(row, col);
        for (var _i = 0, casillasAdyacentes_1 = casillasAdyacentes; _i < casillasAdyacentes_1.length; _i++) {
            var _a = casillasAdyacentes_1[_i], x = _a[0], y = _a[1];
            this.revelarCasilla(x, y);
        }
    };
    Juego.prototype.marcarCasilla = function (row, col) {
        if (!this.gameOver) {
            var casilla = celda.getCasillas(row, col);
            if (!casilla.getIsRevealed()) {
                casilla.setIsFlag(!casilla.getIsFlag());
                // Aquí podrías agregar la lógica para actualizar la interfaz gráfica, si es necesario
            }
        }
    };
    Juego.prototype.revelarTodasLasCasillas = function () {
        var filas = this.tauler.getFilas();
        var columnas = this.tauler.getColumnas();
        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
                var casilla = this.tauler.getCasillas(i, j);
                if (casilla.getIsBoomb()) {
                    // Revela todas las bombas
                    casilla.setIsRevealed(true);
                }
            }
        }
    };
    return Juego;
}());
