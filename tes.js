        //Variables Globales	
        var a = document.getElementsByTagName("SECTION")[0];
        var b = document.getElementsByTagName("SECTION")[1];
        var i = 0;
        var txt = 'Shaban Kaloshi';
        var speed = 200;
        var m = document.documentElement;

        //Fonctions
        function demarre(arg, arg2) {
            var j = arg2;
            var x = setInterval(scrollWin, 7);

            function scrollWin() {
                j = j + 10;
                if (j >= arg + arg2) {
                    clearInterval(x);
                }
                window.scrollTo(0, j);
                console.log(j);
            }
        }

        function typeWriter() {

            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                if (i == txt.length) {
                    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {

                    } else {
                        demarre(document.documentElement.clientHeight, 0);
                    }
                }
                var y = setTimeout(typeWriter, speed);
            }
        }

        function myFunction() {
            if (m.scrollTop) {
                document.getElementsByTagName("UL")[0].className = "test";
                //console.log("Y: "+document.documentElement.scrollTop+"px");
                if (m.scrollTop > (m.clientHeight) / 2 && m.scrollTop < (m.clientHeight) * 2) {
                    //console.log("Afficher: "+document.documentElement.clientHeight+"px");
                    document.getElementById("deux-img").style.transform = 'translateX(0vw)';

                }
                if (m.scrollTop > (m.clientHeight * 3) / 2 && m.scrollTop < (m.clientHeight) * 3) {
                    //console.log("Afficher: "+document.documentElement.clientHeight+"px");
                    document.getElementsByClassName("container")[0].style.opacity = '1';
                    document.getElementsByClassName("container")[0].style.visibility = 'visible';
                }

            } else {
                document.getElementsByTagName("UL")[0].className = "";
            }
        }

        //Executeurs
        window.onscroll = function() {
            myFunction()
        };
        window.onload = function() {
            typeWriter()
        };

        //Essais
        /*
        var lastScrollTop = 0;
        var t = 0;

        window.addEventListener("scroll", function(){
           var st = window.pageYOffset || document.documentElement.scrollTop;

           if (st > lastScrollTop){
               if(t == 0){
               	t = 1;
               	window.scrollBy(0,(document.documentElement.clientHeight));
               }
           } else {
        		if(t == 1){
        			console.log("ok++");
        			t = 0;
        			window.scrollBy(0,-(document.documentElement.clientHeight));	
        		}
           }
           lastScrollTop = st;
        }, false);
        */