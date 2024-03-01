"use strict";
var Celda = /** @class */ (function () {
    function Celda(isBoomb) {
        if (isBoomb) {
            this.isBoomb = true;
        }
        else {
            this.isBoomb = false;
        }
        this.isFlag = false;
        this.isRevealed = false;
        this.minasAlrededor = 0;
    }
    Celda.prototype.getIsBoomb = function () {
        return this.isBoomb;
    };
    Celda.prototype.setIsBoomb = function (isBoomb) {
        this.isBoomb = isBoomb;
    };
    Celda.prototype.getIsFlag = function () {
        return this.isFlag;
    };
    Celda.prototype.setIsFlag = function (isFlag) {
        this.isFlag = isFlag;
    };
    Celda.prototype.getIsRevealed = function () {
        return this.isRevealed;
    };
    Celda.prototype.setIsRevealed = function (isRevealed) {
        this.isRevealed = isRevealed;
    };
    Celda.prototype.getMinasAlrededor = function () {
        return this.minasAlrededor;
    };
    Celda.prototype.setMinasAlrededor = function (minasAlrededor) {
        this.minasAlrededor = minasAlrededor;
    };
    return Celda;
}());
