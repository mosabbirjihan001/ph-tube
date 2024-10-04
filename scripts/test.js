function getTimeString(time){

    const hour = parseInt(time / 3600) ;
    let second = time % 3600 ;
    let minute = parseInt(second / 60) ;
    second = parseInt(second % 60) ;
    return `${hour} hour ${minute} minute ${second} second ago`
}

console.log(getTimeString(6520));