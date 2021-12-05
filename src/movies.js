// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  if (!array.length) return true;
  let directors = array.map(movie => movie.director);
  filteredDirectors = directors.filter((movie, index) => directors.indexOf(movie) === index);
  return filteredDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let filteredMovies = array.filter( movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) ;
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {  
  if (!array.length) return 0;
  let totalScore = array.reduce((preVal,current) =>  {
    current.score = current.score ? current.score : 0;
    return preVal + current.score
  },  0);
  average = totalScore / array.length;
  return Number(average.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies = array.filter( movie => movie.genre.includes('Drama'))
  if (!dramaMovies.length) return 0;
  if (dramaMovies.length === 1) return dramaMovies[0].score;
  dramaTotalScore =  dramaMovies.reduce((preVal,current) => {
     current.score = current.score ? current.score : 0;
     return preVal + current.score;
  }, 0);
 dramaAverageScore = dramaTotalScore / dramaMovies.length
  return Number(dramaAverageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let sortedArray = [...array];
  sortedArray.sort((a, b) =>  {
      if (a.year === b.year) {
      if (a.title < b.title) return - 1;  
      if (a.title > b.title) return  1; 
      if (a.title === 0) return 0;
      } else {
          return  a.year - b.year
      }   
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
     
  let orderedArray = [...array];
  allTitles = orderedArray.map(movie => movie.title);

  
  sortedTitles = allTitles.sort((a, b) => {
    if (a < b) return - 1; //  1 here (instead of -1 for ASC)
    if (a > b) return  1; // -1 here (instead of  1 for ASC)
    if (a === 0) return 0;
      });     
  
  titles = sortedTitles.slice(0,20);
  
  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
