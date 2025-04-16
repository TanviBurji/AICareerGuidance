import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function CareerPrediction() {
  const [formData, setFormData] = useState({
    interest: '',
    skills: '',
    goals: ''
  });

  const [prediction, setPrediction] = useState<null | {
    career: string;
    roadmap: string[];
    courses: { name: string; url: string }[];
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = generatePrediction(formData);
    setPrediction(result);
  };

  const generatePrediction = ({ interest, skills, goals }: { interest: string; skills: string; goals: string }) => {
    const input = `${interest} ${skills} ${goals}`.toLowerCase();

    const careers = [
      {
        keywords: ['design', 'ui', 'ux', 'figma', 'adobe'],
        career: 'UI/UX Designer',
        roadmap: [
          'Learn design principles and color theory',
          'Practice with Figma, Adobe XD, or Sketch',
          'Understand user research and wireframing',
          'Build a design portfolio',
          'Collaborate with frontend developers'
        ],
        courses: [
          { name: 'Google UX Design Certificate', url: 'https://coursera.org/professional-certificates/google-ux-design' },
          { name: 'Adobe XD UI/UX Design', url: 'https://udemy.com/course/ui-ux-web-design-using-adobe-xd/' }
        ]
      },
      {
        keywords: ['data', 'analytics', 'sql', 'statistics'],
        career: 'Data Analyst',
        roadmap: [
          'Learn Excel, SQL, and Python basics',
          'Study statistics and data analysis techniques',
          'Use tools like Power BI or Tableau',
          'Work on data cleaning and visualization projects',
          'Learn basic machine learning'
        ],
        courses: [
          { name: 'IBM Data Analyst', url: 'https://coursera.org/professional-certificates/ibm-data-analyst' },
          { name: 'Data Analyst Bootcamp', url: 'https://udemy.com/course/the-data-analyst-course-complete-data-analyst-bootcamp/' }
        ]
      },
      {
        keywords: ['frontend', 'react', 'html', 'css', 'javascript'],
        career: 'Frontend Developer',
        roadmap: [
          'Master HTML, CSS, JavaScript',
          'Learn React or Vue.js',
          'Understand responsive design',
          'Practice by building real-world UIs',
          'Explore accessibility and testing'
        ],
        courses: [
          { name: 'The Complete Front-End Web Developer Bootcamp', url: 'https://udemy.com/course/the-complete-front-end-web-developer-bootcamp/' },
          { name: 'Frontend Developer Path', url: 'https://frontendmasters.com/learn/front-end/' }
        ]
      },
      {
        keywords: ['backend', 'node', 'express', 'api', 'database'],
        career: 'Backend Developer',
        roadmap: [
          'Learn Node.js, Express.js',
          'Understand REST APIs and authentication',
          'Work with databases like MongoDB or PostgreSQL',
          'Implement error handling and logging',
          'Explore scalability and performance tuning'
        ],
        courses: [
          { name: 'The Complete Node.js Developer Course', url: 'https://udemy.com/course/the-complete-nodejs-developer-course-2/' },
          { name: 'Backend Developer Bootcamp', url: 'https://codecademy.com/learn/back-end-engineer-career-path' }
        ]
      },
      {
        keywords: ['full stack', 'mern', 'web', 'developer'],
        career: 'Full Stack Developer',
        roadmap: [
          'Learn frontend and backend basics',
          'Master JavaScript frameworks like React and Node.js',
          'Use Git, GitHub, and CI/CD tools',
          'Deploy apps on cloud (Heroku, AWS)',
          'Build and scale full-stack apps'
        ],
        courses: [
          { name: 'The Web Developer Bootcamp', url: 'https://udemy.com/course/the-web-developer-bootcamp/' },
          { name: 'Full Stack Open', url: 'https://fullstackopen.com/' }
        ]
      },
      {
        keywords: ['machine learning', 'ai', 'deep learning', 'ml'],
        career: 'Machine Learning Engineer',
        roadmap: [
          'Learn Python and libraries like NumPy and pandas',
          'Study machine learning algorithms',
          'Implement models with Scikit-learn and TensorFlow',
          'Work on real-world datasets',
          'Explore MLOps and model deployment'
        ],
        courses: [
          { name: 'Machine Learning by Andrew Ng', url: 'https://coursera.org/learn/machine-learning' },
          { name: 'Deep Learning Specialization', url: 'https://coursera.org/specializations/deep-learning' }
        ]
      },
      {
        keywords: ['product', 'manager', 'strategy', 'roadmap'],
        career: 'Product Manager',
        roadmap: [
          'Understand product lifecycle and management basics',
          'Develop user-centric thinking and business acumen',
          'Learn project management and Agile methodologies',
          'Work on user stories and MVPs',
          'Build a portfolio with case studies'
        ],
        courses: [
          { name: 'Become a Product Manager', url: 'https://udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/' },
          { name: 'Digital Product Management', url: 'https://coursera.org/learn/uva-darden-digital-product-management' }
        ]
      },
      {
        keywords: ['mobile', 'android', 'ios', 'react native', 'flutter'],
        career: 'Mobile App Developer',
        roadmap: [
          'Learn mobile development basics',
          'Master Android (Kotlin) or iOS (Swift)',
          'Explore cross-platform tools like Flutter or React Native',
          'Practice building real apps',
          'Publish on App Store/Google Play'
        ],
        courses: [
          { name: 'Flutter Development Bootcamp', url: 'https://udemy.com/course/flutter-bootcamp-with-dart/' },
          { name: 'iOS & Swift - The Complete iOS App Development Bootcamp', url: 'https://udemy.com/course/ios-13-app-development-bootcamp/' }
        ]
      },
      {
        keywords: ['game', 'unity', 'unreal', 'gamedev', 'c#'],
        career: 'Game Developer',
        roadmap: [
          'Learn C# or C++ programming',
          'Understand game engines like Unity or Unreal',
          'Practice 2D and 3D game development',
          'Study game physics and design',
          'Create and publish games'
        ],
        courses: [
          { name: 'Complete C# Unity Game Developer 2D', url: 'https://udemy.com/course/unitycourse/' },
          { name: 'Unreal Engine Developer Course', url: 'https://udemy.com/course/unrealcourse/' }
        ]
      },
      {
        keywords: ['blockchain', 'crypto', 'web3', 'smart contracts'],
        career: 'Blockchain Developer',
        roadmap: [
          'Understand blockchain fundamentals',
          'Learn Ethereum, Solidity, and smart contracts',
          'Build dApps using Web3.js or ethers.js',
          'Study decentralized systems',
          'Work on blockchain projects'
        ],
        courses: [
          { name: 'Ethereum and Solidity: The Complete Developer’s Guide', url: 'https://udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/' },
          { name: 'Blockchain Specialization', url: 'https://coursera.org/specializations/blockchain' }
        ]
      },
      {
        keywords: ['vr', 'ar', 'augmented', 'virtual', 'xr'],
        career: 'AR/VR Developer',
        roadmap: [
          'Learn Unity or Unreal Engine',
          'Understand AR/VR interaction design',
          'Use tools like ARKit, ARCore',
          'Practice creating immersive experiences',
          'Deploy apps for Oculus, HoloLens, etc.'
        ],
        courses: [
          { name: 'Unity XR: How to Build AR and VR Apps', url: 'https://udemy.com/course/unity-xr-how-to-build-augmented-and-virtual-reality-apps/' },
          { name: 'Introduction to AR/VR', url: 'https://coursera.org/learn/introduction-virtual-reality' }
        ]
      },
      {
        keywords: ['robotics', 'automation', 'arduino', 'raspberry'],
        career: 'Robotics Engineer',
        roadmap: [
          'Understand electronics and microcontrollers',
          'Learn C/C++, Python, and ROS',
          'Work with Arduino and Raspberry Pi',
          'Study sensors, actuators, and control systems',
          'Build and test robots'
        ],
        courses: [
          { name: 'Modern Robotics Specialization', url: 'https://coursera.org/specializations/modernrobotics' },
          { name: 'Arduino Robotics', url: 'https://udemy.com/course/arduino-robotics/' }
        ]
      },
      {
        keywords: ['bioinformatics', 'genetics', 'biology', 'data', 'health'],
        career: 'Bioinformatics Specialist',
        roadmap: [
          'Study biology and genetics basics',
          'Learn Python/R for data analysis',
          'Explore genomics and bioinformatics tools',
          'Analyze real genetic data',
          'Apply machine learning to bio data'
        ],
        courses: [
          { name: 'Bioinformatics Specialization', url: 'https://coursera.org/specializations/bioinformatics' },
          { name: 'Genomic Data Science', url: 'https://coursera.org/specializations/genomic-data-science' }
        ]
      },
      {
        keywords: ['ai', 'nlp', 'language', 'chatbot', 'bert'],
        career: 'NLP Engineer',
        roadmap: [
          'Learn Python and NLP libraries (NLTK, spaCy)',
          'Understand text preprocessing and embeddings',
          'Work with models like BERT and GPT',
          'Build chatbots and sentiment analysis tools',
          'Deploy NLP solutions'
        ],
        courses: [
          { name: 'Natural Language Processing Specialization', url: 'https://coursera.org/specializations/natural-language-processing' },
          { name: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/chapter1' }
        ]
      },
      {
        keywords: ['big data', 'hadoop', 'spark', 'etl'],
        career: 'Big Data Engineer',
        roadmap: [
          'Understand distributed systems and storage',
          'Learn Hadoop and Spark',
          'Work with data lakes and pipelines',
          'Use ETL tools and SQL/NoSQL',
          'Deploy big data solutions'
        ],
        courses: [
          { name: 'Big Data Specialization', url: 'https://coursera.org/specializations/big-data' },
          { name: 'Apache Spark with Scala', url: 'https://udemy.com/course/apache-spark-with-scala-hands-on-with-big-data/' }
        ]
      },
      {
        keywords: ['animation', 'motion graphics', 'after effects'],
        career: 'Motion Graphics Designer',
        roadmap: [
          'Learn animation principles',
          'Master tools like After Effects and Blender',
          'Work on 2D and 3D motion design',
          'Build a creative portfolio',
          'Create animated content for media'
        ],
        courses: [
          { name: 'Motion Graphics Masterclass', url: 'https://udemy.com/course/motion-graphics-animated-explainer-video/' },
          { name: 'After Effects CC Masterclass', url: 'https://udemy.com/course/after-effects-cc-complete-course/' }
        ]
      },
      
      {
        keywords: ['cloud', 'aws', 'azure', 'gcp', 'devops'],
        career: 'Cloud Engineer',
        roadmap: [
          'Understand cloud fundamentals (AWS, Azure)',
          'Learn about networking, storage, and compute services',
          'Use tools like Terraform, Docker, Kubernetes',
          'Practice cloud deployments and automation',
          'Study for certifications (AWS, Azure)' 
        ],
        courses: [
          { name: 'AWS Cloud Practitioner Essentials', url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/' },
          { name: 'Cloud DevOps Engineer Nanodegree', url: 'https://udacity.com/course/cloud-dev-ops-nanodegree--nd9991' }
        ]
      },
      {
        keywords: ['marketing', 'seo', 'social media', 'content'],
        career: 'Digital Marketer',
        roadmap: [
          'Learn digital marketing fundamentals',
          'Understand SEO, SEM, and PPC advertising',
          'Master tools like Google Analytics and Ads',
          'Build social media and content marketing strategies',
          'Work on marketing campaigns and case studies'
        ],
        courses: [
          { name: 'Digital Marketing Specialization by University of Illinois', url: 'https://coursera.org/specializations/digital-marketing' },
          { name: 'Digital Marketing Masterclass', url: 'https://udemy.com/course/digital-marketing-masterclass' }
        ]
      },
      {
        keywords: ['product', 'management', 'pm', 'strategy', 'roadmap'],
        career: 'Product Manager',
        roadmap: [
          'Understand product lifecycle and user research',
          'Learn prioritization frameworks (MoSCoW, RICE)',
          'Work with cross-functional teams',
          'Build roadmaps and write user stories',
          'Study Agile/Scrum and product strategy'
        ],
        courses: [
          { name: 'Digital Product Management', url: 'https://coursera.org/learn/uva-darden-digital-product-management' },
          { name: 'Become a Product Manager', url: 'https://udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/' }
        ]
      },
      {
        keywords: ['blockchain', 'crypto', 'ethereum', 'solidity'],
        career: 'Blockchain Developer',
        roadmap: [
          'Learn cryptographic principles and blockchain fundamentals',
          'Understand Ethereum and smart contracts',
          'Practice Solidity and DApp development',
          'Build decentralized apps using Web3.js',
          'Explore blockchain scalability and security'
        ],
        courses: [
          { name: 'Blockchain Specialization by University of Buffalo', url: 'https://coursera.org/specializations/blockchain' },
          { name: 'Ethereum and Solidity: The Complete Developer’s Guide', url: 'https://udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/' }
        ]
      },
      {
        keywords: ['ar', 'vr', 'unity', 'oculus', 'augmented'],
        career: 'AR/VR Developer',
        roadmap: [
          'Learn Unity and C# basics',
          'Understand 3D modeling and physics engines',
          'Build simple VR/AR scenes',
          'Develop apps for Oculus, Hololens, or mobile AR',
          'Explore user interaction and performance optimization'
        ],
        courses: [
          { name: 'Unity XR: How to Build AR and VR Apps', url: 'https://coursera.org/learn/build-ar-vr-apps' },
          { name: 'Complete Virtual Reality Developer', url: 'https://udemy.com/course/complete-virtual-reality-game-developer/' }
        ]
      },
      {
        keywords: ['robotics', 'automation', 'ros', 'arduino', 'raspberry pi'],
        career: 'Robotics Engineer',
        roadmap: [
          'Understand kinematics and control theory',
          'Learn programming with Python and C++',
          'Work with Arduino and Raspberry Pi',
          'Use ROS (Robot Operating System)',
          'Build autonomous robot projects'
        ],
        courses: [
          { name: 'Modern Robotics Specialization', url: 'https://coursera.org/specializations/modernrobotics' },
          { name: 'Mastering ROS for Robotics Programming', url: 'https://udemy.com/course/ros-essentials/' }
        ]
      },
      {
        keywords: ['hardware', 'circuit', 'electronics', 'pcb'],
        career: 'Hardware Engineer',
        roadmap: [
          'Study circuit design and electronic components',
          'Learn PCB design tools (KiCad, Eagle)',
          'Build embedded systems with microcontrollers',
          'Understand signal processing and firmware',
          'Test and debug hardware prototypes'
        ],
        courses: [
          { name: 'The Complete Electronics Course', url: 'https://udemy.com/course/electronics-complete/' },
          { name: 'Introduction to Electronics', url: 'https://coursera.org/learn/introduction-electronics' }
        ]
      },
      {
        keywords: ['finance', 'investment', 'trading', 'stocks'],
        career: 'Financial Analyst',
        roadmap: [
          'Study financial accounting and economics',
          'Learn Excel modeling and forecasting',
          'Understand stock market fundamentals',
          'Practice financial statement analysis',
          'Get CFA or similar certification'
        ],
        courses: [
          { name: 'Financial Markets by Yale', url: 'https://coursera.org/learn/financial-markets-global' },
          { name: 'Become a Certified Financial Analyst', url: 'https://udemy.com/course/become-a-certified-financial-analyst/' }
        ]
      },
      {
        keywords: ['biology', 'research', 'dna', 'genetics'],
        career: 'Biotech Researcher',
        roadmap: [
          'Study molecular biology and genetics',
          'Practice lab techniques (PCR, gel electrophoresis)',
          'Understand bioinformatics tools',
          'Contribute to ongoing research projects',
          'Publish or present findings'
        ],
        courses: [
          { name: 'Fundamentals of Biology', url: 'https://edx.org/course/introduction-to-biology' },
          { name: 'Bioinformatics Specialization', url: 'https://coursera.org/specializations/bioinformatics' }
        ]
      },
      {
        keywords: ['writing', 'content', 'copywriting', 'storytelling'],
        career: 'Content Writer',
        roadmap: [
          'Master grammar and writing mechanics',
          'Learn SEO and digital content strategy',
          'Practice different writing styles (blogs, ads)',
          'Build a personal writing portfolio',
          'Learn to write for different audiences'
        ],
        courses: [
          { name: 'Content Marketing Certification', url: 'https://hubspot.com/certification/content-marketing' },
          { name: 'Copywriting Masterclass', url: 'https://udemy.com/course/copywriting-masterclass/' }
        ]
      },
      {
        keywords: ['game', 'unity', 'unreal', 'gamedev', 'c#'],
        career: 'Game Developer',
        roadmap: [
          'Learn C# or C++ and game dev fundamentals',
          'Work with Unity or Unreal Engine',
          'Build 2D and 3D games',
          'Understand game physics, animation, and design patterns',
          'Publish games on various platforms'
        ],
        courses: [
          { name: 'Game Development Masterclass', url: 'https://udemy.com/course/unitycourse/' },
          { name: 'Game Design and Development', url: 'https://coursera.org/specializations/game-design' }
        ]
      },
      {
        keywords: ['seo', 'search', 'optimization', 'google'],
        career: 'SEO Specialist',
        roadmap: [
          'Understand how search engines work',
          'Learn on-page and off-page SEO',
          'Use tools like Google Analytics and Ahrefs',
          'Master keyword research and link building',
          'Track and optimize website performance'
        ],
        courses: [
          { name: 'SEO Training Course by Moz', url: 'https://moz.com/learn/seo/what-is-seo' },
          { name: 'SEO Mastery Course', url: 'https://udemy.com/course/seo-ultimate-guide/' }
        ]
      },
      {
        keywords: ['qa', 'testing', 'manual testing', 'automation'],
        career: 'Quality Assurance Engineer',
        roadmap: [
          'Understand software testing fundamentals',
          'Learn manual testing and test case design',
          'Automate tests using Selenium or Cypress',
          'Explore API and performance testing',
          'Use bug tracking tools like Jira'
        ],
        courses: [
          { name: 'Software Testing Masterclass', url: 'https://udemy.com/course/software-testing-masterclass/' },
          { name: 'Test Automation with Selenium', url: 'https://coursera.org/learn/automated-software-testing' }
        ]
      },
      {
        keywords: ['support', 'helpdesk', 'it support', 'tech support'],
        career: 'IT Support Specialist',
        roadmap: [
          'Learn basic networking and operating systems',
          'Understand computer hardware and troubleshooting',
          'Practice technical documentation',
          'Support end users and manage tickets',
          'Prepare for CompTIA A+'
        ],
        courses: [
          { name: 'Google IT Support Certificate', url: 'https://coursera.org/professional-certificates/google-it-support' },
          { name: 'IT Support Fundamentals', url: 'https://udemy.com/course/it-support-fundamentals/' }
        ]
      },
      {
        keywords: ['database', 'sql', 'dba', 'oracle', 'mysql'],
        career: 'Database Administrator',
        roadmap: [
          'Learn SQL and database design',
          'Work with MySQL, PostgreSQL, or Oracle',
          'Understand backup, recovery, and security',
          'Optimize database performance',
          'Manage access and permissions'
        ],
        courses: [
          { name: 'Database Management Essentials', url: 'https://coursera.org/learn/database-management' },
          { name: 'SQL & Database Design', url: 'https://udemy.com/course/sql-database-fundamentals/' }
        ]
      },
      {
        keywords: ['networking', 'ccna', 'routing', 'switching'],
        career: 'Network Engineer',
        roadmap: [
          'Study network fundamentals and OSI model',
          'Learn IP addressing and subnetting',
          'Understand routing and switching',
          'Configure routers and firewalls',
          'Prepare for CCNA certification'
        ],
        courses: [
          { name: 'Cisco CCNA Networking Basics', url: 'https://coursera.org/learn/the-bits-and-bytes-of-computer-networking' },
          { name: 'Cisco CCNA 200-301', url: 'https://udemy.com/course/ccna-complete/' }
        ]
      },
      {
        keywords: ['law', 'legal', 'contracts', 'corporate'],
        career: 'Corporate Lawyer',
        roadmap: [
          'Earn a law degree and license',
          'Specialize in corporate or business law',
          'Understand contracts, mergers, and compliance',
          'Work with legal documentation',
          'Stay updated on laws and regulations'
        ],
        courses: [
          { name: 'Introduction to Corporate & Commercial Law', url: 'https://coursera.org/learn/corporate-commercial-law' },
          { name: 'Legal Aspects of Business', url: 'https://edx.org/course/law-for-business' }
        ]
      },
      {
        keywords: ['finance', 'cfa', 'investing', 'valuation'],
        career: 'Investment Banker',
        roadmap: [
          'Study finance, economics, and accounting',
          'Learn valuation techniques (DCF, multiples)',
          'Practice financial modeling',
          'Work on mergers and acquisitions',
          'Network with industry professionals'
        ],
        courses: [
          { name: 'Investment Banking Certification', url: 'https://coursera.org/learn/introduction-financial-markets' },
          { name: 'Investment Banking Prep', url: 'https://udemy.com/course/investment-banking/' }
        ]
      },
      {
        keywords: ['video', 'editor', 'premiere', 'davinci'],
        career: 'Video Editor',
        roadmap: [
          'Learn video editing tools (Premiere Pro, DaVinci)',
          'Understand storytelling and pacing',
          'Edit for social media, YouTube, and film',
          'Add effects, transitions, and audio',
          'Build a video editing portfolio'
        ],
        courses: [
          { name: 'Video Editing with Adobe Premiere', url: 'https://udemy.com/course/adobe-premiere-pro-video-editing/' },
          { name: 'DaVinci Resolve Editing Course', url: 'https://blackmagicdesign.com/products/davinciresolve/training' }
        ]
      },
      {
        keywords: ['photography', 'dslr', 'lightroom', 'photoshop'],
        career: 'Photographer',
        roadmap: [
          'Learn camera settings and composition',
          'Practice lighting and shooting techniques',
          'Edit photos using Lightroom or Photoshop',
          'Choose a niche (portraits, travel, weddings)',
          'Build a personal photography brand'
        ],
        courses: [
          { name: 'Photography Masterclass', url: 'https://udemy.com/course/photography-masterclass-complete-guide-to-photography/' },
          { name: 'Digital Photography Basics', url: 'https://coursera.org/learn/digital-photography' }
        ]
      },
      {
        keywords: ['entrepreneur', 'startup', 'founder', 'business'],
        career: 'Entrepreneur',
        roadmap: [
          'Validate a business idea',
          'Build a minimum viable product (MVP)',
          'Understand startup funding and pitching',
          'Study growth strategies and monetization',
          'Learn from successful founders'
        ],
        courses: [
          { name: 'Y Combinator Startup School', url: 'https://startupschool.org/' },
          { name: 'Entrepreneurship Specialization', url: 'https://coursera.org/specializations/wharton-entrepreneurship' }
        ]
      },
      {
        keywords: ['sales', 'crm', 'negotiation', 'b2b'],
        career: 'Sales Executive',
        roadmap: [
          'Understand sales funnels and buyer personas',
          'Learn CRM tools (Salesforce, HubSpot)',
          'Master cold emailing and pitching',
          'Practice negotiation and closing deals',
          'Build long-term client relationships'
        ],
        courses: [
          { name: 'Sales Training: Practical Sales Techniques', url: 'https://udemy.com/course/practical-sales-techniques/' },
          { name: 'HubSpot Sales Enablement Certification', url: 'https://academy.hubspot.com/courses/sales-enablement' }
        ]
      },
      {
        keywords: ['hr', 'recruitment', 'employee', 'onboarding'],
        career: 'Human Resources Specialist',
        roadmap: [
          'Learn recruitment and HRM basics',
          'Understand employee onboarding and retention',
          'Manage payroll and benefits',
          'Handle conflict resolution and labor laws',
          'Use HR software (BambooHR, Workday)'
        ],
        courses: [
          { name: 'Human Resource Management', url: 'https://coursera.org/learn/human-resource-management' },
          { name: 'Strategic HR Leadership', url: 'https://edx.org/professional-certificate/ritx-strategic-human-resources' }
        ]
      },
      {
        keywords: ['education', 'teacher', 'online tutoring'],
        career: 'Online Educator',
        roadmap: [
          'Choose your subject/niche',
          'Create engaging lesson plans and content',
          'Use LMS platforms (Teachable, Udemy)',
          'Build your personal brand and audience',
          'Monetize with paid courses or memberships'
        ],
        courses: [
          { name: 'Teach Online: Create Online Courses', url: 'https://udemy.com/course/teach-online-create-a-paid-online-course/' },
          { name: 'Instructional Design for ELearning', url: 'https://coursera.org/learn/learning-to-teach-online' }
        ]
      },
      {
        keywords: ['event', 'planning', 'organizing', 'wedding'],
        career: 'Event Planner',
        roadmap: [
          'Learn event planning fundamentals',
          'Develop budgeting and organizational skills',
          'Coordinate with vendors and venues',
          'Handle marketing and guest lists',
          'Build a client portfolio'
        ],
        courses: [
          { name: 'Event Planning Course', url: 'https://udemy.com/course/event-planning-course/' },
          { name: 'Wedding Planning Certification', url: 'https://iwedglobal.com/' }
        ]
      },
      {
        keywords: ['psychology', 'mental health', 'therapy'],
        career: 'Psychologist',
        roadmap: [
          'Get a degree in psychology or counseling',
          'Understand human behavior and mental health',
          'Practice with patients (internship/residency)',
          'Specialize (clinical, child, industrial)',
          'Stay certified and licensed'
        ],
        courses: [
          { name: 'Introduction to Psychology', url: 'https://coursera.org/learn/introduction-psychology' },
          { name: 'The Science of Well-Being', url: 'https://coursera.org/learn/the-science-of-well-being' }
        ]
      },
      
      
      {
        keywords: ['security', 'ethical hacking', 'cyber', 'pentest'],
        career: 'Cybersecurity Analyst',
        roadmap: [
          'Understand network and information security basics',
          'Learn about common vulnerabilities and threats',
          'Use tools like Wireshark, Metasploit, Nmap',
          'Practice penetration testing and threat analysis',
          'Get certified (CEH, CompTIA Security+)' 
        ],
        courses: [
          { name: 'The Complete Cyber Security Course', url: 'https://udemy.com/course/the-complete-cyber-security-course/' },
          { name: 'Google Cybersecurity Certificate', url: 'https://coursera.org/professional-certificates/google-cybersecurity' }
        ]
      },
      // ... Add 12 more paths like: Game Developer, AR/VR Developer, Product Manager, Technical Writer, Data Engineer, DevOps Engineer, Blockchain Developer, Mobile App Developer, QA Engineer, IT Support Specialist, SEO Specialist, Digital Marketer
    ];

    for (const career of careers) {
      if (career.keywords.some((keyword) => input.includes(keyword))) {
        return {
          career: career.career,
          roadmap: career.roadmap,
          courses: career.courses
        };
      }
    }

    return {
      career: 'Software Developer',
      roadmap: [
        'Learn a programming language (Python or JavaScript)',
        'Understand problem solving and data structures',
        'Build simple software projects',
        'Explore software development lifecycle',
        'Work on version control and teamwork'
      ],
      courses: [
        { name: 'CS50: Introduction to Computer Science', url: 'https://cs50.harvard.edu/x/' },
        { name: 'The Complete JavaScript Course', url: 'https://udemy.com/course/the-complete-javascript-course/' }
      ]
    };
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Career Prediction
        </h1>

        <form onSubmit={handleSubmit} className="mb-12 space-y-6">
          <div className="space-y-2">
            <label className="block text-orange-400">Field of Interest</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-orange-400">Top Skills</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-orange-400">Career Goals</label>
            <textarea
              className="w-full px-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-5 w-5" />
            Generate Prediction
          </button>
        </form>

        {prediction && (
          <div className="animate-fade-in space-y-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/20">
            <div>
              <h2 className="text-2xl font-semibold text-orange-400 mb-2">Recommended Career Path</h2>
              <p className="text-xl text-white">{prediction.career}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Learning Roadmap</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                {prediction.roadmap.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Recommended Courses</h3>
              <div className="space-y-3">
                {prediction.courses.map((course, index) => (
                  <a
                    key={index}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {course.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}