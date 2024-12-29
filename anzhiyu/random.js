var posts=["posts/ff05b5bf.html","posts/a7aa354.html","posts/kmblog4.html","posts/miskaX.html","posts/2b36786b.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };