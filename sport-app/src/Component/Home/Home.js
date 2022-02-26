import { useEffect, useState } from "react";
import StandingTable from "./Standing/StandingTable";
import Header from "../Header/Header.js";
import styles from "./Home.module.css";
import CurrMatch from "../CurrMatch/CurrMatch";

function Home({appKey}) {
    const now = new Date();
    const timezone = "Asia/Seoul";
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());
    const [day, setDay] = useState(now.getDay());

    const [leagueInfo, setLeagueInfo] = useState([]);
    const [standing, setStanding] = useState([]);
    const [season, setSeason] = useState(year-1);
    const [leagueId, setLeagueId] = useState("39");

    const getStanding = () => {
        const url = 
            `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${leagueId}`
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": appKey
            }
        })
        .then(response => response.json())
        .then(json => {
            setLeagueInfo(json);
            setStanding(json.response[0].league.standings[0]);
        })
    }

    useEffect(() => {
        getStanding();
    }, [])
    return(
        <div className={styles.home}>
            <section className={styles.firstSection}>
                <StandingTable standing={standing} />
                <CurrMatch
                    season={season}
                    leagueId={leagueId}
                    timezone={timezone}
                />
            </section>
        </div>
    );
}

export default Home;