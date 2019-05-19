const {moment} = require('./vendor.js');

var countDownTime = 300;
$('li[role="time"] time').html(moment.duration(countDownTime, 'seconds').format('mm:ss'));

var timer = moment.duration(1, "seconds").timer({
    loop: true
}, function () {
    var timeRemaining = moment.duration(countDownTime, 'seconds').format('mm:ss');    
    $('li[role="time"] time').html( timeRemaining );

    countDownTime--;
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



