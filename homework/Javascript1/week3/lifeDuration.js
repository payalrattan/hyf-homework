const seriesDurations = [
    { title: "Game of Thrones", seasons: 1, days: 5, hours: 23, minutes: 44 },
    { title: "Sopranos", seasons: 2, days: 7, hours: 0, minutes: 34 },
    { title: "The Wire", seasons: 3, days: 8, hours: 12, minutes: 34 },
    { title: "Breaking Bad", seasons: 4, days: 10, hours: 5, minutes: 54 },
];

function calculateSeriesLife() {
    const totalLifeMinutes = 80 * 365 * 24 * 60;
    let totalPercentage = 0;

    for (let series of seriesDurations) {
        const seriesMinutes = series.seasons * (series.minutes + series.hours * 60 + series.days * 24 * 60);
        const percentage = (seriesMinutes / totalLifeMinutes) * 100;

        console.log(series.title + " " + "seasons" + " " + series.seasons + " " + "took" +" "+percentage + " " + "% of my life");
        totalPercentage += percentage;
    }

    console.log("In total, that is" + totalPercentage + "% of my life");
}

calculateSeriesLife();
