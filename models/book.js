class Book{
    constructor(id, name, description, start, 
        price, view, content, url){
        this.id = id;
        this.name = name;
        this.description = description;
        this.start = start;
        this.price = price;
        this.view = view;
        this.content = content;
        this.url = url;
    }
}


module.exports = Book;