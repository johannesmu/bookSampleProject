<?php


$http_origin = $_SERVER['HTTP_ORIGIN'];

$allowed_domains = array(
  'http://localhost:3000',
  'http://localhost',
);

if (in_array($http_origin, $allowed_domains))
{  
    // header("Access-Control-Allow-Origin: $http_origin");
    // header('Content-Type: application/json');
}

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