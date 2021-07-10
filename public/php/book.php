<?php

require('vendor/autoload.php');

use bookstore\Books;

$books = new Books();

$books_results = $books -> getBooks();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$response = array();
$response['count'] = count( $books_results);
$response['books'] = $books_results;

echo json_encode( $response );

?>