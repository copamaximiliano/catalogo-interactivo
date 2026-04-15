import styles from './ComponentHeader.module.css';

// COMPONENTE HEADER + FILTROS
export const ComponentHeader = ({ search, handlerSeachInCatalogo, optionDestacado, handlerChangeSelect }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Catálogo <span>Interactivo</span>
            </h1>
            <div className={styles.controls}>
                <label className={styles.label} htmlFor="search">Buscar</label>
                <input
                    className={styles.input}
                    type="text"
                    id="search"
                    placeholder="Buscar por título..."
                    value={search}
                    onChange={(e) => handlerSeachInCatalogo(e.target.value)}
                />
                <select
                    className={styles.select}
                    value={optionDestacado}
                    name="category"
                    id="category"
                    onChange={(e) => handlerChangeSelect(e.target.value)}
                >
                    <option value="all">Todos</option>
                    <option value={true}>Destacados</option>
                    <option value={false}>No destacados</option>
                </select>
            </div>
        </header>
    )
}
