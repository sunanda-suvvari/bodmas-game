<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = $_POST['score'];
    echo "<h1>Your Score: " . $score . "</h1>";
    echo "<p>Great job playing the BODMAS Game!</p>";
}
?>