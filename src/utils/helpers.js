export const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
}