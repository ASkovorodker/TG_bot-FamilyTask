function dataHandler(msgData){
	if (msgData.text == '/start'){
		welcome(msgData);
	} else {
		saveData(msgData);
	}
}

function welcome(msgData){
	const msg = "Напиши задачу в формате: Приоритет-Задача";
	var url  = apiUrl+"/sendmessage?parse_mode=HTML&chat_id="+msgData.from+"&text="+msg;
	var opts = {"muteHttpExceptions": true}
	UrlFetchApp.fetch(url, opts).getContentText();
	//send(msg, msgData.chat_id);// Функцию send нужно написать
}

function saveData(msgData){
	const vals = [msgData.text, msgData.date, msgData.user_name]
	familytask.appendRow(vals)
}