import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <ul className="px-8 py-10 w-3/4">
      <p className="text-2xl font-bold">Reviews on your product</p>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ul>
  );
}
