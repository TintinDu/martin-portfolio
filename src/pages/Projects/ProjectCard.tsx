import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  active: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, active, onClick }: ProjectCardProps): React.JSX.Element {
  return (
    <div
      className={styles.card}
      data-active={active}
      data-status={project.status}
      role="button"
      tabIndex={0}
      aria-label={project.title}
      aria-selected={active}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className={styles.statusBar} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.year} aria-label={`Year: ${project.year}`}>{project.year}</span>
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags} aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
