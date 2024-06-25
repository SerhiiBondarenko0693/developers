function isEmpty(value) {

    if (value === "" || value === null || value === undefined) {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }
    if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}


export const hasEmptyFields = (obj)=> {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (isEmpty(obj[key])) {
                return true;
            }
        }
    }
    return false;
}