import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Standing from "./Standing";
import styles from "./Standing.module.css";

function StandingTable({standing}) {
    const [topStanding, setTopStanding] = useState([]);

    const getTopStanding = () => {
        for(let i = 0; i < 10; i++) {
            if(standing[i] == undefined) break;
            setTopStanding(curr => [...curr, standing[i]]);
        }
    }

    useEffect(() => {
        getTopStanding();
    }, [standing])

    return(
        <div className={styles.standingBox}>
            <h3 className={styles.standing}>순위</h3>
            <Table className={styles.standingTable} striped bordered hover>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>팀로고</th>
                        <th>팀이름</th>
                        <th>경기수</th>
                        <th>승리</th>
                        <th>무승부</th>
                        <th>패배</th>
                        <th>승점</th>
                        <th>득점</th>
                        <th>실점</th>
                        <th>골득실</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topStanding.map(teamInfo => (
                            <Standing key={teamInfo.team.id}
                            rank={teamInfo.rank}
                            teamName={teamInfo.team.name}
                            teamLogo={teamInfo.team.logo}
                            teamId={teamInfo.team.id}
                            played={teamInfo.all.played}
                            win={teamInfo.all.win}
                            draw={teamInfo.all.draw}
                            lose={teamInfo.all.lose}
                            goal={teamInfo.all.goals.for}
                            against={teamInfo.all.goals.against}
                            goalDiff={teamInfo.goalsDiff}
                            points={teamInfo.points}
                            form={teamInfo.form}
                            />
                            ))
                        }
                </tbody>
            </Table>
            <div className={styles.more}>더보기</div>
        </div>
    );
}

export default StandingTable;