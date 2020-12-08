import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";

function Landing() {
  const projects = [
    {
      photo: { image1 },
    },
    {
      photo: { image2 },
    },
  ];

  return (
    <div>
      {projects.map((e, i) => (
        <p photo={e.photo} key={i} />
      ))}
    </div>
  );
}

export default Landing;
