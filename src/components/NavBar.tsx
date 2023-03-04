export default function NavBar() {


  return (
    <div className="w-[100%] text-2xl relative z-10">
      <div className="flex flex-row w-[80%] h-20 mx-auto rounded-full bg-slate-700">
        <div className="justify-start ml-12 my-auto">Sunny</div>
        <div className="flex flex-row flex-grow gap-2 justify-end mr-12 my-auto">
          <button className="rounded-full hover:bg-slate-600 hover:scale-[1.1] transition-all duration-400 p-3">About</button>
          <button className="rounded-full hover:bg-slate-600 hover:scale-[1.1] transition-all duration-400 p-3">Projects</button>
          <button className="rounded-full hover:bg-slate-600 hover:scale-[1.1] transition-all duration-400 p-3">Contact</button>
        </div>
      </div>
    </div>
  );
}
