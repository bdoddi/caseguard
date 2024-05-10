<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head>
<body>
    <header> 
      <div class="navbar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/logo.svg" alt="logo" style="height: 40px; width: 188px;" />
            <div class="buttons-flex">
                <div class="button">Button 1</div>
                <div class="button active">  <a href="#section2" style="text-decoration: none; color: black;"> Button 2</a></div>
            </div>
           
      </div>
    </header>
