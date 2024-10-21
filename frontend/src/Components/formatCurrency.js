export const formatCurrency = (value) => {
    if (value === undefined || value === null) {
        return '';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.00';
};
