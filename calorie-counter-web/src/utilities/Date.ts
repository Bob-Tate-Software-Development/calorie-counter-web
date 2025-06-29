import type {IDate} from "../interfaces/IDate.ts";

export class Date implements IDate {
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    year: number;
    month: number;
    day: number;
    asString = () => {
        return `${this.month}/${this.day}/${this.year}`;
    }
}