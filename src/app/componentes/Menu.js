import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return (
        <header className={styles.cabecalho}>
            <div>
                <Link href="https://ead.ifms.edu.br">
                    <Image width={300} height={100} src={'https://ead.ifms.edu.br/pluginfile.php/1/theme_moove/logo/1699458447/banner%20topo%20capa%20sem%20brasao.jpg'}/>
                </Link>
            </div>
            <nav>
                <ul className={styles.link}>
                    <Link href="/" >
                        <li>Home</li>
                    </Link>
                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link> 
                    <Link href="/localizacao" >
                        <li>Localização</li>
                    </Link> 
                </ul>
            </nav>
        </header>
    )
}