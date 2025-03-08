interface GameRatingProps {
  rating?: number;
}

export default function GameRating({ rating }: GameRatingProps) {
  if (rating === undefined) return null;

  const getColor = (rating: number) => {
    if (rating >= 90) return "bg-green-800";
    if (rating >= 80) return "bg-green-700";
    if (rating >= 70) return "bg-green-500";
    if (rating >= 50) return "bg-yellow-400";
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
