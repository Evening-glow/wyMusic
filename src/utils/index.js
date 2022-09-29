/**
 * 数字转换，将大额数字转换为万、亿、万亿等
 * @param value 数字值
 */
export function bigNumberTransform(value) {
    if (typeof value == 'string') {
        value = Number(value);
    }
    let unit = '';
    let k = 10000;
    let sizes = ['', '万', '亿', '万亿'];
    let i;
    if (value < k) {
        value = value;
    } else {
        i = Math.floor(Math.log(value) / Math.log(k));
        value = ((value / Math.pow(k, i))).toFixed(2);
        unit = sizes[i];
    }
    return value + unit;
};
