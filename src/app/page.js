import style from "./page.module.css"

export default async function Home() {
  const resposta = await fetch("http://localhost:3000/api", { next: { revalidate: 1 } }); //ele esta revalidando o site a cada 1 segundo, se não houver, ele não vai renderizar o site quando mudar algo pq ele está salvo com o cache antigo
  //o fetch vai entender que isso é um "get" dessa rota, await= a informação precisa ter uma espera, esse componente vai estar voltado para o server, mas no server >client<, quando tem o async e await, nn pode usar useEffect pq é voltado para client
  const campus = await resposta.json(); //converte para o script(array js), igual ao parseJSON mas esse .json é o que é usado no lado client

  return (
    <main style={{ marginTop: "10%" }}>
      {campus.map((campi) =>
        <div className={style.card}>
          <p>{campi.nome_campi}</p>
        </div>)}
    </main>
  )
}

/* {campus.map((campi) =>
  <div>
    <p>{campi.nome_campi}</p>
  </div>)}
 */