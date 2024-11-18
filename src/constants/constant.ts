export const programmingLanguages: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "Go",
  "PHP",
  "Swift",
  "Kotlin",
  "Rust",
  "Dart",
  "SQL",
  "HTML",
  "CSS",
];

export const allJobs = [
  {
    id: 1,
    companyLogo:
      "https://cdn.prod.website-files.com/66e9839528db1d093c7c83a9/66e98a940b581015b5f0b357_company-01.png",
    title: "Frontend Developer",
    description: "Build responsive and user-friendly interfaces",
    company: "Google",
    location: "Mountain View, CA",
    programmingLanguages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    jobType: "Full-time",
    datePosted: "2024-11-10",
    internship: true,
  },
  {
    id: 2,
    companyLogo:
      "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75515_company-04.png",
    title: "Backend Developer",
    company: "Microsoft",
    location: "Redmond, WA",
    programmingLanguages: ["C#", "Java", "SQL"],
    type: "Full-time",
    remote: true,
    inTheSpotlight: false,
    datePosted: "2024-11-12",
    internship: false,
    freelancer: true,
  },
  {
    id: 3,
    companyLogo:
      "https://i.pinimg.com/736x/cf/11/eb/cf11ebcc0a874e3ad3830431f7b0ab58.jpg",
    title: "UI/UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    programmingLanguages: ["Figma", "Sketch", "Adobe XD"],
    type: "Internship",
    remote: false,
    inTheSpotlight: true,
    datePosted: "2024-11-15",
    internship: true,
    freelancer: false,
  },
  {
    id: 4,
    companyLogo:
      "https://i.pinimg.com/736x/1d/3d/b9/1d3db940e03e1b44e795aad98ab747b1.jpg",
    title: "Data Scientist",
    company: "Facebook",
    location: "Remote",
    programmingLanguages: ["Python", "R", "SQL"],
    type: "Full-time",
    remote: true,
    inTheSpotlight: false,
    datePosted: "2024-11-14",
    internship: false,
    freelancer: false,
  },
  {
    id: 5,
    companyLogo:
      "https://i.pinimg.com/736x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    title: "Digital Marketing Specialist",
    company: "Amazon",
    location: "Seattle, WA",
    programmingLanguages: ["SEO", "Google Analytics", "AdWords"],
    type: "Freelancer",
    remote: true,
    inTheSpotlight: false,
    datePosted: "2024-11-11",
    internship: false,
    freelancer: true,
  },
  {
    id: 6,
    companyLogo:
      "https://i.pinimg.com/736x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg",
    title: "Mobile Developer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    programmingLanguages: ["Swift", "Kotlin", "React Native"],
    type: "Full-time",
    remote: true,
    inTheSpotlight: false,
    datePosted: "2024-11-09",
    internship: false,
    freelancer: false,
  },
  {
    id: 7,
    companyLogo:
      "https://i.pinimg.com/736x/6d/50/fc/6d50fc352f4eb7b2b00933b3138331bb.jpg",
    title: "Cloud Engineer",
    company: "IBM",
    location: "New York, NY",
    programmingLanguages: ["Python", "AWS", "Azure"],
    type: "Internship",
    remote: false,
    inTheSpotlight: true,
    datePosted: "2024-11-08",
    internship: true,
    freelancer: false,
  },
  // {
  //   id: 8,
  //   title: "Cybersecurity Analyst",
  //   company: "Twitter",
  //   location: "Remote",
  //   programmingLanguages: ["Python", "C", "Bash"],
  //   type: "Freelancer",
  //   remote: true,
  //   inTheSpotlight: false,
  //   datePosted: "2024-11-07",
  //   internship: false,
  //   freelancer: true,
  // },
  {
    id: 9,
    companyLogo:
      "https://i.pinimg.com/736x/a9/6b/1f/a96b1fa3bfefafe53b95500f03b0f5df.jpg",
    title: "Salesforce Administrator",
    company: "Salesforce",
    location: "San Francisco, CA",
    programmingLanguages: ["Salesforce", "Apex", "Visualforce"],
    type: "Full-time",
    remote: false,
    inTheSpotlight: false,
    datePosted: "2024-11-06",
    internship: false,
    freelancer: false,
  },
  // {
  //   id: 10,
  //   title: "Full-stack Developer",
  //   company: "Netflix",
  //   location: "Los Angeles, CA",
  //   programmingLanguages: ["JavaScript", "Node.js", "React", "MongoDB"],
  //   type: "Full-time",
  //   remote: true,
  //   inTheSpotlight: true,
  //   datePosted: "2024-11-05",
  //   internship: false,
  //   freelancer: false,
  // },
];

export const testimonials = [
  {
    image:
      "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f75505/66f2f083f5b8de8e38f75551_company-05.png",
    company: "Company XYZ",
    testimonial:
      "One of the main advantages of posting jobs on Devtask is the skill level of the applicants. Some of the best talents in our team were found here.",
    author: {
      name: "John Wick",
      title: "CTO",
    },
    results: {
      fasterHiring: "3–4x faster",
      textHiring: " to find our talents",
      professionalsHired: "+30 ",
      textProfessionals: "professionals hired",
    },
  },
  {
    image:
      "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f75505/66f2f083f5b8de8e38f75552_tommy.png",
    company: "Tommy Abha",
    testimonial:
      "Using Devtalk lead me to amazing freelancing gigs and ultimately to a dream job at a major tech company.",
    author: {
      name: "iOS developer ",
      title: "at RockCode",
    },
    results: {
      fasterHiring: "+40",
      textHiring: "freelancing gigs",
      professionalsHired: "1 ",
      textProfessionals: "full-time hiring",
    },
  },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "2023-01-01",
  lastUpdated: "2024-11-18",
  introduction: `
    Welcome to [Your Company Name]. Your privacy is important to us. 
    This Privacy Policy explains how we collect, use, and protect your information.
  `,
  sections: [
    {
      title: "Information We Collect",
      content: `
        We collect information to provide better services to all our users.
      `,
      list: [
        "Personal information (e.g., name, email address)",
        "Usage data (e.g., pages visited, time spent on the site)",
      ],
    },
    {
      title: "How We Use Your Information",
      content: `
        The information we collect is used to:
      `,
      list: [
        "Improve our services",
        "Communicate with you",
        "Personalize your experience",
      ],
    },
    {
      title: "Sharing Your Information",
      content: `
        We do not share your personal information with third parties, except:
      `,
      list: ["When required by law", "With your consent"],
    },
    {
      title: "Security",
      content: `
        We implement a variety of security measures to protect your personal information.
      `,
    },
  ],
};
