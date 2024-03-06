import styless from "./not-found.modules.css";
import styles from "./componentes/menu.module.css";
import Image from "next/image";
import style from "./componentes/footer.module.css";

export default function notFound(){
    return (
        <div className="page">
            <div className="error"> 
                <h1>Oops! Não foi encontrado a página :( </h1>
                <Image width={500} height={500} src={'https://thumbs.dreamstime.com/z/rocket-icons-start-up-launch-symbol-new-innovation-development-trendy-modern-flat-design-icon-template-vector-illustration-41406668.jpg?ct=jpeg'}/>
            </div>
        </div>
    )
}