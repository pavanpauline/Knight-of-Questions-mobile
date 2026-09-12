export type SimuladoOption = {
  id: string;
  label: string; // A, B, C, D
  text: string;
};

export type SimuladoQuestion = {
  id: string;
  subject: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  statement: string;
  options: SimuladoOption[];
  correctOptionId: string;
};

export type Prova = {
  id: string;
  name: string;
  questionCount: number;
  questions: SimuladoQuestion[];
};

export const MOCK_PROVAS: Prova[] = [
  {
    id: 'p1',
    name: 'SUBSTANTIVOS E ADJETIVOS',
    questionCount: 3,
    questions: [
      {
        id: 'p1q1',
        subject: 'Português — Morfologia',
        difficulty: 'Fácil',
        statement: 'Qual das opções abaixo é um substantivo coletivo?',
        options: [
          { id: 'a', label: 'A', text: 'Belo' },
          { id: 'b', label: 'B', text: 'Alcateia' },
          { id: 'c', label: 'C', text: 'Correr' },
          { id: 'd', label: 'D', text: 'Rapidamente' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'p1q2',
        subject: 'Português — Morfologia',
        difficulty: 'Médio',
        statement: 'Em "A menina inteligente resolveu o problema difícil", quantos adjetivos há?',
        options: [
          { id: 'a', label: 'A', text: 'Um' },
          { id: 'b', label: 'B', text: 'Dois' },
          { id: 'c', label: 'C', text: 'Três' },
          { id: 'd', label: 'D', text: 'Nenhum' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'p1q3',
        subject: 'Português — Morfologia',
        difficulty: 'Difícil',
        statement: 'Assinale a alternativa em que o termo destacado é um substantivo abstrato.',
        options: [
          { id: 'a', label: 'A', text: 'A MESA está quebrada.' },
          { id: 'b', label: 'B', text: 'O CACHORRO latiu.' },
          { id: 'c', label: 'C', text: 'A CORAGEM o fez avançar.' },
          { id: 'd', label: 'D', text: 'Ele comprou um CARRO.' },
        ],
        correctOptionId: 'c',
      },
    ],
  },
  {
    id: 'p2',
    name: 'SISTEMA NERVOSO',
    questionCount: 3,
    questions: [
      {
        id: 'p2q1',
        subject: 'Biologia — Fisiologia',
        difficulty: 'Fácil',
        statement: 'Qual é a unidade funcional do sistema nervoso?',
        options: [
          { id: 'a', label: 'A', text: 'Neurônio' },
          { id: 'b', label: 'B', text: 'Axônio' },
          { id: 'c', label: 'C', text: 'Dendrito' },
          { id: 'd', label: 'D', text: 'Sinapse' },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'p2q2',
        subject: 'Biologia — Fisiologia',
        difficulty: 'Médio',
        statement: 'O sistema nervoso autônomo é dividido em:',
        options: [
          { id: 'a', label: 'A', text: 'Central e periférico' },
          { id: 'b', label: 'B', text: 'Simpático e parassimpático' },
          { id: 'c', label: 'C', text: 'Motor e sensorial' },
          { id: 'd', label: 'D', text: 'Voluntário e involuntário' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'p2q3',
        subject: 'Biologia — Fisiologia',
        difficulty: 'Difícil',
        statement: 'Qual neurotransmissor é predominante na junção neuromuscular do sistema nervoso somático?',
        options: [
          { id: 'a', label: 'A', text: 'Dopamina' },
          { id: 'b', label: 'B', text: 'Serotonina' },
          { id: 'c', label: 'C', text: 'Acetilcolina' },
          { id: 'd', label: 'D', text: 'Noradrenalina' },
        ],
        correctOptionId: 'c',
      },
    ],
  },
  {
    id: 'p3',
    name: 'PRIMEIRA GUERRA MUNDIAL',
    questionCount: 4,
    questions: [
      {
        id: 'p3q1',
        subject: 'História — 1ª Guerra Mundial',
        difficulty: 'Fácil',
        statement: 'Qual país não fazia parte da Tríplice Entente originalmente?',
        options: [
          { id: 'a', label: 'A', text: 'Inglaterra' },
          { id: 'b', label: 'B', text: 'França' },
          { id: 'c', label: 'C', text: 'Rússia' },
          { id: 'd', label: 'D', text: 'Itália' },
        ],
        correctOptionId: 'd',
      },
      {
        id: 'p3q2',
        subject: 'História — 1ª Guerra Mundial',
        difficulty: 'Médio',
        statement: 'O Tratado de Versalhes foi assinado em qual ano?',
        options: [
          { id: 'a', label: 'A', text: '1914' },
          { id: 'b', label: 'B', text: '1918' },
          { id: 'c', label: 'C', text: '1919' },
          { id: 'd', label: 'D', text: '1920' },
        ],
        correctOptionId: 'c',
      },
      {
        id: 'p3q3',
        subject: 'História — 1ª Guerra Mundial',
        difficulty: 'Médio',
        statement: 'Qual evento é considerado o estopim da Primeira Guerra Mundial?',
        options: [
          { id: 'a', label: 'A', text: 'A invasão da Polônia' },
          { id: 'b', label: 'B', text: 'O assassinato do Arquiduque Francisco Ferdinando' },
          { id: 'c', label: 'C', text: 'A Revolução Russa' },
          { id: 'd', label: 'D', text: 'O afundamento do Lusitânia' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'p3q4',
        subject: 'História — 1ª Guerra Mundial',
        difficulty: 'Difícil',
        statement: 'Qual foi a principal novidade tecnológica de guerra introduzida em larga escala durante a 1ª Guerra?',
        options: [
          { id: 'a', label: 'A', text: 'Avião a jato' },
          { id: 'b', label: 'B', text: 'Bomba atômica' },
          { id: 'c', label: 'C', text: 'Tanque de guerra' },
          { id: 'd', label: 'D', text: 'Míssil balístico' },
        ],
        correctOptionId: 'c',
      },
    ],
  },
];
