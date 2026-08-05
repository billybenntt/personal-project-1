'use client'
import Image from "next/image"
import {data} from '@/content/planets'
import {useState} from "react";

interface PlanetWrapperProps {
    planet?: string
}
function Wrapper({planet: initialPlanet}: PlanetWrapperProps) {

    const [planet, setPlanet] = useState(initialPlanet || "earth");
    const [section, setSection] = useState<"overview" | "structure" | "geology">("overview")

    function handleSectionChange(value: "overview" | "structure" | "geology") {
        setSection(value)
    }

    const planetData = data.find((item) => item.name.toLowerCase() === planet.toLowerCase())

    const geologyAnimation =
        section === "geology"
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10 pointer-events-none"

    const planetImage =
        section === "structure"
            ? `/planets/planet-${planet}-internal.svg`
            : `/planets/planet-${planet}.svg`

    return (
        <section className="w-full px-6 py-5 space-y-10 lg:px-20">

            {/* Main Content */}
            <div className="grid gap-8 lg:grid-cols-5 lg:items-center">

                {/* Planet */}
                <div className="flex justify-center lg:col-span-3">
                    <div className="aspect-square w-52 sm:w-72 lg:w-105 relative">
                        <Image
                            src={planetImage}
                            alt={planetData?.name ?? planet}
                            fill
                            className="object-contain"
                        />

                        <div
                            className={`
                                absolute top-1/2 left-[-25%]
                                -translate-y-1/2
                                w-1/2 aspect-video rotate-90 scale-200
                                transition-all duration-500 ease-out
                                ${geologyAnimation}
                            `}
                        >
                            <Image
                                src={`/planets/geology-${planet}.png`}
                                alt={`${planetData?.name ?? planet} geology`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                {/* Information */}
                <div className="flex flex-col space-y-10 lg:col-span-2">

                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="font-heading text-5xl uppercase lg:text-7xl">
                            {planetData?.name}
                        </h2>

                        <p className="max-w-lg leading-8 text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ab cum debitis dolore est ex excepturi hic molestias non,
                            obcaecati odit pariatur quas qui quisquam quo quod sint
                            sit unde voluptatem.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 tracking-widest font-serif">

                        <button className="border p-4 text-left uppercase transition cursor-pointer"
                                onClick={() => handleSectionChange("overview")}
                        >
                            01 Overview
                        </button>

                        <button className="border p-4 text-left uppercase transition cursor-pointer"
                                onClick={() => handleSectionChange("structure")}
                        >
                            02 Internal Structure
                        </button>

                        <button className="border p-4 text-left uppercase transition cursor-pointer"
                                onClick={() => handleSectionChange("geology")}>
                            03 Surface Geology
                        </button>

                    </div>

                </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Rotation time
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        {planetData?.rotation}
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Revolution time
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        {planetData?.revolution}
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Radius
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        {planetData?.radius}
                    </p>
                </div>

                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Average temp
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        {planetData?.temperature}
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Wrapper