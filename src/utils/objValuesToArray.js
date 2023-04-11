export const objValuesToArray = (enterData) => {
    let result = [];
    const next = (data) => {
        if (Array.isArray(data)) {
            // обработка элементов массива
            data.forEach(next);
        } else if (typeof data === 'object') {
            // обработка значений объекта
            Object.values(data).forEach(next);
        } else {
            result = result.concat(data);
        }
    };
    next(enterData);
    return result;
};
