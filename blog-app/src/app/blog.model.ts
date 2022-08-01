import { Commentaire } from "src/app/commentaire.model";
export class Blog {
    id!:number;
    title!:string;
    description!:string;
    auteur!:string;
    date!: Date;
    commentaires ?:Commentaire[];
}