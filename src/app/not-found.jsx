import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <span className={styles.error}>404</span>

                <h1>Página Não Encontrada</h1>

                <p>
                    Ops! A página que você está procurando não existe,
                    foi removida ou mudou de endereço.
                </p>

                <Link href="/" className={styles.button}>
                    Voltar para a Home
                </Link>
            </div>
        </main>
    );
}