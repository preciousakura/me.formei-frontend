declare module "University" {
  interface University {
    id: string;
    name: string;
    abv: string;
    city: string;
    state: string;
  }

  interface Universities {
    universities: University[];
  }
}
