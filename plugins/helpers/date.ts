const monthNamesGenitive = [
    "Января", "Февраля", "Марта",
    "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября",
    "Октября", "Ноября", "Декабря"
]
const monthNames = [
    "Январь", "Февраль", "Март",
    "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь",
    "Октябрь", "Ноябрь", "Декабрь"
]
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const date = {
    /** Текущая дата в объект даты */
    getDateNow: (): Date => {
        var date = new Date()
        return date
    },
    /** Преобразование строки даты в объект даты */
    getDate: (dateStr: string): Date => {
        var date = new Date(dateStr)
        return date
    },
    /** Преобразование строки даты в полную дату */
    getFullDate: (dateStr: string, seconds: boolean = false): string => {
        var date = new Date(dateStr)
        switch (seconds) {
            case true:
                return date.toLocaleDateString() + ', ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            default:
                return date.toLocaleDateString() + ', ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    },
    /** Преобразование строки даты во время */
    getTime: (dateStr: string, seconds: boolean = false): string => {
        var date = new Date(dateStr)
        switch (seconds) {
            case true:
                return date.toLocaleTimeString() + ':' + date.getSeconds()
            default:
                return date.toLocaleTimeString()
        }
    },
    /** Преобразование строки даты во время */
    getRus: (dateStr: string, seconds: boolean = false): string => {
        var date = new Date(dateStr)
        if (seconds) {
            return date.getDate() + ' ' + monthNamesGenitive[date.getMonth()] + ' ' + date.getFullYear() + ', ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        } else {
            return date.getDate() + ' ' + monthNamesGenitive[date.getMonth()] + ', ' + date.getFullYear()
        }
    },

    /** Преобразование строки даты (как в соцсетях) */
    getSocial: (dateStr: string) => {
        let now = new Date()
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
        let date = new Date(dateStr)
        let dateTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        let daysDifference = Math.round((now.setHours(12) - date.setHours(12)) / 8.64e7)

        if (daysDifference == 0) {
            return 'Сегодня в ' + dateTime
        }
        if (daysDifference == 1) {
            return 'Вчера в ' + dateTime
        }
        // if(daysDifference == 2) {
        //   return 'Позавчера в ' + dateTime
        // }
        if (daysDifference < 7) {
            return days[date.getDay()] + ', ' + dateTime
        }
        if (now.getFullYear() == date.getFullYear()) {
            return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + dateTime
        }

        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + dateTime
    },
}

export default date;