import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex flex-col place-items-center -mt-8">
        <Image
          className="w-full h-auto max-w-[1200px]"
          src="/img/silbern.webp"
          alt="Silbern"
          width={1200}
          height={800}
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />
        <p className="pt-4 text-lg">Financial Reishi Research Institute</p>
      </div>
    </main>
  );
}
