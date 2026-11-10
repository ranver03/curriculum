interface UniversityEducation {
  title: string;
  institution: string;
  year: string;
}

interface DiplomaEducation {
  title: string;
  institution: string;
  year: string;
  certificateCode?: string;
  certificateUrl?: string;
}

interface CourseCertification {
  title: string;
  institution: string;
  year: string;
  certificateUrl?: string;
  status?: 'En progreso' | 'Completado';
}

export const universityEducation: UniversityEducation[] = [
  {
    title: 'Ingeniero en Informática',
    institution: 'Instituto Universitario Politécnico Santiago Mariño',
    year: '2019',
  },
  {
    title: 'TSU en Informática',
    institution: 'Instituto Universitario de Tecnología Venezuela',
    year: '2007',
  },
];

export const diplomaEducation: DiplomaEducation[] = [
  {
    title: 'Diplomado en Programación Avanzada',
    institution: 'TECH Universidad',
    year: '2024',
    certificateCode: 'AEBBCEAEECEA31I',
    certificateUrl: 'https://www.techtitute.com/ve/CertificateDetail/Title',
  },
];

export const coursesCertifications: CourseCertification[] = [
  {
    title: 'SAP Business One: SDK y Service Layer de cero a experto',
    institution: 'Udemy',
    year: '2026',
    certificateUrl: 'https://www.udemy.com/certificate/UC-20913e7c-9997-415c-bf98-0842e90eb299/',
    status: 'Completado',
  },
  {
    title: 'Arquitectura Software Moderna: DDD, Eventos, Microservicios',
    institution: 'Udemy (Daniel Blanco Calviño)',
    year: '2025',
    certificateUrl: 'https://www.udemy.com/certificate/UC-cf1b279b-99d5-4231-9401-9425fac8b457/',
    status: 'Completado',
  },
  {
    title: 'SQL Server',
    institution: 'Udemy (Pablo Tilotta)',
    year: '',
    status: 'En progreso',
  },
];
