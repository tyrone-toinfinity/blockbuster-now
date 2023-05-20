import Image from "next/image";
export default function Home() {
  return (
    <main className="relative h-full w-full bg-[url('/images/hero.webp')] bg-center bg-fixed bg-cover text-2xl text-yellow-400">
      <section className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="px-12 py-5">
          {" "}
          <Image src="Blockbuster_logo.svg" alt="log" width={60} height={60} />
        </div>
      </section>
    </main>
  );
}
