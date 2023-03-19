import countries from "./countries";

export interface IDBFile{
    routes: IRoute[],
}

export interface IRoute{
    id:string,
    company:string,
    country: typeof countries[number],
    city:string,
    address:string,
    index:string,
    cords:{
        lat:number,
        long:number,
    },
    checkMarks:{
        parking:number,
        shopNear:number,
        hotelNear:number
    },
    addInfo:string,

}

export interface ISettings{
    theme:0 | 1,
    floatingMenuPosition: 0 | 1,
}