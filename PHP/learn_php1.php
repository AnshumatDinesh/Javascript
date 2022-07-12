<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Randi</h1>
    <form action="learn_php1.php" method="post">
        <textarea name="txt"  placeholder="Type Here  ...." cols="30" rows="10"></textarea>
        <input type="submit" value="Submit">
    </form>
    <?php
    $file="data.txt";
    $handle=fopen($file,"w");
    fwrite($handle,$_POST["txt"]);
    fclose($handle);
    ?>
</body>
</html>