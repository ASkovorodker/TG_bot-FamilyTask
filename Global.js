// configuration TG
const apiToken = "TG_Token"; // Токен канала в ТГ
const apiUrl   = "https://api.telegram.org/bot"+apiToken;

// configuration SSheets
const doc = SpreadsheetApp.getActive(); // Обращение к таблице, в котором находится код
const familytask = doc.getSheetByName("FamilyTask"); // Обращение к листу в таблице.

// set webhook -  функция установки вебхука для получения обновлений от нашего бота.
function api_connector() {
	const appUrl   = "https://script.google.com/macros/s/..."; //URL таблицы
	UrlFetchApp.fetch(apiUrl+"/setWebHook?url="+ appUrl);
}