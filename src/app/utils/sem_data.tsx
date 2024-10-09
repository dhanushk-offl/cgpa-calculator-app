// src/utils/semesterData.ts

export interface Subject {
    name: string;
    credits: number;
  }
  
  export interface Semester {
    [key: string]: Subject;
  }
  
  export const gradeToPoints: { [key: string]: number } = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'RA': 0,
    'SA':0

  };
  
  export const semesters: { [key: number]: Semester } = {
    1: {
      'Professional English 1-HS3152': { name: 'Professional English 1-HS3152', credits: 3 },
      'Matrices and Calculas-MA3151': { name: 'Matrices and Calculas-MA3151', credits: 4 },
      'Engineering Physics-PH3151': { name: 'Engineering Physics-PH3151', credits: 3 },
      'Engineering Chemistry-CY3151': { name: 'Engineering Chemistry-CY3151', credits: 3 },
      'Problem Solving and Python Programming-GE3151': { name: 'Problem Solving and Python Programming-GE3151', credits: 3 },
      'Heritage of Tamil-GE3152': { name: 'Heritage of Tamil-GE3152', credits: 1 },
      'Problem Solving and Python Programming Laboratory-GE3171': { name: 'Problem Solving and Python Programming Laboratory-GE3171', credits: 2 },
      'Physics and Chemistry Laboratory-BS3171': { name: 'Physics and Chemistry Laboratory-BS3171', credits: 2 },
      'English Laboratory-GE3172': { name: 'English Laboratory-GE3172', credits: 1 }
    },
    2: {
      'Professional English 2-HS3252': { name: 'Professional English 2-HS3252', credits: 2 },
      'Statistics and Numerical Methods-MA3251': { name: 'Statistics and Numerical Methods-MA3251', credits: 4 },
      'Physics for Information Technology-PH3256': { name: 'Physics for Information Technology-PH3256', credits: 3 },
      'Basic Electrical and Electronics Engineering-BE3251': { name: 'Basic Electrical and Electronics Engineering-BE3251', credits: 3 },
      'Engineering Graphics-GE3251': { name: 'Engineering Graphics-GE3251', credits: 4 },
      'Programming in C-CS3251': { name: 'Programming in C-CS3251', credits: 3 },
      'Tamils and Technology-GE3252': { name: 'Tamils and Technology-GE3252', credits: 1 },
      'Engineering Practices Laboratory-GE3271': { name: 'Engineering Practices Laboratory-GE3271', credits: 2 },
      'Programming in C Laboratory-CS3271': { name: 'Programming in C Laboratory-CS3271', credits: 2 },
      'Communication Laboratory-': { name: 'Communication Laboratory-', credits: 0 }
    },
    3: {
        'Discrete Mathematics-MA3354': { name: 'Discrete Mathematics-MA3354', credits: 4 },
        'Digital Principles and Computer Organization-CS3351': { name: 'Digital Principles and Computer Organization-CS3351', credits: 4 },
        'Foundations of DataScience-CS3352': { name: 'Foundations of DataScience-CS3352', credits: 3 },
        'Data Structures and Algorithms-CD3291': { name: 'Data Structures and Algorithms-CD3291', credits: 3 },
        'Object Oriented Programming-CS3391': { name: 'Object Oriented Programming-CS3391', credits: 3 },
        'Data Structures and Algorithms Laboratory-CD3281': { name: 'Data Structures and Algorithms Laboratory-CD3281', credits: 2 },
        'Object Oriented Programming Laboratory-CS3381': { name: 'Object Oriented Programming Laboratory-CS3381', credits: 1.5 },
        'Data Science Laboratory-CS3361': { name: 'Data Science Laboratory-CS3361', credits: 2 },
        'Professional Development-GE3361': { name: 'Professional Development-GE3361', credits: 1 },
    },
    4: {
        'Theory of Computation-CS3452': { name: 'Theory of Computation-CS3452', credits: 3 },
        'Artificial Intelligence and Machine Learning-CS3491': { name: 'Artificial Intelligence and Machine Learning-CS3491', credits: 4 },
        'Database Management Systems-CS3492': { name: 'Database Management Systems-CS3492', credits: 3 },
        'Web Essentials-IT3401': { name: 'Web Essentials-IT3401', credits: 4 },
        'Introduction to Operating Systems-CS3451': { name: 'Introduction to Operating Systems-CS3451', credits: 3 },
        'Environmental Sciences and Sustainability-GE3451': { name: 'Environmental Sciences and Sustainability-GE3451', credits: 2 },
        'Operating Systems Laboratory-CS3461': { name: 'Operating Systems Laboratory-CS3461', credits: 1.5 },
        'Database Management Systems Laboratory-CS3481': { name: 'Database Management Systems Laboratory-CS3481', credits: 1.5 },
    },
    5: {
      'Computer Networks - CS3591': { name: 'Computer Networks - CS3591', credits: 4 },
      'Full Stack Web Development - IT3501': { name: 'Full Stack Web Development - IT3501', credits: 3 },
      'Distributed Computing - CS3551': { name: 'Distributed Computing - CS3551', credits: 3 },
      'Embbedded Systems and IoT - CS3691': { name: 'Embbedded Systems and IoT - CS3691', credits: 4 },
      'Cloud Computing - CCS335': { name: 'Cloud Computing - CCS335', credits: 3 },
      'Principles of Programming Languages - CCS358': { name: 'Principles of Programming Languages - CCS358', credits: 3 },
      'Full Stack Web Development Laboratory - IT3511': { name: 'Full Stack Web Development Laboratory - IT3511', credits: 2 },
    },
    6: {
      'Object Oriented Software Engineering CCS356': { name: 'Object Oriented Software Engineering CCS356', credits: 4 },
      'Elective I': { name: 'Elective I', credits: 3 },
      'Elective II': { name: 'Elective II', credits: 3 },
      'Elective III': { name: 'Elective III', credits: 3 },
      'Elective IV': { name: 'Elective IV', credits: 3 },
      'Elective V': { name: 'Elective V', credits: 3 },
      'Mobile Application Developmennt Laboratory - IT3681': { name: 'Mobile Application Developmennt Laboratory - IT3681', credits: 1.5 },
    },
    7: {
        'Human value and Ethics - GE3791': { name: 'Human value and Ethics - GE3791', credits: 2 },
        'Elective I': { name: 'Elective I', credits: 3 },
        'Elective II': { name: 'Elective II', credits: 3 },
        'Elective III': { name: 'Elective III', credits: 3 },
        'Summer Internship - IT3711': { name: 'Summer Internship - IT3711', credits: 2 },

    },
    8: {
        'Project Work/Internships - IT3811': { name: 'Project Work/Internships - IT3811', credits: 10 },
    }
  };