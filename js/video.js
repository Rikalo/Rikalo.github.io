et your Coverr
License new
Contribute
Subscribe for new videos
 
beautiful, free videos for your homepage
7 new videos every monday
Coverr was made with  by the CodersClan and Veed.Me teams

Coverrs
All
Food
Mood
Nature
Tech
Artsy
People
Urban
Animals
Animated
Aerial
 
Top
RecordingNew!
SoundmanNew!
VR
Bed Phone
Wet Drive
Home Work
iPhone X overview
iPhone X showing off
Mirroring iPhone
Mobile-Games
Writing-Working
I Just Wanted
Workaholic
Muji Doodle
Save As
Sharper
Sketch
Slow Typer
Office Perks
Black Keys
iPhonography
Pencil Down
Discussing Features
Morning Routine
Very Open Space
Office Day
Browsing
Spacious
Love Coding
Working Man
Busy People
Paperwork
Inbox Zero
Team Work
Erase and Rewind
Noted
Analog Typing
BW Scroll
Email Scroll
Hey World
Love iOS
Procrastination
White Keyboard
'Merica
Screens
Working House
abcd
PC Typing
Plug and Play
Scroll It
Wall Sketching
Ma Vibes
White Board
Aloha Mundo
Undo
Type
Coder
Meeting Room
Push the Buttons
Airtaxi
Home Work
Working It
A Working Man
Mock Up
Girls Code
Productive Morning
We Work We Wait
Android Scroll
iPhone Scroll
Working Space
Typing Numbers
Mickey
For Wes
Agile
Hello World
Highrise
Typing...
Office Hours
Lamp
How to use
1. Download your favorite video.

2. Upload the video to your website.

3. Add the following snippets to your site

Be sure to change the 3 source paths marked in blue

HTML
CSS
JavaScript
//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}