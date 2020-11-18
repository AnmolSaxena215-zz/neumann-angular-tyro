export class Blog{
    public name : string;
    public title : string;
    public description : string;
    public imagePath : string;
    public date : Date;

    constructor(name : string, title : string, description : string, imagePath : string, date : Date){
        this.name = name;
        this.title = title;
        this.description = description;
        this. imagePath = imagePath;
        this.date = date;
    }
}