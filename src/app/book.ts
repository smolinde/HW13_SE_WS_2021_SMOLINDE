export class Book {

    id: number;
    name: string;
    author: string;
    year: number;
    price: string;

    constructor(id: number, name: string, author: string, year: number, price: string) {
        this.id = id
        this.name = name
        this.author = author
        this.year = year
        this.price = price
    }
}
