<?php

require('vendor/autoload.php');

use bookstore\Books;

if( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
  $book = new Books();

  $book_result = $book; 
  $response = array();
  $response['book'] = $book_result;
  $response['count'] = count($book_result);

  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");
  echo json_encode( $response );
  //output book
}


?>