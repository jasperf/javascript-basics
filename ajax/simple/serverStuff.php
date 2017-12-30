<?php
 //serverStuff.php

 $lastName= $_POST['last'];
 $firstName = $_POST['first'];

 //everything echo'd becomes responseText in the JavaScript
 echo "Welcome, " . ucwords($firstName).' '.ucwords($lastName);

?>