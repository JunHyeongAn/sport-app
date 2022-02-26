function Standing({rank, teamName, teamLogo, teamId, played, win, draw, lose, goal, against, goalDiff, points, form }) {
    return (
        <>
            <tr>
                <td>{rank}</td>
                <td>
                    <img src={teamLogo} alt=""/>
                </td>
                <td>{teamName}</td>
                <td>{played}</td>
                <td>{win}</td>
                <td>{draw}</td>
                <td>{lose}</td>
                <td>{points}</td>
                <td>{goal}</td>
                <td>{against}</td>
                <td>{goalDiff}</td>
            </tr>
        </>
    );
}

export default Standing;