const date = {
    date: (dateStr) => {
        var date = new Date(dateStr)
        return date
    },
    time: (dateStr, seconds = false) => {
        var date = new Date(dateStr)
        switch (seconds) {
            case true:
                return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
                break;
            default:
                return date.getHours() + ':' + date.getMinutes()
        }
    },
}

export default date;