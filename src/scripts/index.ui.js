const {moment} = require('./vendor.js');

const Handlebars = require('handlebars');

var countDownTime = 300000;
var countUpTime   = 0;

$('li[role="time"] time').html(moment.duration(countDownTime, 'milliseconds').format('mm:ss'));
var timer = moment.duration(1, "milliseconds").timer({

    loop: true
}, function () {
    if( countDownTime <= 0 ){
        timer.stop();
        confirm('Focus round complete. Would you like to take a break?');
        console.log('Bang!');
    }
    
    var timeRemaining = moment.duration(countDownTime, 'milliseconds').format('mm:ss');    
    $('li[role="time"] time').html( timeRemaining );
    
    var progressBarVal = (countUpTime * 100) / 300000;
    $('progress[role="progress-bar-track"]').attr('value', progressBarVal);
    
    countDownTime = countDownTime - 5;
    countUpTime= countUpTime + 5;
});

$('li[role="pause-time-btn"] i').click(
    ()=>{
        if ($('li[role = "pause-time-btn"] i').hasClass('fa-pause') ){
            timer.stop();
        }
        else{
            timer.start();
        }
        
        $('li[role = "pause-time-btn"] i').toggleClass('fa-pause fa-play');
    }
);

$('li[role="stop-time-btn"] i').click(
    ()=>{
        if( confirm('you cannot restart a stopped focus period. Continue?') ){
            console.log('done');
            timer.stop();
            countDownTime = 300000;
            countUpTime   = 0;
            $('li[role="time"] time').html(moment.duration(countDownTime, 'milliseconds').format('mm:ss'));
                $('progress[role="progress-bar-track"]').attr('value', 0);
        }
        
        $('li[role = "pause-time-btn"] i').toggleClass('fa-pause fa-play');
    }
);

$('button[role="break-btn"]').click(
    () => {
        alert('Periodical breaks are important to mental health, total break time is tracked as a single variable throughout the day. Break period durations are specified in the settings tab');
    }
)

$('li[role="toggle-focus-btn"]').click(
    () => {
        // alert('Periodical breaks are important to mental health, total break time is tracked as a single variable throughout the day. Break period durations are specified in the settings tab');

        if ( $('span[class="focus-btns"]').css('margin-right') == '-120px' ) {
            $('span[class="focus-btns"]').animate({
                marginRight: "0"}, 100);
            }
        else if ($('span[class="focus-btns"]').css('margin-right') == '0px' ){
            $('span[class="focus-btns"]').animate({
                marginRight: "-120px"}, 100);
        }

        $('span[class="focus-btns"]').css('display','flex');
        $('li[role="toggle-focus-btn"] i').toggleClass('fa-clock fa-chevron-right');
    }
)


// Grab the template script
var theTemplateScript = $("#task-template").html();

// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// Define our data object
var context = {
    "content": 'Give Bella a hug!'
};

// Pass our data to the template
var theCompiledHtml = theTemplate(context);

// Add the compiled html to the page
// $('.content-placeholder').html(theCompiledHtml);
$('#task-list').append(theCompiledHtml);
