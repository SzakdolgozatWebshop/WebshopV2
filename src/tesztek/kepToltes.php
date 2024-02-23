<?php
// function.php

function getImagesInDirectory($directory) {
    $images = array();
    if (is_dir($directory)) {
        $files = scandir($directory);
        foreach ($files as $file) {
                $images[] = $file;
        }
    }

    //return json_encode($images);
    return json_encode('asaaa');
}

// Megadjuk a mappát, ahol a képek találhatók
$imageDirectory = "../kep";
// Handle AJAX request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo getImagesInDirectory($imageDirectory);
}
?>