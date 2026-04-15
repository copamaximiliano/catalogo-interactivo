import styles from './ItemCard.module.css';

export const ItemCard = ({ item }) => {
    return (
        <div className={`${styles.card} ${item.destacado ? styles.highlighted : ''}`}>
            <h2 className={styles.title}>{item.titulo}</h2>
            <div className={styles.meta}>
                <span className={styles.badge}>{item.categoria}</span>
                <span className={styles.year}>{item.anio}</span>
            </div>
            {/* {item.destacado && <span className={styles.star}>Destacado</span>} */}
        </div>
    )
}
