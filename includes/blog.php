<?php 
  //this file is need to connect to SWC
  include('includes/blog-connection.php');
 ?>

 <section id="blog">
    <div class="container">
      <h2 class="now wow fadeInUp">Latest post from <span class="highlight-pink swc-title">SomeWhat Creative</span></h2>

          <h3 class="project-title project-titleSWC">
            <a href="<?php echo $item_link[0]; ?>" class="external-linkBlog" rel="follow" target="_blank"><?php echo $item_title[0]; ?></a>
          </h3>
      <p class="wow fadeInUp">
        <?php echo $item_description[0]; ?>
      </p>
      <p class="wow fadeInUp">
         <a href="<?php echo $item_link[0]; ?>" class="external-linkBlog" rel="nofollow"  target="_blank">Read Post</a>
           <span class="bullet-separator project-sep">&bull;</span>
         <a href="https://www.somewhatcreative.net/" class="external-linkBlog" rel="nofollow"  target="_blank">Visit Blog</a>
</p>
    </div>
  </section>