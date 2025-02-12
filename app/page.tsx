import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className= "bg-white w-80 rounded-lg border border-red-500 shadow-2xl"
      >
      <img className="object -cover rounded-lg"src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="" />
      <h1 className="text-lg font-sans mt-2 m-4">Red heaven</h1>
      <p className=" m-5 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
      Maiores et perferendis eaque, exercitationem praesentium nihil
      </p>
      <span className=" border bg-red-500 rounded-lg m-3 text-white px-3 py-0" > #tailwind</span>
      <span className=" border bg-red-500 rounded-lg m-3 text-white px-3 py-0"> #frontendverything</span>
      </section>
      

      
      

    </main>
  );
}
