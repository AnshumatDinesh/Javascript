<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="factorial.php" method="post">
        <input type="text" name="num">
        <input type="submit" value="Submit">
    </form>
    <?php
        function fact($n){
            $fact=1;
            for($i=2;$i<$n;$i++){
                $fact*=$i;
            }
            return $fact;
        }
        echo fact($_POST["num"]);
    ?>
    
</body>
</html>