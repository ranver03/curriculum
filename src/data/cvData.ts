import type { CVData } from "../types";

export const cvData: CVData = {
  name: "Rafael Velásquez",
  title: "Ingeniero en Informática",
  subtitle: "+20 años de experiencia transformando sistemas complejos en soluciones estables. Especialista en Backend, C# .NET, PHP/Laravel y ecosistemas ERP (SAP Business One).",
  location: "Caracas, Venezuela",
  contact: {
    email: "rafahel171@gmail.com",
    phone: "+58 424-1657377",
  },
  mainSkills: [
    { name: "C# .NET", category: "BACKEND", color: "monokai-blue" },
    { name: "Laravel", category: "BACKEND", color: "monokai-orange" },
    { name: "SAP B1", category: "ERP & DATA", color: "monokai-green" },
    { name: "HANA", category: "ERP & DATA", color: "monokai-cyan" },
    { name: "SQL Server", category: "ERP & DATA", color: "monokai-yellow" },
    { name: "Docker", category: "DEVOPS", color: "monokai-blue" },
    { name: "Git", category: "DEVOPS", color: "monokai-orange" },
    { name: "CI/CD", category: "DEVOPS", color: "monokai-green" },
    { name: "DDD", category: "ARCHITECTURE", color: "monokai-purple" },
    { name: "SOLID", category: "ARCHITECTURE", color: "monokai-pink" },
    { name: "TDD", category: "ARCHITECTURE", color: "monokai-yellow" },
  ],
  keyTechnologies: ["C# .NET", "PHP Laravel", "SAP B1", "Docker", "DDD/TDD", "IA Agents"],
};

