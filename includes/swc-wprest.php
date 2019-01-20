<?php // connect to the website endpoint with wp_remote_get() function
// pass params as URL query args, full parameter list is here https://developer.wordpress.org/rest-api/reference/posts/
// at this moment you can use any parameter with Context: View
// it would be strange if you can fetch drafts or private posts, right?
$response = wp_remote_get( add_query_arg( array(
    'per_page' => 1
), 'https://www.somewhatcreative.net/wp-json/wp/v2/pages/2') );
 
if( !is_wp_error( $response ) && $response['response']['code'] == 200 ) {
 
    $remote_posts = json_decode( $response['body'] ); // our posts are here
    foreach( $remote_posts as $remote_post ) {
 
        // display post titles and excerpts
        echo '<h2>'. $remote_post->title->rendered . '</h2><p>' . $remote_post->excerpt->rendered . '</p>';
        // need more parameters? print_r( $remote_post )
 
    }
}

?>
