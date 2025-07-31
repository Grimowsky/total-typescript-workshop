interface RequiredScores {
    math: number;
    english: number;
    science: number;
}

interface Scores extends RequiredScores {
    [key: string]: number;
}

const scores: Scores = {
    math: 95,
    english: 90,
    science: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
