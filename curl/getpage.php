<?php

require 'php-curl/src/Curl/Curl.php';

use \Curl\Curl;
$domain = $_GET["page"];

$curl = new Curl();
$curl->get($domain);

if ($curl->error) {
    echo 'Error: ' . $curl->error_code . ': ' . $curl->error_message;
}
else {
	$curl->response = preg_replace('#(href|src)="([^:"]*)("|(?:(?:%20|\s|\+)[^"]*"))#','$1="'.$domain.'$2$3',$curl->response);
    print_r($curl->response);
}

?>