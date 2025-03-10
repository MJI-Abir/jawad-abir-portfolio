import ProjectDetailsPage from "./ProjectDetailsPage";
import { getAllProjectIds } from "@/app/data/Projects";

export async function generateStaticParams() {
  const projectIds = getAllProjectIds();

  return projectIds.map((id) => ({
    id: id,
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  return <ProjectDetailsPage params={params} />;
}
