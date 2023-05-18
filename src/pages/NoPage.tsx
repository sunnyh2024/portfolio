import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-center h-screen w-screen text-3xl absolute z-11 pt-20">
      <div>No content on this page!</div>
      <button
        onClick={() => navigate("/")}
        className="p-2 mt-6 hover:scale-110"
      >
        Back to Home
      </button>
    </div>
  );
}
