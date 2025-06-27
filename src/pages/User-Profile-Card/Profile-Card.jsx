import styles from "./Pro4.module.css";
import { Overview } from "../../components/Overview";
import avatar from "../../assets/img-cards/avatar-card.png";
export function ProfileCard() {
  const overviewPoints = [
    "Building a user profile card component using modular CSS and React",
    "Applying a reusable component structure with ProfileHeader and Overview",
    "Displaying a local avatar image inside the profile header section",
    "Styling the layout using CSS Modules for scoped and maintainable styles",
  ];

  return (
    <>
      <div className="con_wrapper">
        <div className={styles.user_card_con}>
          <div className={styles.card}>
            <ProfileHeader />
          </div>
        </div>
        <Overview title="Overview" points={overviewPoints} />
      </div>
    </>
  );
}

function ProfileHeader() {
  return (
    <>
      <div className={styles.profileHeader}>
        <img src={avatar} alt="" />
        <h4>Srahr Omer</h4>
        <p>Frontend Developer / UI UX</p>
        <p className={styles.des}>
          Creative and detail-oriented Web Developer and Designer with a passion
          for building responsive, user-friendly websites. Skilled in HTML, CSS,
          JavaScript, React, and UI/UX design principles.
        </p>
        <button className={styles.contact_btn}>Contact me</button>
      </div>
    </>
  );
}
