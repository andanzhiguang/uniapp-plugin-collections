setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"space { width: 100%; height: 100vh; background: #121212; overflow: hidden; }\n.",[1],"planet { width: 150px; height: 150px; border-radius: 50%; background: #333; position: absolute; left: 50%; top: 50%; margin: -75px 0 0 -75px; overflow: hidden; z-index: 2; }\n.",[1],"planet_shadow { position: absolute; border-radius: 50%; height: 100%; width: 100%; top: -40%; right: -10%; border: 35px solid rgba(0, 0, 0, 0.15); }\n.",[1],"crater1, .",[1],"crater2, .",[1],"crater3, .",[1],"crater4 { position: absolute; border-radius: 50%; background: rgba(0, 0, 0, 0.3); -webkit-box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.2); box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.2); }\n.",[1],"crater1 { width: 20px; height: 20px; left: 25%; top: 20%; }\n.",[1],"crater2 { width: 10px; height: 10px; left: 50%; top: 60%; }\n.",[1],"crater3 { width: 15px; height: 15px; left: 30%; top: 65%; }\n.",[1],"crater4 { width: 15px; height: 15px; left: 60%; top: 35%; }\n.",[1],"star { display: block; width: 5px; height: 5px; border-radius: 50%; background: #FFF; top: 100px; left: 400px; position: relative; -webkit-transform-origin: 100% 0; -ms-transform-origin: 100% 0; transform-origin: 100% 0; -webkit-animation: star-ani 6s infinite ease-out; animation: star-ani 6s infinite ease-out; -webkit-box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3); box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3); opacity: 0; z-index: 2; }\n.",[1],"star:after { content: \x27\x27; display: block; top: 0px; left: 4px; border: 0px solid #fff; border-width: 0px 90px 2px 90px; border-color: transparent transparent transparent rgba(255, 255, 255, 0.3); -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0); transform: rotate(-45deg) translate3d(1px, 3px, 0); -webkit-box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1); box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1); -webkit-transform-origin: 0% 100%; -ms-transform-origin: 0% 100%; transform-origin: 0% 100%; -webkit-animation: shooting-ani 3s infinite ease-out; animation: shooting-ani 3s infinite ease-out; }\n.",[1],"pink { top: 30px; left: 395px; background: #ff5a99; animation-delay: 5s; -webkit-animation-delay: 5s; -moz-animation-delay: 5s; }\n.",[1],"pink:after { border-color: transparent transparent transparent #ff5a99; animation-delay: 5s; -webkit-animation-delay: 5s; -moz-animation-delay: 5s; }\n.",[1],"blue { top: 35px; left: 432px; background: cyan; animation-delay: 7s; -webkit-animation-delay: 7s; -moz-animation-delay: 7s; }\n.",[1],"blue:after { border-color: \x27transpareanimation-delay: 12s\x27; -webkit-animation-delay: 7s; animation-delay: 7s; }\n.",[1],"yellow { top: 50px; left: 600px; background: #ffcd5c; -webkit-animation-delay: 5.8s; animation-delay: 5.8s; }\n.",[1],"yellow:after { border-color: transparent transparent transparent #ffcd5c; -webkit-animation-delay: 5.8s; animation-delay: 5.8s; }\n@-webkit-keyframes star-ani { 0% { opacity: 0; transform: scale(0) rotate(0) translate3d(0, 0, 0); -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0); -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0); }\n50% { opacity: 1; transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); -webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); -moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); }\n100% { opacity: 0; transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); }\n}@keyframes star-ani { 0% { opacity: 0; transform: scale(0) rotate(0) translate3d(0, 0, 0); -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0); -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0); }\n50% { opacity: 1; transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); -webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); -moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0); }\n100% { opacity: 0; transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0); }\n}",],undefined,{path:"./pages/meteorShower/meteorShower.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/meteorShower/meteorShower.wxml') } }));