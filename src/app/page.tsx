import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen   flex flex-col justify-between p-10 md:p-16">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
          System Check
        </span>
      </div>

      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">
          Geist Sans
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Tailwind's compiling, the font's loading, and shadcn is themed.
          That's everything wired up correctly.
        </p>
        <div className="flex gap-3 pt-2">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-end text-xs text-gray-600 font-mono">
        <span>NEXT.JS + TAILWIND V4</span>
        <span>SHADCN/UI</span>
      </div>
    </main>
  );
}