import profileImage from "profile/ny.jpg";

const Main = () => {
  return (
    <>
      <div className="py-3 bb-black">
        <h6 className="color-gray">17 JUL 2024</h6>
        <h6 className="uppercase color-primary">Tecnologia</h6>

        <h4>O que esperar do cinema em 2021?</h4>
        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem veritatis sed optio labore.
        </p>

        <div className="flex-start-row mt-3">
          <div className="profile">
            <img src={profileImage} className="profile-img" alt="" />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">Násser Yousef</h6>
            <h6 className="color-gray">@nasseruousef</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
