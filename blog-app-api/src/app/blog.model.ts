import { Commentaire } from "src/app/commentaire.model";
export class Blog {
    id!:number;
    title!:string;
    content!:string;
    autor!:string;
    date!: Date;
    commentaires ?:Commentaire[];
}