import styles from './footer.module.css'
import {app_title} from '../consts';

 

const thisYear = new Date().getFullYear();

export default function Footer() {
    if (5 > 4) { console.log('Hello RJS') }
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>
                All rights reserved {thisYear} - {app_title} || Maged Yaseen
            </p>
        </footer>
    )
}
