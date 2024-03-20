import style from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const resposta = await fetch("https://back-end-ifms-dusky.vercel.app/campi", { next: { revalidate: 1 } }); //ele esta revalidando o site a cada 1 segundo, se não houver, ele não vai renderizar o site quando mudar algo pq ele está salvo com o cache antigo
  //o fetch vai entender que isso é um "get" dessa rota, await= a informação precisa ter uma espera, esse componente vai estar voltado para o server, mas no server >client<, quando tem o async e await, nn pode usar useEffect pq é voltado para client
  const campi = await resposta.json(); //converte para o script(array js), igual ao parseJSON mas esse .json é o que é usado no lado client

  return (
    <main style={{ marginTop: "10%" }}>
      <div className={style.container}>
        {campi.map((campus) =>
          <div className={style.card}>
            <Image width={400} height={300} src={campus.image_url} />
            <p>{campus.nome_campus}</p>
          </div>)}
      </div>
    </main>
  )
}