export class Blog {
    id!:number;
    title!:string;
    description!:string;
    auteur!:string;
    date!: Date;
    commentaires?:string[];
}