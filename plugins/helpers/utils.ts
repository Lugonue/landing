const utils = {
    /** определение внешней ссылки */
    target: (link: string, bool = false) => {
        if (!link) return false;

        if (bool) {
            return link?.includes('http') ? true : false
        }

        return link?.includes('http') ? '_blank' : '_self'
    },
    /** Генерация слага */
    slugify: (text: string, short = false) => {
        if (!text) return '';
        let slug = '';

        if (short) {
            let words = text.split(' ')
            for (var i = 0; i < words.length; i++) {
                slug += words[i].charAt(0)
            }
        } else {
            slug = text.toString()
        }

        slug = slug.replace(/[^A-яA-Za-z0-9\s!?]/g, "").replace(/<(.|\n)*?>/g, '').replace(/[«»"']/g, "").replace(/[ ]/g, "-").toLowerCase()

        let answer = '';
        let converter = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
            'э': 'e', 'ю': 'yu', 'я': 'ya',

            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
            'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
            'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
            'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
            'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
            'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
            'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
        };

        for (let i = 0; i < slug.length; ++i) {
            if (converter[slug[i]] == undefined) {
                answer += slug[i];
            } else {
                answer += converter[slug[i]];
            }
        }

        return answer;
    },
    /**Осветление/затемнение цвета HEX */
    // colorLightenDarken: (col: string, amt: number) => {
    //     var usePound = false;

    //     if (col[0] == "#") {
    //         col = col.slice(1);
    //         usePound = true;
    //     }

    //     var num = parseInt(col, 16);

    //     var r = (num >> 16) + amt;

    //     if (r > 255) r = 255;
    //     else if (r < 0) r = 0;

    //     var b = ((num >> 8) & 0x00FF) + amt;

    //     if (b > 255) b = 255;
    //     else if (b < 0) b = 0;

    //     var g = (num & 0x0000FF) + amt;

    //     if (g > 255) g = 255;
    //     else if (g < 0) g = 0;

    //     return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

    // }
}

export default utils;