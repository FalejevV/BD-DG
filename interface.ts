import countries from "./countries";

export interface IDBFile{
    routes: IRoute[],
    
}

export interface IRoute{
    company:string,
    country: typeof countries[number],
    city:string,
    address:string,
    index:string,
    cords:{
        lat:number,
        long:number,
    },
    checkMarks?:{
        parking?:boolean,
        cafe?:boolean,
        hotel?:boolean
    },
    addInfo?:string,

}