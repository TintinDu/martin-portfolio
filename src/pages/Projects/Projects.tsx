import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageScreen } from '../../components/PageScreen/PageScreen';
import { PageTransition } from '../../components/PageTransition/PageTransition';

import { KeyHint } from '../../components/KeyHint/KeyHint';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../../data/projects';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { ROUTES } from '../../constants/routes';
import bgVideo from '../../assets/bg-video.mp4';
import styles from './Projects.module.css';

const KEY_HINTS = [
  { keys: ['↑', '↓'], label: 'Select' },
  { keys: ['↵'], label: 'Open' },
  { keys: ['←'], label: 'Back' },
];

function openUrl(url: string): void {
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    /* silent fail */
  }
}

export default function Projects(): React.JSX.Element {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleConfirm = useCallback((): void => {
    const project = PROJECTS[active];
    if (!project) return;
    const url = project.liveUrl ?? project.githubUrl;
    if (url) openUrl(url);
  }, [active]);

  const handleBack = useCallback((): void => {
    void navigate(ROUTES.menu);
  }, [navigate]);

  useKeyboardNav({
    length: PROJECTS.length,
    active,
    onActivate: setActive,
    onConfirm: handleConfirm,
    onBack: handleBack,
  });

  const activeProject = PROJECTS[active];

  return (
    <PageTransition variant="projects">
      <PageScreen videoSrc={bgVideo} className={styles.screen}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.pageTitle} aria-label="Section: Side Projects">Side Projects</div>
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                active={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className={styles.right}>
            {activeProject && (
              <>
                <div className={styles.projectTitle} key={`title-${activeProject.id}`}>
                  {activeProject.title}
                </div>
                <p className={styles.projectDesc} key={`desc-${activeProject.id}`}>
                  {activeProject.description}
                </p>
                <div className={styles.links} key={`links-${activeProject.id}`}>
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <KeyHint hints={KEY_HINTS} />
      </PageScreen>
    </PageTransition>
  );
}
