class Celda {
    private isBoomb: boolean;
    private isFlag: boolean;
    private isRevealed: boolean;
    private minasAlrededor: number;

    constructor(isBoomb: boolean) {
        if (isBoomb) {
            this.isBoomb = true;
        } else {
            this.isBoomb = false;
        }
        this.isFlag = false;
        this.isRevealed = false;
        this.minasAlrededor = 0;
    }

    public getIsBoomb(): boolean {
        return this.isBoomb;
    }

    public setIsBoomb(isBoomb: boolean): void {
        this.isBoomb = isBoomb;
    }

    public getIsFlag(): boolean {
        return this.isFlag;
    }

    public setIsFlag(isFlag: boolean): void {

        this.isFlag = isFlag;
    }

    public getIsRevealed(): boolean {
        return this.isRevealed;
    }

    public setIsRevealed(isRevealed: boolean): void {
        this.isRevealed = isRevealed;
    }

    public getMinasAlrededor(): number {
        return this.minasAlrededor;
    }

    public setMinasAlrededor(minasAlrededor: number): void {
        this.minasAlrededor = minasAlrededor;
    }




}