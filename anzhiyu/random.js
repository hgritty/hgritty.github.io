var posts=["/posts/demo/","/posts/hello-world/","/posts/阅读论文有感/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };