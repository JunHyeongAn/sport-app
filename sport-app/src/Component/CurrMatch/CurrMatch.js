import { useEffect, useState } from "react";
import styles from "./CurrMatch.module.css";

function CurrMatch({season, leagueId, timezone}) {
    const [liveMatch, setLiveMatch] = useState([]);
    const [matches10, setMatches10] = useState([]);

    const getLiveMatch = () => {
        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=${leagueId}&season=${season}&timezone=${timezone}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "828d603336msh2592b04b6c3cabfp1bfd4djsn0fe352e47219"
            }
        })
        .then(response => response.json())
        .then(json => setLiveMatch(json.response))
    }

    const get10Matches = () => {
        for(let i = 0; i < 10; i++) {
            if(liveMatch[i] == undefined) break;
            setMatches10(curr => [...curr, liveMatch[i]])
        }
    }
    console.log(matches10)

    useEffect(() => {
        get10Matches();
    }, [liveMatch])

    useEffect(() => {
        getLiveMatch();
    }, [])
    return (
        <div className={styles.currMatchBox}>
            <h2>진행중인 경기</h2>
            <ul className={styles.currMatchList}>
                {
                    matches10.map(match => (
                        <li key={match.fixture.id}>
                            {match.teams.home.name}  {match.goals.home}  :  {match.goals.away}  {match.teams.away.name} 
                            {match.fixture.status.long == "First Half" ? " 전반" : " 후반"}
                            <span>  {match.fixture.status.elapsed}분 경과</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CurrMatch;