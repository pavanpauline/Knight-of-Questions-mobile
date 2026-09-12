export type Flashcard = {
  id: string;
  front: string;
  back: string;
  category: string;
  title: string;
};

export type Deck = {
  id: string;
  name: string;
  subject: string;
  description: string;
  cards: Flashcard[];
};

export const MOCK_DECKS: Deck[] = [
  {
    id: '1',
    name: '1ª REVOLUÇÃO INDUSTRIAL',
    subject: 'História',
    description: 'História - 1ª Revolução Industrial na Europa',
    cards: [
      {
        id: 'c1',
        category: 'História - Rev. Ind.',
        title: 'Causas Principais',
        front: 'Quais foram as principais causas da 1ª Revolução Industrial?',
        back: 'Acúmulo de capitais, invenção da máquina a vapor, reservas de carvão e ferro na Inglaterra.'
      },
      {
        id: 'c2',
        category: 'História - Rev. Ind.',
        title: 'Pioneirismo Inglês',
        front: 'Por que a Inglaterra foi pioneira?',
        back: 'Devido aos Atos de Navegação, cercamentos dos campos (enclosures) e burguesia no poder (Revolução Gloriosa).'
      }
    ]
  },
  {
    id: '2',
    name: 'PRIMEIRA GUERRA MUNDIAL',
    subject: 'História',
    description: 'História - Conflitos do Século XX',
    cards: [
      {
        id: 'c3',
        category: 'História - 1ª Guerra',
        title: 'Estopim',
        front: 'Qual foi o estopim da Primeira Guerra Mundial?',
        back: 'O assassinato do Arquiduque Francisco Ferdinando, herdeiro do trono austro-húngaro, em Sarajevo.'
      },
      {
        id: 'c4',
        category: 'História - 1ª Guerra',
        title: 'Tríplice Entente',
        front: 'Quais países formavam a Tríplice Entente no início?',
        back: 'Reino Unido, França e Império Russo.'
      }
    ]
  },
  {
    id: '3',
    name: 'MATEMÁTICA DISCRETA',
    subject: 'Matemática',
    description: 'Matemática - Conjuntos Numéricos',
    cards: [
      {
        id: 'c5',
        category: 'Matemática - Conjuntos',
        title: 'Conjuntos Disjuntos',
        front: 'O que são conjuntos disjuntos?',
        back: 'São conjuntos que não possuem elementos em comum (sua interseção é vazia).'
      }
    ]
  }
];
