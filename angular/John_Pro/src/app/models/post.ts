export interface post {
  id: number;
  title: string;
  body: string;
  tags: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  view: number;
  userId: number;
}