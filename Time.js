class Time{
    timeroundup(time){
        var timeSplit = time.split(':')
        var [ hour, minutes, seconds ] = timeSplit
        if(minutes > 0 ){
            var hour = parseInt(hour) + 1
            var minutes = '00'
            var seconds = '00'
        }
        var time = [ `${hour}`, minutes, seconds].join(':')
        return time
    }

    calculateEndTime(time){
        var timeSplit = time.split(':')
        var [ hour, minutes, seconds ] = timeSplit
        var hour = parseInt(hour) + 1
        var time = [ `${hour}`, minutes, seconds].join(':')
        return time
    }
}

module.exports = Time