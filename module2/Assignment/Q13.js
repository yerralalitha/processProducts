function processCategories(categories) {
    const result = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    console.log("Category Count Object:", result);
    const sorted = Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0]);
    console.log("Sorted Categories:", sorted);
    return sorted;
}
processCategories(categories);