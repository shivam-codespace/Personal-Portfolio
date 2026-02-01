const Hero = ({ title, description }) => {
  return (
    <section className="mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight flex items-center gap-3">
        {title}
        <span>👋</span>
      </h1>
      <h6 className="text-4xl lg:text-3xl text-gray-900 mb-3 leading-tight flex items-center gap-3">
        Backend Developer | Java & Spring Boot
        
      </h6>

      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
        {description}
      </p>
    </section>
  );
};

export default Hero;