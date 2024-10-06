import { StarIcon } from "../../public/icons/Icons";

function StarRating({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) {
  function isFilled(index: number, rating: number): boolean {
    const roundRating = Math.round(rating);
    return index < roundRating;
  }

  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        return (
          <StarIcon
            key={index}
            color="#FFD700"
            fill={isFilled(index, rating)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
