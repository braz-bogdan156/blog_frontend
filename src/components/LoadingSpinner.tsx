export default function LoadingSpinner({ size = 24 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="animate-spin border-2 border-blue-500 border-t-transparent rounded-full inline-block"
    />
  );
}