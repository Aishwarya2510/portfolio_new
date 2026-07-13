export type WorkProject = {
  slug: string;
  title: string;
  role: string;
  team: string;
  shipped: string;
  status: string;
  description: string;
  accent: "pink" | "teal" | "green" | "orange";
  imageHeight: number;
  tilt: number;
  images: [string, string];
  overview: string;
  highlights: string[];
  process: string[];
  takeaway: string;
};

// Project pages are being rebuilt from source folders in /allprojects.
export const workProjects: WorkProject[] = [];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
