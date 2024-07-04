import module from "./projectsList.module.css";
import ProjectCarousel from "./projectCarousel";
import styles from "./projectsList.module.css";

export default function ProjectsList() {
  return (
    <div className={styles.projectListContainer}>
      <ProjectCarousel /> <ProjectCarousel />
    </div>
  );
}
