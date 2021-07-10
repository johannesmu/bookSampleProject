<?php
namespace bookstore;

use bookstore\Database;
use \Exception;

class Books extends Database {

  public function __construct() {
    try{
      parent::__construct();
      if( !$this -> connection ) {
        throw new Exception("database connection error");
      }
      else {
        return true;
      }
    }
    catch( Exception $exc ) {
      return $exc -> getMessage();
    }
  }

  public function getBooks() {
    $query = "SELECT * FROM book";
    $statement = $this -> connection -> prepare($query);
    if( $statement -> execute() == false ) {
      echo "query or database error";
    }
    else {
      $result = $statement -> get_result();
      $books = array();
      // loop through the result to add each book
      // row represents a row in the book table
      // fetch_assoc() converts a row into an associative array
      // example ["book_id" => 1, "book_title" => "Save the Cat!"]
      while( $row = $result -> fetch_assoc() ) {
        array_push( $books, $row );
      }
      return $books;
    }
  }
  public function getBook( $id ) {
    $query = "
    SELECT 
    book_id,
    book_title,
    tagline,
    isbn13,
    isbn10,
    author,
    publisher,
    year,
    pages,
    cover_image,
    created,
    updated 
    FROM `book` 
    WHERE book_id=?";
    try{
      $statement = $this -> connection -> prepare( $query );
      if( !$statement ) {
        throw new Exception("query error");
      }
        
      $statement -> bind_param('i', $id );
      if( !$statement -> execute() ) {
        throw new Exception("parameter error");
      }
      $result = $statement -> get_result();
      $book = $result -> fetch_assoc();
      return $book;
    }
    catch( Exception $exc ) {
      error_log( $exc -> getMessage() );
    }

  }
}
?>