export interface IDimensionDTO {
  id: number;
  name: string;
  unit?: string;

  matricesByDim1Count?: number;
  matricesByDim2Count?: number;
  dbwbsByDim1Count?: number;
  dbwbsByDim2Count?: number;
}
