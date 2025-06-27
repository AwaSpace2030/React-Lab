import { Card } from "../components/Card";
import primg1 from "../assets/img-cards/pro1.jpg";
import primg2 from "../assets/img-cards/pro2.jpg";
import primg3 from "../assets/img-cards/pro3.jpg";
import primg4 from "../assets/img-cards/pro4.jpg";

function Home() {
  return (
    <div className="main">
      <div className="intro">
        <h2>Welcome to my React projects collection!</h2>
        <p>
          These are small, focused projects designed to help me master and
          demonstrate key React concepts through hands-on practice. <br />
          Each project targets a specific idea, making learning both effective
          and fun.🚀😊
        </p>
      </div>
      <div className="container">
        <div className="cards-container">
          <Card
            image={primg1}
            title=" porject 01 | to do List"
            to="/todolist"
          />
          <Card
            image={primg2}
            title=" porject 02 | Weather API"
            to="/Weather"
          />
          <Card
            image={primg3}
            title=" porject 03 |  Counter App"
            to="/Counter"
          />
          <Card
            image={primg4}
            title=" porject 04 | User Profile Card"
            to="/User-Profile"
          />
          <Card image={primg1} title=" porject 01 | to do List" to="/Counter" />
          <Card image={primg1} title=" porject 01 | to do List" to="/idea1" />
          <Card image={primg1} title=" porject 01 | to do List" to="/idea1" />
          <Card image={primg1} title=" porject 01 | to do List" to="/idea1" />
          <Card image={primg1} title=" porject 01 | to do List" to="/idea1" />
          <Card image={primg1} title=" porject 01 | to do List" to="/idea1" />
        </div>
      </div>
    </div>
  );
}

export default Home;
