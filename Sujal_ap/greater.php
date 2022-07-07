<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AP ENDSEM EVAL</title>
</head>
<body>
    <?php
        if(is_numeric(($_GET["num1"]))==false || is_numeric(($_GET["num2"]))==false ){
            echo("<h1>PLEASE ENTER A NUMERIC VALUE</h1>");
        }
        else if($_GET["num1"]>=$_GET["num2"]){
            print('<h1>'. $_GET["num1"]." is greater than ".$_GET["num2"].'</h1>');
            print("<h3>the product is ".($_GET["num1"]*$_GET["num1"]));
        }
        else if($_GET["num1"]<$_GET["num2"]){
            print('<h1>'. $_GET["num2"]." is greater than ".$_GET["num1"].'</h1>');
            print("<h3>the product is ".($_GET["num1"]*$_GET["num1"]));
        }
        
    ?>
</body>
</html>