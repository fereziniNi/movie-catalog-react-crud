import styles from './Cabecalho.module.css';
import MenuLink from '../CabecalhoLink/CabecalhoLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    INÍCIO
                </MenuLink>
                <MenuLink to="/criarFilmes">
                    CRIAR
                </MenuLink>
            </nav>
        </header>
    )
}