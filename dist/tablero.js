"use strict";
var Tablero = /** @class */ (function () {
    function Tablero(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.casillas = [];
        for (var i = 0; i < filas; i++) {
            this.casillas[i] = [];
        }
        this.inicialitzarCasillas();
    }
    Tablero.prototype.getFilas = function () {
        return this.filas;
    };
    Tablero.prototype.getColumnas = function () {
        return this.columnas;
    };
    Tablero.prototype.getCasillas = function () {
        return this.casillas;
    };
    Tablero.prototype.setCasillas = function (casillas) {
        this.casillas = casillas;
    };
    Tablero.prototype.inicialitzarCasillas = function () {
        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                if (Math.random() < 0.2) {
                    this.casillas[i][j] = new Celda(true);
                }
                else {
                    this.casillas[i][j] = new Celda(false);
                }
            }
        }
        console.table(this.casillas);
    };
    return Tablero;
}());
