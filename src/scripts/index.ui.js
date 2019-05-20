const {moment} = require('./vendor.js');

var countDownTime = 300;
var countUpTime   = 0;

    $('div[role="progress-bar-track"]').progressbar({
        value: 50
    });

$('li[role="time"] time').html(moment.duration(countDownTime, 'seconds').format('mm:ss'));

var timer = moment.duration(1, "seconds").timer({
    loop: true
}, function () {
    if( countDownTime <= 0 ){
        timer.stop();
        confirm('Focus round complete. Would you like to take a break?');
        console.log('Bang!');
    }
    
    var timeRemaining = moment.duration(countDownTime, 'seconds').format('mm:ss');    
    $('li[role="time"] time').html( timeRemaining );

    console.log(((countUpTime * 100) / countDownTime));

    $('div[role="progress-bar-track"]').progressbar({
        value: (countUpTime*100)/countDownTime
    });

    countDownTime--;
    countUpTime++;
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
            countDownTime = 300;
            $('li[role="time"] time').html(moment.duration(countDownTime, 'seconds').format('mm:ss'));
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
            
            
        // $('li[role="focus-btn"], li[role="multi-btn"]').toggle("slide", { direction: "left" }, 500);

        $('span[class="focus-btns"]').css('display','flex');
        $('li[role="toggle-focus-btn"] i').toggleClass('fa-clock fa-chevron-right');
    }
)




