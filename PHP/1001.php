<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms</title>
</head>
<body>

<form action="index.php" method="post">

    <label>Phone</label>
    <input type="number" name="phone"/>
    <br><br>
    <label>Name</label>
    <input type="text" name="name"/>

    <button type="submit">Submit</button><br><br>

    <?php 
        $phone = $_POST["phone"];
        $name = $_POST["name"];

        echo "Your name is {$name} with the phone number {$phone}";
    ?>
    
</form>
    
</body>
</html>