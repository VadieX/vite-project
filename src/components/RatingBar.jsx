import React from 'react';
import '../styles/RatingBar.css';

function RatingBar({ rating }) {
  const fullStar = '★';
  const emptyStar = '☆';

  return (
    <span className="text-warning rating-stars">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i}>
          {i < rating ? fullStar : emptyStar}
        </span>
      ))}
    </span>
  );
}

export default RatingBar;