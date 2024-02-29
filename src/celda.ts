class Celda {
    private isBoomb: boolean;
    private isFlag: boolean;
    private isRevealed: boolean;

    constructor(isBoomb: boolean) {
        if (isBoomb) {
            this.isBoomb = true;
        } else {
            this.isBoomb = false;
        }
        this.isFlag = false;
        this.isRevealed = false;
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




}