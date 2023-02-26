const metrics = {
    // Среднее значение
    avg: (checks, key) => {
        var result = 0
        if (checks.length > 0) {
            for (let i in checks) {
                let check = checks[i]
                if(check[key] > 0.0) {
                    result = result + check[key]
                }
            }
            result = result / checks.length
        }
        return result.toFixed(2)
    },

    codeResponse: (code: number): string => {
        var type = "success"
        if(code == 0) {
            type = "danger"
        } else {
            if(code <= 200) {
                type = "success"
            }
            if(code >= 300) {
                type = "warning"
            }
            if(code >= 400) {
                type = "danger"
            }
        }
        return type
    },
}

export default metrics;