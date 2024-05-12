"use client";

import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Looking for reliable web development? I create custom websites with modern designs, fast loading times, SEO-friendly code, and secure architecture.",
      emoji: "💻",
    },
    {
      title: "Application Design",
      description:
        "Need a new application? I offer custom application design services, creating user-friendly interfaces and efficient workflows.",
      emoji: "🎨",
    },
    {
      title: "DevOps Integration",
      description:
        "Improve your software development lifecycle with my DevOps integration services. I'll help streamline your processes for faster, more reliable deployments.",
      emoji: "⚙️",
    },
    {
      title: "Security Consulting",
      description:
        "Worried about your digital security? I provide expert security consulting services to help protect your data and systems.",
      emoji: "🔒",
    },
    {
      title: "Web Maintenance",
      description:
        "Keep your website running smoothly with my web maintenance services. I offer regular updates, bug fixes, and performance optimizations.",
      emoji: "🛠️",
    },
    {
      title: "Advice & Suggestions",
      description:
        "Need guidance on your tech projects? I offer expert advice and suggestions to help you make the best decisions.",
      emoji: "💡",
    },
  ];

  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 mb-5 md:grid-cols-2 md:mb-0 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
}
