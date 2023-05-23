declare module "Discipline" {
  interface Hour {
    start: number;
    end: number;
  }

  interface Classe {
    discipline_name: string;
    teacher_name: string;
    hour: Hour;
    isCurrent: boolean;
  }
}
