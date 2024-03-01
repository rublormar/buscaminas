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
    // public placeBoombs(rowClicked: number, colClicked: number): void {
    //     const totalCells = this.filas * this.columnas;
    //     const totalBombs = Math.floor(totalCells * 0.2); // Por ejemplo, el 20% de las celdas serán bombas
    //     let bombsPlaced = 0;
    //     while (bombsPlaced < totalBombs) {
    //         for (let i = 0; i < this.filas; i++) {
    //             for (let j = 0; j < this.columnas; j++) {
    //                 if (i !== rowClicked || j !== colClicked) {
    //                     // Si no es la celda del primer clic, coloca aleatoriamente las bombas
    //                     if (Math.random() < 0.2 && bombsPlaced < totalBombs) {
    //                         this.casillas[i][j] = new Celda(true);
    //                         bombsPlaced++;
    //                     } else {
    //                         this.casillas[i][j] = new Celda(false);
    //                     }
    //                 } else {
    //                     this.casillas[i][j] = new Celda(false); // La celda del primer clic no es una bomba
    //                 }
    //             }
    //         }
    //     }
    // }
    Tablero.prototype.calcularMinasAlrededor = function () {
        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                var numBombas = 0;
                for (var x = -1; x <= 1; x++) {
                    for (var y = -1; y <= 1; y++) {
                        if (i + x >= 0 && i + x < this.filas && j + y >= 0 && j + y < this.columnas) {
                            if (this.casillas[i + x][j + y].getIsBoomb()) {
                                numBombas++;
                            }
                        }
                    }
                }
                this.casillas[i][j].setMinasAlrededor(numBombas);
            }
        }
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
