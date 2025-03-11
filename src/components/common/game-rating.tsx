interface GameRatingProps {
  rating?: number;
}

export default function GameRating({ rating }: GameRatingProps) {
  if (rating === undefined) return null;

  const getColor = (rating: number) => {
    if (rating > 90) return "bg-teal-800";
    else if (rating >= 80) return "bg-green-500";
    else if (rating >= 70) return "bg-emerald-400";
    else if (rating >= 50) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div
      className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-sm ${getColor(
        rating
      )}`}
    >
      {Math.ceil(rating)}
    </div>
  );
}
