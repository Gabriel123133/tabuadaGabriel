// app/api/tabuada/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Pega o número da query string
  const { searchParams } = new URL(req.url);
  const numeroParam = searchParams.get("numero");

  if (!numeroParam || isNaN(Number(numeroParam))) {
    return NextResponse.json(
      { error: "Parâmetro 'numero' inválido ou ausente." },
      { status: 400 }
    );
  }

  const numero = Number(numeroParam);

  // Gera a tabuada
  const tabuada = Array.from({ length: 10 }, (_, i) => ({
    expressao: `${numero} x ${i + 1}`,
    resultado: numero * (i + 1),
  }));

  return NextResponse.json({ numero, tabuada });
}
