
export class recepie{
    public recipeName : string;
    public recipeDesc : string;
    public image:string; 

    constructor(name,desc,img){
        this.recipeName=name
        this.recipeDesc=desc;
        this.image=img    
    }
}