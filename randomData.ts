import { IDBFile, IRoute } from "./interface";

const randomRoutes:IRoute[] = [
    {
        id:"ad124-dawd1adsd-czxc",
        company:"Тестовая компания 1",
        country:"Германия",
        city:"Geroldsgrün",
        address:"Billwerder Neuer Deich 70",
        index:"95179",
        cords:{
            lat:55.1,
            long:44.2,
        },
        checkMarks:{
            parking:1,
            shopNear:2,
            hotelNear:0
        },
        addInfo:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот."
    },

    {
        id:"ad124-dadz1wd1adsd-czxc",
        company:"Тестовая компания 2",
        country:"Италия",
        city:"Sant'apollinare Chietino",
        address:"Via Torre di Mezzavia 81",
        index:"66030",
        cords:{
            lat:21.1,
            long:15.2,
        },
        checkMarks:{
            parking:0,
            shopNear:2,
            hotelNear:1
        },
        addInfo:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот."
    },
    {
        id:"zzz124-dawd1adsd-czxc",
        company:"Тестовая компания 3",
        country:"Франция",
        city:"France city",
        address:"France address 55",
        index:"251111",
        cords:{
            lat:27.1,
            long:58.2,
        },
        checkMarks:{
            parking:0,
            shopNear:2,
            hotelNear:1
        },
        addInfo:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот."
    },
    {
        id:"asdawd24-dawd1adsd-czxc",
        company:"Тестовая компания 4",
        country:"Германия",
        city:"Germany 999",
        address:"Germany address 55",
        index:"184547777",
        cords:{
            lat:66.1,
            long:99.2,
        },
        checkMarks:{
            parking:2,
            shopNear:2,
            hotelNear:2
        },
        addInfo:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот.Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. ВотЕсть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот"
    },
    {
        id:"adasd1124-dawd1adsd-czxc",
        company:"Тестовая компания 6",
        country:"Испания",
        city:"Spain 999",
        address:"Spain address 55",
        index:"6666555544",
        cords:{
            lat:31.1,
            long:32.2,
        },
        checkMarks:{
            parking:1,
            shopNear:2,
            hotelNear:1
        },
        addInfo:"Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот.Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. ВотЕсть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот. Есть место для парковки. Находится тут и тут. Как то там, гдетотам. Вот"
    }
]

const randomData:IDBFile = {
    routes: randomRoutes,
    settings:{
        theme: 0,
        floatingMenuPosition: 0
    }
}

export default randomData;