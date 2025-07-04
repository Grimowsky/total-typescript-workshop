const getRandomPercentage = () => {
    const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;
    return randomPercentage;
};
const func = () => {
    // Refactor this to be its own function
    const randomPercentage = getRandomPercentage();
    console.log(randomPercentage);
};
