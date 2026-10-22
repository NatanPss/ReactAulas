import { useState } from 'react'

type Prioridade = 'Alta' | 'Média' | 'Baixa'

type Demanda = {
  id: number
  titulo: string
  cliente: string
  prioridade: Prioridade
}

const estiloSelo: Record<Prioridade, string> = {
  Alta: 'bg-red-100 text-red-700',
  Média: 'bg-yellow-100 text-yellow-700',
  Baixa: 'bg-green-100 text-green-700',
}

const demandas: Demanda[] = [
  { id: 1, titulo: 'Site da Padaria Pão Quente', cliente: 'Padaria Pão Quente', prioridade: 'Alta' },
  { id: 2, titulo: 'Landing page da Semana Acadêmica', cliente: 'Centro Acadêmico', prioridade: 'Média' },
  { id: 3, titulo: 'Planilha de estoque', cliente: 'Mercado Bom Preço', prioridade: 'Baixa' },
]

type CardProps = {
  demanda: Demanda
  onExcluir: (id: number) => void
}

function Card({ demanda, onExcluir }: CardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${estiloSelo[demanda.prioridade]}`}
        >
          {demanda.prioridade}
        </span>
        <button
          onClick={() => onExcluir(demanda.id)}
          className="text-xs text-gray-400 hover:text-red-600"
        >
          Excluir
        </button>
      </div>

      <h2 className="mt-2 font-semibold text-gray-900">{demanda.titulo}</h2>
      <p className="text-sm text-gray-500">Cliente: {demanda.cliente}</p>
    </article>
  )
}

function App() {
  const [lista, setLista] = useState(demandas)

  function excluir(id: number) {
    setLista(lista.filter((d) => d.id !== id))
  }

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold text-blue-600">Quadro de Demandas lindão</h1>

      <div className="mt-4 flex flex-col gap-3 w-75 bg-gray-100 p-3 rounded-lg">
        {lista.map((d) => (
          <Card key={d.id} demanda={d} onExcluir={excluir} />
        ))}
      </div>
    </main>
  )
}

export default App