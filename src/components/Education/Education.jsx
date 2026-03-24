import { useEffect, useRef, useState } from 'react';
import { educationData } from '../../data/portfolioData';
import './Education.css';

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

function TimelineItem({ item, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEducation = item.type === 'education';

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-marker">
        <div className="marker-pulse"></div>
      </div>
      <div className="timeline-card">
        <div className="card-accent-bar"></div>
        <div className="card-header">
          <span className="timeline-date">{item.date}</span>
          <span className={`type-badge ${isEducation ? 'education' : 'experience'}`}>
            {isEducation ? <GraduationIcon /> : <BriefcaseIcon />}
            {isEducation ? 'Education' : 'Experience'}
          </span>
        </div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-company">{item.company}</p>
        <p className="timeline-description">{item.description}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education & Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
