interface Item {
  id: number
  nome: string
  preco: number
  descricao: string
}

export const itemsParaCompra: Item[] = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 3500.0,
    descricao: 'Notebook de alta performance com 16GB de RAM e 512GB SSD.',
  },
  {
    id: 2,
    nome: 'Smartphone',
    preco: 2500.0,
    descricao:
      'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.',
  },
  {
    id: 3,
    nome: 'Fone de Ouvido',
    preco: 300.0,
    descricao: 'Fone de ouvido sem fio com cancelamento de ruído ativo.',
  },
  {
    id: 4,
    nome: 'Monitor',
    preco: 1200.0,
    descricao: 'Monitor de 27 polegadas com resolução 4K e tecnologia IPS.',
  },
  {
    id: 5,
    nome: 'Teclado Mecânico',
    preco: 450.0,
    descricao: 'Teclado mecânico com switches Cherry MX Blue e iluminação RGB.',
  },
]
