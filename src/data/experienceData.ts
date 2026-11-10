export interface Experience {
  role: string;
  year: string;
  company: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    role: 'Consultor de Desarrollo SAP',
    year: '2026',
    company: 'Ramo Ecuador',
    description: [
      'Desarrollo de soluciones personalizadas, add-ons e integraciones para SAP Business One.',
      'Tecnologías: C#, .NET, B1UP, DI API y SAP HANA.',
      'Automatización de procesos de negocio, consultas y reportes dentro del ERP.'
    ],
  },
  {
    role: 'Coordinador de Sistemas',
    year: '2019 — Actualidad',
    company: 'Federación Venezolana de Fútbol (FVF)',
    description: [
      'Coordinar y supervisar proyectos de desarrollo y automatización, consultas a ERP y tests de sistemas de terceros.',
      'Coordinación y supervisión de proyectos de redes en estadios para eventos nacionales e internacionales (Eliminatorias Mundial 2026, Preolímpico 2024, Sudamericano Sub-20, Copa Libertadores Futsal).'
    ],
  },
  {
    role: 'Ingeniero de Software',
    year: '2022 — 2025',
    company: 'Cuenta Propia | Despertar (Seguros)',
    description: [
      'Análisis, diseño y programación de APIs REST y backend para sistemas de cotización.',
      'Integración con plataformas de terceros y planificación técnica de proyectos.'
    ],
  },
  {
    role: 'Programador | 1er Teniente',
    year: '2004 — 2019',
    company: 'Cuerpo de Bomberos de Caracas',
    description: [
      'Participación en el Sistema Integral de Gestión de Capital Humano (HRMS).',
      'Desarrollo del Módulo de Servicio Médico para reposos. Soporte a sistemas y usuarios.'
    ],
  },
];
