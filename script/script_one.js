        $(document).ready(function(){
            
            $('#man').addClass('profession');
            var abc =2;
            function sazzad(){
                $('#man').addClass('profession');
                if(abc%2==0){
                    $('#man').text('a teacher');}
                if(abc%3==0){
                    $('#man').text('a photographer');}
                if(abc%4==0){
                    $('#man').text('a developer');}
                if(abc%5==0){
                    $('#man').text('a bloger');}
                if(abc%6==0){
                    $('#man').text('a student');}
                if(abc%7==0){
                    $('#man').text('a designer');}
                
                
                abc = abc+1;
                }
                
            setInterval(sazzad,7000);
            
            
            
            $(window).scroll(function(e){
                parallax();
            });
            
            function parallax(){
                var scrolled = $(window).scrollTop();
                $('.hero1').css('top',-(scrolled*0.0215)+'rem');
                $('.hero1').css('opacity',1-(scrolled*.00075));
            }; 
            
        });