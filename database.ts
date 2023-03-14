import * as FileSystem from 'expo-file-system';
import randomData from './randomData';
import { IDBFile } from './interface';

const fileName = "DGJSONlolz.txt";

const saveFile = async (data:IDBFile) => {
  FileSystem.writeAsStringAsync(
    FileSystem.documentDirectory + fileName,
    JSON.stringify(data));

}

const readFile = async () :Promise<IDBFile> => {
  return await FileSystem.readAsStringAsync(FileSystem.documentDirectory + fileName).then((res) => {
    console.log("file loaded")
    return JSON.parse(res);
  }).catch(err => {
    if(err.toString().includes("open failed")){
      console.log("File not found. creating new");
      saveFile(randomData);
      return randomData;
    }
  });
}

  
export { saveFile, readFile };