import React from "react";
import { getPlanetsInfo } from "../api/fetchData";

import { useQuery } from "@tanstack/react-query";

export default function Main() {
    const {
        data: planetsInfo,
        isLoading,
        isError,
        error
    } = useQuery({
        queryFn: getPlanetsInfo,
        queryKey: ["planetsInfo"]
    })
    console.log(planetsInfo)

    return (
        <main>
            <h1>Planets Info</h1>
            {isError && <div>Error: {JSON.stringify(error)}</div>}
            {isLoading && <div className="loading-spinner">
                <span></span>
                <b>Loading...</b>
            </div>}
            <section className="planets-box">
                {!isLoading &&
                    planetsInfo.map(planet => {
                        return <div key={planet.id}>
                            <p>Name: {planet.name}</p>
                            <img src={planet.imgSrc.img} alt={planet.imgSrc.imgDescription
                            } />
                            <p>Description: {planet.description}</p>
                            <div>
                                <p>Mass: {planet.basicDetails.mass}</p>
                                <p>Mass: {planet.basicDetails.volume}</p>
                            </div>
                            <p>You can find more info on <a href={planet.wikiLink} title={planet.source} target="_blank" rel="noreferrer">here</a></p>

                        </div>
                    })
                }
            </section>

        </main>
    );
}
