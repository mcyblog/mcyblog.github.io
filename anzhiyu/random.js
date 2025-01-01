var posts=["posts/ff05b5bf.html","posts/a7aa354.html","posts/kmblog4.html","posts/miskaX.html","posts/59ebcab0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };