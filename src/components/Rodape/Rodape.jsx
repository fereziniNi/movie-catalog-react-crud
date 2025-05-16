import styles from './Rodape.module.css';

export default function Rodape() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.rodape}>
            <div>
                Desenvolvido por Nícolas Ferezini.
            </div>
            <div className={styles.copyright}>
                © {anoAtual} Nícolas Ferezini. Todos os direitos reservados.
            </div>
        </footer>
    );
}