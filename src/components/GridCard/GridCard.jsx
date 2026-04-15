import styles from './GridCard.module.css';

export const CardGrid = ({ children }) => {
    return (
        <main className={styles.grid}>
            {children}
        </main>
    )
}
