<?php

$token = "1558775847:AAEB42_s9dLU73wqhz3t90kB5S40Tul2FCI";
$chat_id = "1400064880";

$values = $hook->getValues();

#Получаем название формы
$formName = $modx->getOption('formName', $formit->config, 'form-'.$modx->resource->get('id'));

#Получаем ip адрес отправителя
$ip = $modx->getOption('REMOTE_ADDR', $_SERVER, '');

#Данные с формы
$fullName = $values['fullName'];
$email = $values['email'];

#Создаем массив
$arr = array(
"Имя" => $fullName,
"Телефон" => $email,
"Заявка на новый заказ" => $formName,
"Айпи" => $ip);

/*Цикл по массиву (собираем сообщение) */
foreach($arr as $key => $value) { 
     $txt .= "<b>".$key."</b>: ".$value."%0A"; 
  }

#Отправляем сообщение
$fp=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

#Возвращаем true
return true;