class Juego {
    private tauler: Tablero;
    private gameOver: boolean;

    constructor(filas: number, columnas: number) {
        this.tauler = new Tablero(filas, columnas);
        this.gameOver = false;
        console.log("Tablero creado correctamente!");
    }

    public revelarCasilla(row: number, col: number): void {
        if (!this.gameOver) {
            const casilla = this.tauler.getCasillas(row, col);
            if (!casilla.getIsRevealed() && !casilla.getIsFlag()) {
                casilla.setIsRevealed(true);

                if (casilla.getIsBoomb()) {
                    this.gameOver = true;
                    console.log("¡Has perdido!");
                    // Aquí podrías mostrar un mensaje de juego perdido y revelar todas las casillas
                    this.revelarTodasLasCasillas();
                } else {
                    // Si la casilla no es una bomba, revelar recursivamente las casillas adyacentes si no tienen bombas adyacentes
                    if (casilla.getMinasAlrededor() === 0) {
                        this.revelarCasillasAdyacentes(row, col);
                    }
                }
            }
        }
    }

    private revelarCasillasAdyacentes(row: number, col: number): void {
        const casillasAdyacentes = this.tauler.getCasillasAdyacentes(row, col);
        for (const [x, y] of casillasAdyacentes) {
            this.revelarCasilla(x, y);
        }
    }

    public marcarCasilla(row: number, col: number): void {
        if (!this.gameOver) {
            const casilla = celda.getCasillas(row, col);
            if (!casilla.getIsRevealed()) {
                casilla.setIsFlag(!casilla.getIsFlag());
                // Aquí podrías agregar la lógica para actualizar la interfaz gráfica, si es necesario
            }
        }
    }

    private revelarTodasLasCasillas(): void {
        const filas = this.tauler.getFilas();
        const columnas = this.tauler.getColumnas();

        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                const casilla = this.tauler.getCasillas(i, j);
                if (casilla.getIsBoomb()) {
                    // Revela todas las bombas
                    casilla.setIsRevealed(true);
                }
            }
        }
    }
}