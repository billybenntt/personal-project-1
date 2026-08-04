import Image from "next/image"

type StatBoxProps = {
    label: string
    value: string
}

function StatBox({label, value}: StatBoxProps) {
    return (
        <div
            className="flex flex-col items-center justify-center gap-1 p-4 border-b sm:border-b-0 sm:border-r last:border-none">
            <span
                className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">{label}</span>
            <span className="text-3xl font-extrabold font-heading">{value}</span>
        </div>
    )
}

const planetStats: StatBoxProps[] = [
    {label: "Rotation time", value: "0.99 Days"},
    {label: "Revolution time", value: "365.26 Days"},
    {label: "Radius", value: "6,371 KM"},
    {label: "Average temp", value: "16°c"},
]

function Wrapper() {
    return (
        <section
            className="text-white w-full min-h-128 grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-4 md:grid-rows-5 gap-4">
            <div className="md:col-span-2 md:row-span-4 flex justify-center items-center border">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-80 md:h-80 ">
                    <Image
                        src="/planets/planet-earth-internal.svg"
                        alt="Earth"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="md:col-span-2 md:row-span-4 md:col-start-3 border p-10 flex flex-col justify-between">
                {/* planet info */}
                <div className="space-y-4 ">
                    <h2 className="font-heading uppercase text-6xl md:text-7xl font-bold tracking-tight">Earth</h2>

                    <p className="font-serif text-muted-foreground leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cum debitis
                        dolore est ex excepturi hic molestias non, obcaecati, odit, pariatur quas
                        qui quisquam quo quod sint sit unde voluptatem.
                    </p>
                </div>

                {/* Mode Switcher */}
                <div className="flex flex-col  border-t">
                    <button
                        className="flex-1 p-4 text-sm font-heading uppercase tracking-wide border-r text-left hover:bg-slate-800 transition-colors">
                        01 overview
                    </button>
                    <button
                        className="flex-1 p-4 text-sm font-heading uppercase tracking-wide border-r text-left hover:bg-slate-800 transition-colors">
                        02 internal structure
                    </button>
                    <button
                        className="flex-1 p-4 text-sm font-heading uppercase tracking-wide text-left hover:bg-slate-800 transition-colors">
                        03 surface geology
                    </button>
                </div>
            </div>

            <div className="md:col-span-4 md:row-start-5 border grid grid-cols-1 sm:grid-cols-4">
                {/* planet status */}
                {planetStats.map((stat) => (
                    <StatBox key={stat.label} label={stat.label} value={stat.value}/>
                ))}
            </div>
        </section>
    )
}

export default Wrapper