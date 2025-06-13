// Функция парсина сообщения из ТГ. Сообщение приходит в виде JSON объекта
function doPost(e){ // Передаю аргумент e - event 
	const update = JSON.parse(e.postData.contents); // Записываю содержание JSON объекта в переменную
	let msgData = {} // Объявляю словарь
	if (update.hasOwnProperty('message')){ // Проверяю наличие свойства message у переменной update
		msgData = { // Записываю в словарь нужные мне значения
			user_name : update.message.from.username,
			text      : update.message.text,
			date      : (update.message.date/86400)+25569.125,
			from      : update.message.from.id,
			is_msg    : true
		};
	}

	dataHandler(msgData); // Вызываю обработчик
}