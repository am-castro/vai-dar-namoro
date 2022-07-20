export class UserModel {
    id: number;
    nome: string;
    email: string;
    senha: string;
    idade: number;
    foto: string;
    sexo: string;
    cantada: string;
    origin: string;
    likedme: Array<number>;

    constructor(data: any){
        this.id = data ? data.id : null;
        this.nome = data ? data.nome : '';
        this.email = data ? data.email : '';
        this.senha = data ? data.senha : '';
        this.idade = data ? data.idade : null;
        this.foto = data ? data.foto : '';
        this.sexo = data ? data.sexo : '';
        this.cantada = data ? data.cantada : '';
        this.origin = data ? data.origin : '';
        this.likedme = data ? data.likedme : [];
    }
}