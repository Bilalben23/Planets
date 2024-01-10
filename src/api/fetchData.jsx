export async function getPlanetsInfo() {
    const res = await fetch(
        "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/",
        {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "30ed562ce2mshee281d5326677c5p16948cjsn182796e4d462",
                "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
            },
        }
    );
    const data = await res.json();
    return data;
}
