<?php

if(empty($_POST["name"]) ||
  empty($_POST["email"]) ||
  empty($_POST["password"]) ||
  empty($_POST["confirm"]) )
{
    echo "You should complete all inputs";
    exit;
}

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];
$validation = $_POST["confirm"];
?>


<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Form Data</title>

    <style>
    body{background-color: #c2c5aa }

    table, th, td {
      border: 3px solid black;
      border-collapse: collapse;
      text-align: center;
      background-color: white;
    }
    table{width: 50%;margin: 0 auto;}
    .name{width: 20%;}
    .email{width: 30%;}
    .pass, .conf{width:25%;}


    </style>
  </head>

  <body>

    <h1 style="text-align: center;">Register Form Input</h1>

    <?php
    if($password !== $validation) {
      echo "Incorect validation password";
    }
    else if(strlen($password) < 5) {
        echo "Password should have 5 or more characters";
    }
    else {
      echo "
    <table>
      <tr>
        <th class=\"name\">Name</th>
        <th class=\"email\">Email</th>
        <th class=\"pass\">Password</th>
        <th class=\"conf\">Confirm Password</th>
      </tr>
      <table>
        <tr>
          <td class=\"name\">$name</th>
          <td class=\"email\">$email</th>
          <td class=\"pass\">$password</th>
          <td class=\"conf\">$validation</th>
        </tr>
    </table>";}
    ?>


  </body>
</html>
