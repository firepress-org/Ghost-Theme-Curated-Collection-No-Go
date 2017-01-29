/**
 * main.js
 * @ndaidong
 * @copy: *.techpush.net
*/

;(function(){

    var enableConsoleLog = true;

    Bella.setJSPath(Bella.MOD, '/assets/js/bundles');
    Bella.setJSPath(Bella.LIB, '/assets/js/libs');
    Bella.setJSPath(Bella.DEP, '/assets/js/libs/dependencies');

    function init(){

        var M = Bella.Model;
        for(var k in M){
            if(!!M[k]){
                M[k].init();
            }
        }

        Bella.dom.all('pre').forEach(function(el){
            el.addClass('prettyprint');
        });

        Bella.ssharer.handle();
    }

    var modules = [], libs = [];

    var loadModules = function(){
        if(!!modules.length){
            Bella.implement(modules, init);
        }
        else{
            init();
        }
    }

    Bella.require([
            'prettify',
            'talEmoti',
            'social-share'
        ],
        function(){
            if(!!libs.length){
                Bella.require(libs, Bella.LIB, function(){
                    loadModules();
                });
            }
            else{
                loadModules();
            }
    });

    var app = window['app'] = {
        init : function(){

        },
        log : function(msg){
            if(!!enableConsoleLog){
                console.log(msg);
            }
        }
    }
})();
