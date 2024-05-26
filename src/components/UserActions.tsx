import { FunctionComponent } from "react";
import styles from "./UserActions.module.css";

export type UserActionsType = {
  className?: string;
};

const UserActions: FunctionComponent<UserActionsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.userActions, className].join(" ")}>
      <div className={styles.userActionsInner}>
        <div className={styles.frameParent}>
          <div className={styles.progressContentWrapper}>
            <div className={styles.progressContent}>
              <b className={styles.timer}>Timer</b>
              <b className={styles.setting}>Setting</b>
            </div>
          </div>
          <div className={styles.logoutParent}>
            <img
              className={styles.logoutIcon}
              loading="lazy"
              alt=""
              src="/logout.svg"
            />
            <div className={styles.logoutWrapper}>
              <div className={styles.logout}>Logout</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.actionsContainer}>
          <div className={styles.academicProgress}>
            <div className={styles.academicProgressBase} />
            <div className={styles.academicProgressWrapper}>
              <b className={styles.academicProgress1}>Academic Progress</b>
            </div>
            <div className={styles.termProgressWrapper}>
              <img
                className={styles.termProgressWrapperChild}
                loading="lazy"
                alt=""
                src="/vector-13.svg"
              />
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarInnerContainer}>
                  <div className={styles.termProgressweeksWrapper}>
                    <div className={styles.termProgressweeks}>
                      Term Progress(weeks)
                    </div>
                  </div>
                  <div className={styles.termProgressBar}>
                    <div className={styles.progressBarBase} />
                    <div className={styles.progressBar} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.academicProgressInner}>
              <div className={styles.gpaParent}>
                <div className={styles.gpa}>
                  <div className={styles.gpaBase} />
                  <div className={styles.gpaSelector} />
                  <div className={styles.gpaSelectorContainer}>
                    <div className={styles.gpaSelectorInnerContainer}>
                      <div className={styles.gpaSelectorItems}>
                        <div className={styles.gpa1}>GPA</div>
                      </div>
                      <div className={styles.directedGraph}>3.87</div>
                    </div>
                  </div>
                </div>
                <div className={styles.standing}>
                  <div className={styles.standingBase} />
                  <div className={styles.standingSelector} />
                  <div className={styles.standingInner}>
                    <div className={styles.frameGroup}>
                      <div className={styles.standingWrapper}>
                        <div className={styles.standing1}>Standing</div>
                      </div>
                      <div className={styles.div}>10|40</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.announcements}>
            <div className={styles.announcementsChild} />
            <div className={styles.taskItemTwo}>
              <div className={styles.announcementDetails}>
                <b className={styles.announcement}>Announcement</b>
                <div className={styles.announcementNavigation}>
                  <img
                    className={styles.iconsnavigateBefore}
                    loading="lazy"
                    alt=""
                    src="/iconsnavigate-before.svg"
                  />
                  <img
                    className={styles.iconsnavigateNext}
                    loading="lazy"
                    alt=""
                    src="/iconsnavigate-next.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.stronglyConnectedComponent}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
            <div className={styles.taskItemThree}>
              <div className={styles.authorInfo}>
                <div className={styles.announcementCard}>
                  <div className={styles.teacherAnnouncment} />
                  <div className={styles.authorNameContainer}>
                    <div className={styles.teacherIconWrapper}>
                      <img
                        className={styles.teacherIcon}
                        loading="lazy"
                        alt=""
                        src="/teacher-icon.svg"
                      />
                    </div>
                    <div className={styles.mrBantiderParent}>
                      <b className={styles.mrBantider}>Mr. Bantider</b>
                      <div className={styles.announcementDateWrapper}>
                        <div className={styles.announcementDate}>
                          <div className={styles.dueDate} />
                          <div className={styles.tomorrow}>Tomorrow</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={styles.justWantedTo}>
                    Just wanted to drop a quick reference for the upcoming
                    assignment. I've attached a completed example to help you
                    visualize the format, content, and expectations
                  </p>
                </div>
                <div className={styles.taskDetailsOne}>
                  <div className={styles.teacherAnnouncmentParent}>
                    <div className={styles.teacherAnnouncment1} />
                    <div className={styles.teacherName}>
                      <div className={styles.teacherIcon1} />
                      <div className={styles.announcementItem}>
                        <div className={styles.teacherDetails}>
                          <b className={styles.mrMehatebe}>Mr. Mehatebe</b>
                          <div className={styles.announcementContent}>
                            <div className={styles.announcementDate1}>
                              <div className={styles.dueDate1} />
                              <div className={styles.tomorrow1}>Tomorrow</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={styles.justWantedTo1}>
                      Just wanted to drop a quick reference for the upcoming
                      assignment. I've attached a completed example to help you
                      visualize the format, content, and expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tasks}>
          <div className={styles.myTaskBox} />
          <div className={styles.taskHeader}>
            <div className={styles.progressItems}>
              <b className={styles.myTask}>My Task</b>
              <button className={styles.addTaskButton}>
                <div className={styles.addTask} />
                <img
                  className={styles.iconsadd24px}
                  loading="lazy"
                  alt=""
                  src="/iconsadd-24px.svg"
                />
                <div className={styles.addTask1}>Add Task</div>
              </button>
            </div>
          </div>
          <div className={styles.taskDetailsTwo}>
            <div className={styles.taskItem}>
              <b className={styles.prepareAssessmentQuestion}>
                Prepare Assessment Question
              </b>
              <div className={styles.taskDescriptionWrapper}>
                <div className={styles.taskDescription}>
                  <div className={styles.projectInfo}>
                    <div
                      className={styles.setAssessmentQuestion}
                    >{`Set Assessment Question Form For Project `}</div>
                    <div className={styles.tuesday}>Tuesday</div>
                  </div>
                  <div className={styles.taskHeader1}>
                    <img
                      className={styles.iconsmore24px}
                      loading="lazy"
                      alt=""
                      src="/iconsmore-24px@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.separator}>
              <img
                className={styles.separatorChild}
                loading="lazy"
                alt=""
                src="/vector-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserActions;
