export interface DetailedSkill {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: DetailedSkill[];
  experience: string;
}

export interface Skill {
  name: string;
  category: string;
  color: string;
}

export interface CVData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  mainSkills: Skill[];
  keyTechnologies: string[];
}

