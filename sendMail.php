<?php

$token = "1558775847:AAEB42_s9dLU73wqhz3t90kB5S40Tul2FCI";
$chat_id = "1400064880";

$values = $hook->getValues();

#Получаем название формы
$formName = $modx->getOption('formName', $formit->config, 'form-'.$modx->resource->get('id'));

#Получаем ip адрес отправителя
$ip = $modx->getOption('REMOTE_ADDR', $_SERVER, '');

#Данные с формы
$name = $values['name-zv'];
$phone = $values['phone-zv'];

#Создаем массив
$arr = array(
"Имя" => $name,
"Телефон" => $phone,
"Название формы" => $formName,
"Айпи" => $ip);

/*Цикл по массиву (собираем сообщение) */
foreach($arr as $key => $value) { 
     $txt .= "<b>".$key."</b>: ".$value."%0A"; 
  }

#Отправляем сообщение
$fp=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

#Возвращаем true
return true;