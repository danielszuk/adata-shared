export interface IDimensionDTO {
  id: number;
  name: string;
  unit?: string;

  matricesByDim1?: number;
  matricesByDim2?: number;
  dbwbsByDim1?: number;
  dbwbsByDim2?: number;
}
