import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import SkillCategory from "../components/skills/skillCategory";

import INFO from "../data/user";
import SEO from "../data/seo";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "skills");

  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL", "Bash", "HTML", "CSS"]
    },
    {
      title: "Java Versions",
      skills: ["Java 8", "Java 17"]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Spring Framework",
        "Spring Boot",
        "Spring MVC",
        "Spring Batch",
        "Spring Cloud",
        "Angular",
        "React.js"
      ]
    },
    {
      title: "API Development",
      skills: ["REST APIs", "Swagger", "OpenAPI"]
    },
    {
      title: "Microservices Internals",
      skills: [
        "Config Server",
        "API Gateway",
        "Service Registry",
        "Service Discovery",
        "Resilience4j"
      ]
    },
    {
      title: "Security",
      skills: [
        "Spring Security",
        "Basic Authentication",
        "OAuth 2.0",
        "JWT",
        "Role-Based Access Control (RBAC)"
      ]
    },
    {
      title: "Persistence & ORM",
      skills: ["Spring Data JPA", "JDBC"]
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "MongoDB",
        "Elasticsearch (Search Engine)"
      ]
    },
    {
      title: "Distributed Caching",
      skills: ["Redis", "Memcached"]
    },
    {
      title: "Messaging & Streaming",
      skills: ["Kafka", "RabbitMQ"]
    },
    {
      title: "Multithreading & Concurrency",
      skills: [
        "Executors Framework",
        "Fork/Join Framework",
        "CompletableFuture"
      ]
    },
    {
      title: "Reactive Programming",
      skills: ["Spring WebFlux"]
    },

    /* Cloud (flattened – IMPORTANT FIX) */
    {
      title: "Cloud – AWS",
      skills: [
        "EC2",
        "S3",
        "RDS",
        "EKS",
        "Route 53",
        "VPC",
        "VPC Peering",
        "SNS",
        "CloudWatch",
        "IAM",
        "Lambda",
        "AWS CLI"
      ]
    },
    {
      title: "Cloud – Azure",
      skills: [
        "Virtual Machines",
        "Blob Storage",
        "Azure SQL Database",
        "AKS",
        "Azure DNS",
        "VNet",
        "VNet Peering",
        "Service Bus",
        "Azure Monitor",
        "Entra ID (Azure AD)",
        "Azure Functions",
        "Azure CLI"
      ]
    },

    {
      title: "DevOps, CI/CD & Containers",
      skills: ["Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Automation & Infrastructure as Code",
      skills: ["Ansible", "Terraform"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["ELK Stack", "Grafana"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "Mockito"]
    },
    {
      title: "Build Tools",
      skills: ["Maven", "Gradle"]
    },
    {
      title: "Version Control & Code Review",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Code Quality",
      skills: ["SonarQube"]
    },
    {
      title: "Design Principles & Architecture",
      skills: ["SOLID Principles", "Design Patterns", "Clean Architecture"]
    },
    {
      title: "Software Engineering Practices",
      skills: ["Agile/Scrum", "SDLC", "DSA"]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Decision Making",
        "Adaptability",
        "Multitasking",
        "Conflict Management",
        "Collaboration"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Skills | ${INFO.main.title}`}</title>
        <meta
          name="description"
          content={currentSEO?.description || "My technical skills and expertise"}
        />
        <meta
          name="keywords"
          content={
            currentSEO?.keywords?.join(", ") ||
            "skills, java, spring boot, backend, cloud, devops"
          }
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <NavBar active="skills" />

        <div className="max-w-6xl mx-auto px-6 pt-20">
          {/* Logo */}
          <div className="flex justify-start pt-4 pb-8">
            <div className="fixed top-[100px] left-[40px] z-40 border border-white rounded-full shadow-lg bg-white p-2">
              <Logo width={46} link={false} rounded={true} />
            </div>
          </div>

          {/* Content */}
          <div className="pt-2 ml-0 lg:ml-20">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Skills & Expertise
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                A comprehensive overview of my technical skills, tools, and
                technologies. I enjoy building scalable backend systems and
                continuously improving my engineering practices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {skillsData.map((category, index) => (
                  <SkillCategory
                    key={index}
                    title={category.title}
                    skills={category.skills}
                  />
                ))}
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;