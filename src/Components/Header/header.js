import "./header.css";
import HeaderImg from "../../assets/images/image.jpg";

const Header = () => {
  return (
    <>
      <section>
        <div className="header">
          <div>
            <div className="img">
              <img src={HeaderImg} alt="" />
            </div>
            <div className="Content">
              <h6>WELCOME</h6>
              <p>
                Welcome to my, TRAVEL BLOG and my first full React App. Here you
                can see the places I've traveled to and the places I'd like to
                travel to. I am also including a link that will show a small
                window into my journey as an aspiring Web Developer. In case you
                haven't picked up on it yet, this app will constantly be
                evolving..
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
