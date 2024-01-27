export interface IChangeOrder {
    sort_order: { id: number; order: number; }[]
}

export interface IDraftBiography { 
        id: number | string;
        title: string;
        description: string;
        sort_order: number | string
}

export interface IDeleteSection { 
        id: number | string;
}


export interface IUpdateBio{
        user_id?: number | string;
        id: string;
        title: string;
        description: string;
        sort_order: string | number
     }