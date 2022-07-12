<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="basic_calc.php" method="post">
        <input type="number" name="num1"> 
        <select name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="num2"> 
        <input type="submit" >
    </form>
    <br>
    <?php
    if($_POST["operator"]=="+"){
        echo $_POST["num1"]+$_POST["num2"];
    }
    else if($_POST["operator"]=="-"){
        echo $_POST["num1"]-$_POST["num2"];
    }
    else if($_POST["operator"]=="*"){
        echo $_POST["num1"]*$_POST["num2"];
    }
    else if($_POST["operator"]=="/"){
        echo $_POST["num1"]/$_POST["num2"];
    }
    else{
        echo "PLEASE ENTER A  NUMBER";
    }
    ?>
</body>
</html>