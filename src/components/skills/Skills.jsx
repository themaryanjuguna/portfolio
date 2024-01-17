import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "Graphic Design",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "HTML5/CSS/Bootsrap/Tailwind",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "Wordpress",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "UI/UX",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
  {
    name: "React JS",
    numberPercent: "50",
    startCount: "0",
    endCount: "50",
  },
  {
    name: "Angular",
    numberPercent: "50",
    startCount: "0",
    endCount: "50",
  }
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
