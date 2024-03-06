import "./TechStack.scss";
function TechStack() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack__content grid wide" data-aos="fade-right" data-aos-duration="3000">
        <div className="row">
          <div className="tech-stack__content-title col l-4 l-o-4 m-4 m-o-4 c-12">Technology Skills</div>
          <div className="tech-stack__content-logo col l-10 l-o-1 m-10 m-o-1 c-12">
            <div className="logo">
              <ul>
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css" alt="icon" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,nodejs" alt="icon" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=mongodb,postgres" alt="icon" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=sass,bootstrap" alt="icon" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=postman,redux" alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
