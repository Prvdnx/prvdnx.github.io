import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "c",
    "cplusplus",
    "python",
    "javascript",
    "html5",
    "css3",
    "react",
    "expo",
    "bash",
    "git",
    "github",
    "docker",
    "linux",
    "elasticsearch",
    "logstash",
    "kibana",
    "grafana",
    "prometheus",
    "vitejs",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35} radius={160}>
        {skills.map((skill, index) => (
          <Icon key={`outer-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={`inner-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
