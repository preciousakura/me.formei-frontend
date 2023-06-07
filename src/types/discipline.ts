declare module "Discipline" {
  interface Discipline {
    name: string;
    menu?: string;
    bibliography: string[];
    workload: number;
    cod: string;
    isOptional: boolean;
    prerequisites: Discipline[];
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
