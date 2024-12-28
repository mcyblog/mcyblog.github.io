var posts=["2024/11/23/3/","2024/11/22/2/","2024/12/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };