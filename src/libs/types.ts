// You can define interfaces for all React components here.
// Do not forget to export properly.

import { comments } from "./comments";



interface Comment{
    userimgpath: string;
    username: string;
    commenttext: string;
    likenum: number;
    replies?: string[];
}
export type { Comment };

interface porpsPON{

}

interface props{
    fullname: string;
    ID: string;
}

export type { props}



interface ReplyProps {}
export type { ReplyProps };
