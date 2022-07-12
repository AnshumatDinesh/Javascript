<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calc_style.css">
    <title>Calculator</title>
</head>
<body>
    <div class="heading-cont">
        <h1 class="heading">Calculator</h1>
    </div>
    <h1 class="heading">
        
    <?php
    switch($_REQUEST["operator"]){
        case "+":
            print("THE SUM OF ".$_REQUEST["num1"]." AND ".$_REQUEST["num2"]." IS ");
            echo $_REQUEST["num1"]+$_REQUEST["num2"];
            break;
        case "-":
            print("THE DIFFRENCE OF ".$_REQUEST["num1"]." AND ".$_REQUEST["num2"]." IS ");
            echo $_REQUEST["num1"]-$_REQUEST["num2"];
            break;
        case "*":
            print("THE PRODUCT OF ".$_REQUEST["num1"]." AND ".$_REQUEST["num2"]." IS ");
            echo $_REQUEST["num1"]*$_REQUEST["num2"];
            break;
        case "/":
            print("THE DIVISION OF ".$_REQUEST["num1"]." AND ".$_REQUEST["num2"]." IS ");
            echo $_REQUEST["num1"]/$_REQUEST["num2"];
            break;
        default:
            echo "INVALID OPERATOR";
            break;
    }
    ?>
    </h1>
    <div class="return">
        <a href="Calculator.html">Return</a>
    </div>
</body>
</html>