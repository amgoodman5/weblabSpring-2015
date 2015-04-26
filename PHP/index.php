<?php
$message= "This is an Email I sent to you on Php";
$message=wordwrap($message,70,"\r\n");
$email=mail('amgoodman5@gmail.com',"Hi",$message);
echo $email;
?>