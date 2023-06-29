declare module "Discipline" {
  type Status = "Aprovado" | "Reprovado" | "Trancado";

  interface DisciplineData {
    id: string;
    name: string;
    cod: string;
    menu: string;
    curriculumId: string;
    description: string;
    isOptional: boolean;
    bibliography: string[];
    prerequisites: string[];
    hours: number;
  }

  interface Discipline {
    period: string;
    disciplines: DisciplineData[];
  }

  interface DisciplineByPeriod {
    disciplines: Discipline[];
  }

  interface Hour {
    start: number;
    end: number;
  }

  interface Classe {
    discipline_name: string;
    hour: Hour;
    isCurrent: boolean;
  }
}
