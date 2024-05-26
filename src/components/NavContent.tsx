import { FunctionComponent } from "react";
import styles from "./NavContent.module.css";

export type NavContentType = {
  className?: string;
};

const NavContent: FunctionComponent<NavContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.navContent, className].join(" ")}>
      <div className={styles.navContentInner}>
        <div className={styles.linkItemsParent}>
          <div className={styles.linkItems}>
            <div className={styles.navigationBox} />
            <b className={styles.dashboard}>Dashboard</b>
          </div>
          <div className={styles.calendarLink}>
            <b className={styles.resources}>Resources</b>
          </div>
          <div className={styles.calendarWrapper}>
            <b className={styles.calendar}>Calendar</b>
          </div>
          <div className={styles.reportsWrapper}>
            <b className={styles.reports}>Reports</b>
          </div>
        </div>
      </div>
      <div className={styles.actionItems}>
        <textarea className={styles.mainBox} rows={16} cols={35} />
      </div>
      <div className={styles.calander}>
        <div className={styles.calanderBox} />
        <div className={styles.monthHeaderWrapper}>
          <div className={styles.monthHeader}>
            <b className={styles.month}>May 2024</b>
            <div className={styles.weekdays}>
              <div className={styles.weekdayLabels}>
                <div className={styles.mon}>Mon</div>
              </div>
              <div className={styles.tue}>Tue</div>
              <div className={styles.wed}>Wed</div>
              <div className={styles.weekdayLabels1}>
                <div className={styles.thu}>Thu</div>
              </div>
              <div className={styles.calendarDayNames}>
                <div className={styles.fri}>Fri</div>
              </div>
              <div className={styles.calendarDayNames1}>
                <div className={styles.sat}>Sat</div>
              </div>
              <div className={styles.sun}>Sun</div>
            </div>
          </div>
        </div>
        <div className={styles.calendarDays}>
          <div className={styles.div}>28</div>
          <div className={styles.div1}>29</div>
          <div className={styles.div2}>30</div>
          <div className={styles.div3}>31</div>
          <div className={styles.div4}>1</div>
          <div className={styles.dataAggregator}>2</div>
          <div className={styles.filterTree}>3</div>
        </div>
        <div className={styles.calendarDays1}>
          <div className={styles.div5}>4</div>
          <div className={styles.div6}>5</div>
          <div className={styles.div7}>6</div>
          <div className={styles.div8}>7</div>
          <div className={styles.div9}>8</div>
          <div className={styles.div10}>9</div>
          <div className={styles.div11}>10</div>
        </div>
        <div className={styles.calendarDays2}>
          <div className={styles.div12}>11</div>
          <div className={styles.div13}>12</div>
          <div className={styles.div14}>13</div>
          <div className={styles.div15}>14</div>
          <div className={styles.div16}>15</div>
          <div className={styles.div17}>16</div>
          <div className={styles.div18}>17</div>
        </div>
        <div className={styles.calendarDays3}>
          <div className={styles.div19}>18</div>
          <div className={styles.div20}>19</div>
          <div className={styles.div21}>20</div>
          <div className={styles.div22}>21</div>
          <div className={styles.div23}>22</div>
          <div className={styles.div24}>23</div>
          <div className={styles.div25}>24</div>
        </div>
        <div className={styles.calendarDays4}>
          <div className={styles.div26}>25</div>
          <div className={styles.div27}>26</div>
          <div className={styles.div28}>27</div>
          <div className={styles.div29}>28</div>
          <div className={styles.div30}>29</div>
          <div className={styles.div31}>30</div>
          <div className={styles.div32}>31</div>
        </div>
        <div className={styles.calendarDays5}>
          <div className={styles.div33}>1</div>
          <div className={styles.div34}>2</div>
          <div className={styles.div35}>3</div>
          <div className={styles.div36}>4</div>
          <div className={styles.div37}>5</div>
          <div className={styles.div38}>6</div>
          <div className={styles.div39}>7</div>
        </div>
      </div>
    </section>
  );
};

export default NavContent;
