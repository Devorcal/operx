import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <main className={[styles.content, className].join(" ")}>
      <section className={styles.contentLeft}>
        <textarea className={styles.progressTop} rows={16} cols={35} />
      </section>
      <section className={styles.progressContent}>
        <div className={styles.progressHeader}>
          <div className={styles.academicProgress}>
            <div className={styles.academicProgressBase} />
            <div className={styles.progressName}>
              <div className={styles.gpaStanding}>
                <b className={styles.academicProgress1}>Academic Progress</b>
              </div>
              <div className={styles.progressChart}>
                <img
                  className={styles.progressChartChild}
                  loading="lazy"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className={styles.termProgress}>
                <input
                  className={styles.termProgressLabel}
                  placeholder="Term Progress(weeks)"
                  type="text"
                />
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarBase} />
                  <div className={styles.progressBar} />
                </div>
              </div>
            </div>
            <div className={styles.grade}>
              <div className={styles.gradeContainer}>
                <div className={styles.termBar}>
                  <div className={styles.gpaBase} />
                  <div className={styles.gradeLabel}>
                    <div className={styles.gpaSelector} />
                    <div className={styles.gradeTitle}>!</div>
                  </div>
                  <div className={styles.gradeValue}>
                    <div className={styles.progressDetails}>
                      <b className={styles.gpaPlaceholder}>3.87</b>
                      <div className={styles.gPAName}>
                        <div className={styles.gpa}>GPA</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.standing}>
                  <div className={styles.standingDetails}>
                    <div className={styles.gpaSelector1} />
                    <div className={styles.standingValue}>!</div>
                  </div>
                  <div className={styles.standingBase} />
                  <div className={styles.standingLabel}>
                    <div className={styles.standingName}>
                      <b className={styles.standingPlaceholder}>10/40</b>
                      <div className={styles.standing1}>Standing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentLeft1}>
            <div className={styles.announcement}>
              <div className={styles.announcementChild} />
              <div className={styles.calander}>
                <div className={styles.calanderBox} />
                <div className={styles.calendarHeader}>
                  <div className={styles.calendarMonth}>
                    <b className={styles.month}>May 2024</b>
                    <div className={styles.calendarDatePlaceholders}>
                      <div className={styles.weekdayNames}>
                        <div className={styles.mon}>Mon</div>
                      </div>
                      <div className={styles.tue}>Tue</div>
                      <div className={styles.wed}>Wed</div>
                      <div className={styles.weekdayNames1}>
                        <div className={styles.thu}>Thu</div>
                      </div>
                      <div className={styles.weekdayNames2}>
                        <div className={styles.fri}>Fri</div>
                      </div>
                      <div className={styles.weekdayNames3}>
                        <div className={styles.sat}>Sat</div>
                      </div>
                      <div className={styles.sun}>Sun</div>
                    </div>
                  </div>
                </div>
                <div className={styles.calendarDays}>
                  <div className={styles.calendarDatePlaceholders1}>
                    <div className={styles.div}>28</div>
                    <div className={styles.div1}>29</div>
                    <div className={styles.div2}>30</div>
                    <div className={styles.div3}>31</div>
                    <div className={styles.div4}>1</div>
                    <div className={styles.div5}>2</div>
                    <div className={styles.div6}>3</div>
                  </div>
                  <div className={styles.calendarDatePlaceholders2}>
                    <div className={styles.div7}>4</div>
                    <div className={styles.div8}>5</div>
                    <div className={styles.div9}>6</div>
                    <div className={styles.div10}>7</div>
                    <div className={styles.div11}>8</div>
                    <div className={styles.div12}>9</div>
                    <div className={styles.div13}>10</div>
                  </div>
                  <div className={styles.calendarDatePlaceholders3}>
                    <div className={styles.div14}>11</div>
                    <div className={styles.div15}>12</div>
                    <div className={styles.div16}>13</div>
                    <div className={styles.div17}>14</div>
                    <div className={styles.div18}>15</div>
                    <div className={styles.div19}>16</div>
                    <div className={styles.div20}>17</div>
                  </div>
                  <div className={styles.calendarDatePlaceholders4}>
                    <div className={styles.div21}>18</div>
                    <div className={styles.div22}>19</div>
                    <div className={styles.div23}>20</div>
                    <div className={styles.div24}>21</div>
                    <div className={styles.div25}>22</div>
                    <div className={styles.div26}>23</div>
                    <div className={styles.div27}>24</div>
                  </div>
                  <div className={styles.calendarWeek}>
                    <div className={styles.div28}>25</div>
                    <div className={styles.div29}>26</div>
                    <div className={styles.div30}>27</div>
                    <div className={styles.div31}>28</div>
                    <div className={styles.div32}>29</div>
                    <div className={styles.div33}>30</div>
                    <div className={styles.div34}>31</div>
                  </div>
                  <div className={styles.calendarWeek1}>
                    <div className={styles.div35}>1</div>
                    <div className={styles.div36}>2</div>
                    <div className={styles.div37}>3</div>
                    <div className={styles.div38}>4</div>
                    <div className={styles.div39}>5</div>
                    <div className={styles.div40}>6</div>
                    <div className={styles.div41}>7</div>
                  </div>
                </div>
              </div>
              <div className={styles.announcementDetails}>
                <div className={styles.announcementContent}>
                  <b className={styles.announcement1}>Announcement</b>
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
              <div className={styles.announcementIcon}>
                <img
                  className={styles.announcementDividerIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className={styles.taskContainer}>
                <div className={styles.taskHeader}>
                  <div className={styles.announcementContent1}>
                    <div className={styles.teacherAnnouncment} />
                    <div className={styles.announcementDetails1}>
                      <div className={styles.taskNameContainer}>
                        <div className={styles.announcementList}>
                          <img
                            className={styles.teacherIcon}
                            loading="lazy"
                            alt=""
                            src="/teacher-icon.svg"
                          />
                        </div>
                        <div className={styles.taskNameLabel}>
                          <b className={styles.mrBantider}>Mr. Bantider</b>
                          <div className={styles.announcementDateWrapper}>
                            <div className={styles.announcementDate}>
                              <div className={styles.dueDate} />
                              <div className={styles.tomorrow}>Tomorrow</div>
                            </div>
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
                  <div className={styles.teacherAnnouncmentParent}>
                    <div className={styles.teacherAnnouncment1} />
                    <div className={styles.frameWrapper}>
                      <div className={styles.teacherIconParent}>
                        <div className={styles.teacherIcon1} />
                        <div className={styles.frameContainer}>
                          <div className={styles.mrMehatebeParent}>
                            <b className={styles.mrMehatebe}>Mr. Mehatebe</b>
                            <div className={styles.taskDateContainer}>
                              <div className={styles.announcementDate1}>
                                <div className={styles.dueDate1} />
                                <div className={styles.tomorrow1}>Tomorrow</div>
                              </div>
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
        <div className={styles.myTask}>
          <div className={styles.myTaskBox} />
          <div className={styles.taskContent}>
            <div className={styles.taskHeaderContainer}>
              <b className={styles.myTask1}>My Task</b>
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
          <div className={styles.taskItems}>
            <div className={styles.prepareAssessmentQuestionParent}>
              <b className={styles.prepareAssessmentQuestion}>
                Prepare Assessment Question
              </b>
              <img
                className={styles.iconsmore24px}
                loading="lazy"
                alt=""
                src="/iconsmore-24px@2x.png"
              />
            </div>
            <div className={styles.setAssessmentQuestionFormFWrapper}>
              <div
                className={styles.setAssessmentQuestion}
              >{`Set Assessment Question Form For Project `}</div>
            </div>
            <div className={styles.tuesdayWrapper}>
              <div className={styles.tuesday}>Tuesday</div>
            </div>
          </div>
          <div className={styles.taskIconContainer}>
            <img
              className={styles.taskDividerIcon}
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
