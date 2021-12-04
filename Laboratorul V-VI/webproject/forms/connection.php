<?php

function connection()
{
  $servername = "localhost";
  $username = "root";
  $db = "tw";
  
  return new mysqli($servername, $username, "", $db);
}

?>
