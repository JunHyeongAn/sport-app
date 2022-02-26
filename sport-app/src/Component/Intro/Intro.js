import { Button, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import {Link} from "react-router-dom"
import styles from "./Intro.module.css";

function Intro() {
    return(
        <div className={styles.introContainer}>
            <Modal show={true} className={styles.modal}>
                <ModalHeader>
                    <ModalTitle>Title</ModalTitle>
                    </ModalHeader>
                <ModalBody>
                    Welcome!!<br/>
                    Sport App에 오신걸 환영합니다.<br/>
                    이곳에서는 여러 팀들의 경기결과 및 분석 등<br/>
                    많은 정보들을 얻을 수 있습니다.
                </ModalBody>
                <ModalFooter>
                    <Link to="/home">
                        <Button variant="primary">Play Sport!</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Intro;