const utils = {
    pxToNumber: (property, noNegative) => Number(property.replace(noNegative ? /\D/g : 'px', '')) || 0
}
