import React, { useState } from 'react';
import movies from './final_movies.json';
import MoodSelector from './components/MoodSelector';
import MovieDisplay from './components/MovieDisplay';

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [remainingMovies, setRemainingMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);

  const handleMoodSelect = (mood) => {
    const moodMovies = movies.filter((movie) => movie.Mood === mood);
    const shuffled = moodMovies.sort(() => 0.5 - Math.random());
    setRemainingMovies(shuffled);
    setCurrentMovie(shuffled[0]);
    setSelectedMood(mood);
  };

  const handleNextMovie = () => {
    const [_, ...rest] = remainingMovies;
    setRemainingMovies(rest);
    setCurrentMovie(rest[0]);
  };

  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto text-center">
      {!selectedMood ? (
        <MoodSelector onSelect={handleMoodSelect} />
      ) : (
        <MovieDisplay movie={currentMovie} onNext={handleNextMovie} />
      )}
    </main>
  );
}
