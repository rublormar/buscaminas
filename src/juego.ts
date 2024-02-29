class Juego {
    private tauler: Tablero;

    constructor(filas: number, columnas: number) {
        this.tauler = new Tablero(filas, columnas);
        console.log("tablero creado correctamente!");

    }


}