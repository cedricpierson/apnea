import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";
import CityWikipediaInfos from "./CityWikipediaInfos";
import { Box, Stack } from "@mui/material";

function CityDetails({ city, setCity, list, setChecked }) {

    return (
        <>
            <CityHeader
                city={city}
                list={list}
                setCity={setCity}
                setChecked={setChecked}
            />
            <Stack
                gap="2rem"
                sx={{ padding: "1rem", maxWidth: "900px", margin: "auto" }}
            >
                <AirQuality city={city.name} />
                <CityWikipediaInfos city={city} />
            </Stack>
        </>
    );
}

export default CityDetails;