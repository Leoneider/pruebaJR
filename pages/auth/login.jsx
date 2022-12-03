import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/home.module.css';

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.login}>
                <div className={styles.form_container}>

                    <Image
                        src="/img/LogoCV.svg" // Route of the image file
                        height={120} // Desired size with correct aspect ratio
                        width={120} // Desired size with correct aspect ratio
                        alt="Logo"
                        className={styles.logo}
                    />

                    <h1 className={styles.title}>Bienvenido</h1>
                    <p className={styles.subtitle}>Contingencia Dispensación</p>

                    <form action="/" className={styles.form}>

                        <label htmlFor="user" className={styles.label}>Usuario</label>
                        <input type="text" id="user" className={styles.input} />

                        <label htmlFor="password" className={styles.label}>Contraseña</label>
                        <input type="password" id="password" className={styles.input} />

                    </form>
                    <div className={styles.flex_end}>
                        <button className={styles.primary_button}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </>
    );
}