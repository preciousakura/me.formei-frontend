declare module "Discipline" {
  type Status = "Aprovado" | "Reprovado" | "Trancado";

  interface Discipline {
    name: string;
    menu?: string;
    bibliography: string[];
    workload: number;
    cod: string;
    isOptional: boolean;
    prerequisites: Discipline[];
    status?: Status;
  }

  interface DisciplineByPeriod {
    period: string;
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
