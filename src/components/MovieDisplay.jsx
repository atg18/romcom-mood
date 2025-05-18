// components/MovieDisplay.jsx
import React from 'react';

export default function MovieDisplay({ movie, onNext, onReset }) {
  if (!movie) {
    return (
      <div className="text-center space-y-4">
        <p className="text-lg">No more movies in this mood.</p>
        <button
          onClick={onReset}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow"
        >
          Choose another mood
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl font-bold">Watch this!</h2>
  
      {movie["Poster URL"] && (
        <img
          src={movie["Poster URL"]}
          alt={`${movie.Title} poster`}
          className="w-64 h-auto mx-auto rounded-xl shadow-md"
        />
      )}
      
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-semibold">{movie.Title} ({movie.Year})</h3>
        <p className="italic">Directed by {movie.Director}</p>
        <p className="text-sm text-gray-600">Cast: {movie["Main Cast"]}</p>
        <p className="mt-3 text-md">{movie.Synopsis}</p>
      </div>

      <button
        onClick={onNext}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow"
      >
        I have watched this one
      </button>
    </div>
  );
}
