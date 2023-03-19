import * as FileSystem from 'expo-file-system';
import randomData from './randomData';
import { IDBFile, IRoute, ISettings } from './interface';

export const fileName = "DGJSON1gay.txt";
export const settingsName = 'DGSettings.txt';

const saveFile = async (data:IDBFile) => {
  console.log("saving routes");
  FileSystem.writeAsStringAsync(
    FileSystem.documentDirectory + fileName,
    JSON.stringify(data));

}

const readFile = async () :Promise<IDBFile> => {
  return await FileSystem.readAsStringAsync(FileSystem.documentDirectory + fileName).then((res) => {
    console.log("routes loaded")
    return JSON.parse(res);
  }).catch(err => {
    if(err.toString().includes("open failed")){
      console.log("File not found. creating new");
      saveFile(randomData);
      return randomData;
    }
  });
}

async function exportDatabase(data:IDBFile){
  const date = new Date();
  const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!permissions.granted) {
      return;
  }

  try {
      await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, `DG ${date.toLocaleDateString()} (${data.routes.length} records)`, 'text/plain')
      .then((r) => {
          FileSystem.writeAsStringAsync(r, JSON.stringify(data));
          alert("База данных сохранена");
      })
      .catch((e) => {
        alert("Ошибка сохранения:" + e);
      });
  }catch(e){

  };
}

const saveSettingsFile = async (settings:ISettings) => {
  console.log("saving settings");
  FileSystem.writeAsStringAsync(
    FileSystem.documentDirectory + settingsName,
    JSON.stringify(settings));

}

const readSettingsFile = async () :Promise<ISettings> => {
  return await FileSystem.readAsStringAsync(FileSystem.documentDirectory + settingsName).then((res) => {
    console.log("settings loaded");
    return JSON.parse(res);
  }).catch(err => {
    if(err.toString().includes("open failed")){
      console.log("File not found. creating new");
      let defaultSettings:ISettings = {
        theme: 0,
        floatingMenuPosition: 0
      }

      saveSettingsFile(defaultSettings);
      return randomData;
    }
  });
}

const importDatabase = async (file:string) => {
  return await FileSystem.readAsStringAsync(file).then((res) => {
    let parsedFile = JSON.parse(res) as IDBFile;
    if(parsedFile.routes){
      saveFile(parsedFile);
      return parsedFile;
    }else{
      alert("Неверный файл.");
    }
  })
}

export { saveFile, readFile, exportDatabase,readSettingsFile,saveSettingsFile,importDatabase };