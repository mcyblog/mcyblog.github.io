var posts=["posts/a7aa354.html","posts/ff05b5bf.html","posts/kmblog4.html","posts/2b36786b.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };