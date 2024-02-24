import React, { useState, useEffect, useRef } from "react";
import './Section5.css';

function NumberCounter({ value, label, icon }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const increment = Math.ceil(value / 2600); 

    const handleScroll = () => {
      const rect = counterRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      if (isVisible && count < value) {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          return newCount >= value ? value : newCount; 
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count, value]);

  return (
    <div className="col-12 col-md-6 col-lg-3 mt" ref={counterRef}>
      <div className="bg-img3 p-5 shadow-lg position-relative">
        <div className="text-center pt-2">
          <div className="p-3 fs-1 fw-bold">
            <span className="number">{count}</span>
          </div>
          <span className="para3 p-2 fw-bold">{label}</span>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle">
          <i className={`fa-solid ${icon} fs1`}></i>
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <NumberCounter value={4203} label="PROJECT COMPLETED" icon="fa-list-check" />
          <NumberCounter value={326} label="IT SPECIALISTS" icon="fa-user" />
          <NumberCounter value={8600} label="SATISFIED CLIENTS" icon="fa-square-share-nodes" />
          <NumberCounter value={238} label="SMART SOLUTIONS" icon="fa-people-arrows" />
        </div>
      </div>
    </section>
  );
}

export default Section5;
