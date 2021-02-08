<?php
function sanitize_output($buffer) {

    $search = array(
        '/\>[^\S ]+/s',  // strip whitespaces after tags, except space
        '/[^\S ]+\</s',  // strip whitespaces before tags, except space
        '/(\s)+/s'       // shorten multiple whitespace sequences
    );

    $replace = array(
        '>',
        '<',
        '\\1'
    );

    $buffer = preg_replace($search, $replace, $buffer);

    return $buffer;
}

ob_start("sanitize_output");

?><!DOCTYPE html>
<html lang="en" >
<head>
  <title>Personal Site of Tim Green, a Front End Developer currently living in Canberra, Australia</title>
  <meta charset="utf-8">
  <meta name="description" content="Hi I'm Tim Green, I'm a Website Developer living here in Canberra, Australia with 10 years experience where I've created and helped companies, government organisations and start-ups.">
  <meta name="robots" content="index, follow, all" />
  <meta name="author" content="Tim Green">
  <meta name="publisher" content="Tim Green">
  <meta name="google" content="notranslate" />
  <meta name="viewport" content="initial-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />

  <meta name="apple-mobile-web-app-title" content="Tim Green">
  <meta name="application-name" content="Tim Green">
  <meta name="msapplication-TileColor" content="#363558">
  <meta name="theme-color" content="#363558">

  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="assets/images/favicon/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="assets/images/favicon/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="assets/images/favicon/favicon.ico" sizes="16x16" />
  <link rel="mask-icon" href="assets/images/favicon/safari-pinned-tab.svg" color="#363558">

  <!-- CSS -->
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-LRlmVvLKVApDVGuspQFnRQJjkv0P7/YFrw84YYQtmYG4nK8c+M+NlmYDCv0rKWpG" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/build/app.min.css">
</head>

<!-- BODY -->
<body>

<div class="page">
  <section class="hero wow fadeInUp">
    <div class="container">
      <img src="assets/images/purple-bar.svg" alt="Tim Green Website Developer in Canberra" width="90" class="logo" >
      <h1 class="headline">
        I’m Tim Green — a web developer in Canberra, Australia.
        I focus on building websites which are simple to use and look great.
        <?php /*on delivering high quality visual and technical solutions for startups and agencies*/ ?>
        Follow me <!-- writing --> over on my web design blog <a href="https://www.somewhatcreative.net" class="highlight-pink">SomeWhat Creative</a>.
      </h1>
      <?php include('includes/navigation.php'); ?>
    </div>
  </section>
  <?php 
        include('includes/about.php');
        /*include('includes/skills.php')*/
        include('includes/work.php');
        include('includes/experience.php');
        include('includes/notables.php');
        include('includes/blog.php');
  ?>

  <!-- scroll to top -->
    <span class="scroll-to-top">
      <a href="javascript:void(0);"><i class="fas fa-angle-up" aria-hidden="true"></i></a>
    </span>
  <!-- scroll to top -->
  <footer>
  <?php include('includes/footer.php') ?>
  </footer>
</div>
<script src="assets/build/app.min.js"></script>
</body>
</html>
