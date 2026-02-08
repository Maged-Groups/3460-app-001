import styles from './header.module.css'

import { app_title } from '../consts'
import Button from '../components/atoms/Button'

export default function Header() {

    return (
        <header>
            <h1 className={styles.title}>{app_title}</h1>

            <p>In {app_title} we belive that the customer is our .....</p>

            <div className='flex gap-2'>
                <Button title='Ay Haga' variant='maged' outline />
                <h2>Welcome to my app</h2>
            </div>

            <div className='my-8'>
                <Button title='Subscribe' variant='success' rounded outline />
                <Button title='Login' variant='danger' />
                <Button title='Register' variant='info' rounded />
                <Button title='Ay Haga' variant='maged' outline />
            </div>
        </header>
    )
}

// const props = {
//     children: 'Subscribe',
//     id: 'btn_main',
//     title:'My Title'
// }

// Button(props)