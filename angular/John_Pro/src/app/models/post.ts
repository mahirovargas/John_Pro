export class post {
  id!: number;
  title!: string;
  body!: string;
  tags!: string;
  reactions!: {
    likes: number;
    bandLike: boolean;
    dislikes: number;
    bandDisLike: boolean;
  };
  views!: number;
  userId!: number;
  constructor(){}
  public onLike(){
    console.log('liked');
    this.reactions.likes++;
  }
  onDLike(){
    this.reactions.dislikes++;
  }
}
