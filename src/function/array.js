export const initCompact = () => {
    let arrCompact = [2, 0, 6, 7, NaN, 8, false, undefined];
    let arrPositive = arrCompact.filter(function (number) {
        return number !== 0 && number !== false && number !== undefined && number !== '' && number !== null && isNaN(number) !== true;
    });
    document.getElementById('outCompact').innerHTML = arrPositive;
};

export const initConcat = () => {
    let arrConcat = [2, 3, 5, 6];
    arrConcat.unshift(76);
    document.getElementById('outConcat').innerHTML = arrConcat;
};
