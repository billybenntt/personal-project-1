import PlanetWrapper from "@/components/wrappers/planet-wrapper";


export default async function Page() {

  return (
    <main className="mx-auto min-h-lvh w-full text-white">
      <PlanetWrapper planet="mars" />
    </main>
  );
}