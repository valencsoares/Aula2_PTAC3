import { NextRequest, NextResponse } from "next/server";

const campus = [
    {
      id:1,
      nome_campi: "Campus Nova Andradina",
      imagem_url: "https://www.ifms.edu.br/campi/campus-nova-andradina/informacoes/moradia-estudantil/galeria-de-fotos/moradia-estudantil-1.png/@@images/image"
    },
    {
      id:2,
      nome_campi: "Campus Campo Grande",
      imagem_url: "https://cdn6.campograndenews.com.br/uploads/noticias/2023/12/26/3akbzh8vnwys8.jpg"
    }
];

export async function GET() {
    try {
      return NextResponse.json(campus);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
};