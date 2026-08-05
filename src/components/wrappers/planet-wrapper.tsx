'use client'
import Image from "next/image"
import {data} from '@/content/planets'
import {useState} from "react";


function Wrapper() {

    const [section, setSection] = useState<"overview" | "structure" | "geology">("overview")

    function handleSectionChange(value: "overview" | "structure" | "geology") {
        setSection(value)
        console.log(value)
    }


    console.log(data)

    const planet = data.find((item) => item.name.toLowerCase() === "earth"?.toLowerCase()
    )


    console.log(planet)


    return (
        <section className="w-full px-6 py-5 space-y-10 lg:px-20">

            {/* Main Content */}
            <div className="grid gap-8 lg:grid-cols-5 lg:items-center">

                {/* Planet */}
                <div className="flex justify-center lg:col-span-3">
                    <div className="relative aspect-square w-52 sm:w-72 lg:w-105">
                        <Image
                            src={"/planets/planet-earth-internal.svg"}
                            alt="Earth"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Information */}
                <div className="flex flex-col space-y-10 lg:col-span-2">

                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="font-heading text-5xl uppercase lg:text-7xl">
                            Earth
                        </h2>

                        <p className="max-w-lg leading-8 text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ab cum debitis dolore est ex excepturi hic molestias non,
                            obcaecati odit pariatur quas qui quisquam quo quod sint
                            sit unde voluptatem.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 ">

                        <button className="border p-4 text-left uppercase font-heading transition cursor-pointer "
                                onClick={() => handleSectionChange("overview")}

                        >
                            01 Overview
                        </button>

                        <button className="border p-4 text-left uppercase font-heading transition cursor-pointer "
                                onClick={() => handleSectionChange("structure")}

                        >
                            02 Internal Structure
                        </button>

                        <button className="border p-4 text-left uppercase font-heading transition cursor-pointer"
                                onClick={() => handleSectionChange("geology")}                        >
                            03 Surface Geology
                        </button>

                    </div>

                </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p
                        className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Rotation time
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        2
                    </p>
                </div>


                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p
                        className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Revolution time
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        2
                    </p>
                </div>


                <div
                    className="flex flex-col items-center justify-center gap-1 border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p
                        className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Radius
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        2
                    </p>
                </div>


                <div className="flex flex-col items-center justify-center gap-1
                    border-b p-4 sm:border-b-0 sm:border-r last:border-none">
                    <p className="text-xl uppercase font-bold font-heading tracking-wider text-muted-foreground">
                        Average temp
                    </p>
                    <p className="text-3xl font-extrabold font-heading">
                        2
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Wrapper