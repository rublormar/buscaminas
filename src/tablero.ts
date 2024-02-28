class Tablero {
    private filas: number;
    private columnas: number;
    private casillas: Celda[][];

  constructor(filas: number, columnas: number) {
    this.filas = filas;
    this.columnas = columnas;
    this.casillas = [];
    for(let i = 0; i < filas; i++) {
        this.casillas[i] = [];
    }
    
    this.inicialitzarCasillas();
  }
    public getFilas(): number {
        return this.filas;
    }

    public getColumnas(): number {
        return this.columnas;
    }

    public getCasillas(): Celda[][] {
        return this.casillas;
    }

    public setCasillas(casillas: Celda[][]): void {
        this.casillas = casillas;
    }

    public inicialitzarCasillas(): void {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if(Math.random() < 0.2) {
                   this.casillas[i][j] = new Celda(true);
                 
                } else {
                    this.casillas[i][j] = new Celda(false);
                 
                }
            }
        }

        console.table(this.casillas);
        
    }

}