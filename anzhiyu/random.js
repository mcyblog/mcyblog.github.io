var posts=["posts/ff05b5bf.html","posts/a7aa354.html","posts/miskaX.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };