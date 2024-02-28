import Link from "next/link";
import Image from "next/image";

export default function Menu(){
    return (
            <h1>Menu</h1>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link>
                    <Link href="ead.ifms.edu.br">
                        <Image width={150} height={100} src={"https://ead.ifms.edu.br/theme/moove/pix/default_course.jpg"}/>
                    </Link>    
                </ul>
            </nav>
        </header>
    )
}