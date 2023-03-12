import * as SQLite from 'expo-sqlite';
import uuid from 'react-native-uuid';

function insertTable(){
    const db = SQLite.openDatabase("DG.db");
    db.transaction(tx => {
        tx.executeSql("insert into routes (first_name,last_name,email,phone) values ('"+ uuid.v1().toString() +"','"+ uuid.v1().toString() +"','"+ uuid.v1().toString() +"','"+ uuid.v1().toString() +"');",null,
        (tx, result) => {
            console.log(result);
        },
        (tx, error) => {
            console.log(error);
        })
    });
}

function getData(){
    const db = SQLite.openDatabase("DG.db");
    return new Promise(async resolve => 
        await db.transaction(async tx => {
            await tx.executeSql("select * from routes"
                , [],
                (tx, result) => {
                    resolve(result.rows.length);
                },
                (_, err) => {
                    console.log(`err: ${err}`)
                }
            )
        })
    )
}
export { insertTable, getData };