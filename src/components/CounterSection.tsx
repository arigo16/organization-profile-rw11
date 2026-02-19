import { statistik } from "@/data/rw011";
import Counter from "./Counter";

export const CounterSection1 = () => {
  const counterData = [
    {
      icon: "fas fa-home",
      count: statistik.totalRT,
      title: "Rukun Tetangga (RT)",
      delay: ".2s",
    },
    {
      icon: "fas fa-users",
      count: statistik.totalKK,
      title: "Kepala Keluarga",
      delay: ".4s",
    },
    {
      icon: "fas fa-user-friends",
      count: statistik.totalWarga,
      title: "Total Warga",
      delay: ".6s",
    },
  ];
  return (
    <section className="counter-section section-padding">
      <div className="container">
        <div className="counter-wrapper">
          {counterData.map((item, index) => (
            <div
              key={index}
              className="counter-items wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="icon">
                <i className={item.icon} style={{ fontSize: "36px" }} />
              </div>
              <div className="content">
                <h2>
                  <span className="count">
                    <Counter end={item.count} />
                  </span>
                </h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
