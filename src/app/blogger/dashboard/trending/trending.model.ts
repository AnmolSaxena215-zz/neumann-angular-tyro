export class Trending{
    public position : string;
    public name : string;
    public title : string;
    public description : string;
    public imagePath : string;
    public date : Date;

    constructor(position :  string, name : string, title : string, description : string, imagePath : string, date : Date){
        this.position = position;
        this.name = name;
        this.title = title;
        this.description = description;
        this. imagePath = imagePath;
        this.date = date;
    }
}