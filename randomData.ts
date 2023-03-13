import { IDBFile, IRoute } from "./interface";

const randomRoutes:IRoute[] = [
    {
        company:"Тестовая компания 1",
        country:"Германия",
        city:"Geroldsgrün",
        address:"Billwerder Neuer Deich 70",
        index:"95179",
        cords:{
            lat:55.1,
            long:44.2,
        },
        addInfo:[
            {
                title:"Парковка",
                text:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот."
            }
        ]
    },

    {
        company:"Тестовая компания 2",
        country:"Италия",
        city:"Sant'apollinare Chietino",
        address:"Via Torre di Mezzavia 81",
        index:"66030",
        cords:{
            lat:21.1,
            long:15.2,
        },
        addInfo:[
            {
                title:"Парковка",
                text:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот."
            }
        ]
    }
]

const randomData:IDBFile = {
    routes: randomRoutes
}

export default randomData;