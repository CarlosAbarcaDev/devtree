export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="bg-red-50 text-red-500 text-sm p-3 uppercase font-bold rounded-lg text-center ">
      {message}
    </p>
  );
}
