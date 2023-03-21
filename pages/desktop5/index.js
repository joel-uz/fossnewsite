import styles from "../../styles/desktop5.module.css"
import head1 from "../../images/cov1.jpg"
import head2 from "../../images/cov2.jpg"
import ellipse from "../../images/side.png"
import string from "../../images/string.png"
import Image from 'next/image';

function TeamPage() {
    return <>
    <div>
        <Image src={ellipse} alt={'side'} className={styles.ellipse}/>
        <Image src={string} alt={'side'} className={styles.string}/>
    </div>

    <div className={styles.toppart}>
        <h1 className={styles.mainhead}>MEET THE TEAM</h1>
    </div>

    <div>
        <h2 className={styles.heads}>THE HEADS</h2>
        <div className={styles.mainheads}>

            <div className={styles.individual}>
                <Image src={head1} alt="Avatar" className={styles.avatar}/>
                <span className={styles.name}>THE SECRETARY</span>
            </div>

            <div className={styles.individual}>
                <Image src={head2} alt="Avatar" className={styles.avatar}/>
                <span className={styles.name}>THE BOSS MAN</span>
            </div>

        </div>
    </div>
    
    </>

}

export default TeamPage