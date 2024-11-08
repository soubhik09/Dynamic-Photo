const image = document.querySelector("img");



setInterval(function(){
    image.src = "https://picsum.photos/600/400?timestamp=" + new Date().getTime();
},1000)