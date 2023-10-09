export const convertToJSObject = (arr) => {
    let obj = {};

    for (let item of arr) {
        if (item.key == '' || item.value == '') continue;
        obj[item.key] = item.value;
    }
    return obj;
};
