
import placeHolderImage from '../../../assets/about_us_assets/placeholder_img.jpg';
import peterImage from '../../../assets/about_us_assets/peter_prof_img2.jpg';
import kathrynImage from '../../../assets/about_us_assets/kathryn_prof_img2.jpg';
import donImage from '../../../assets/about_us_assets/don_prof_img2.jpg';
import rayImage from '../../../assets/about_us_assets/ray_prof_img2.jpg';
import lingImage from '../../../assets/about_us_assets/ling_prof_img2.jpg';
import qiImage from '../../../assets/about_us_assets/qi_prof_img2.jpg';

const teamData = [
  {
    id: 1,
    name: "Ling Wang",
    slug: "ling-wang",
    role: "Founder & CEO",
    image: lingImage,
    description: "Ling Wang is the Founder and Chief Executive Officer of Brightway to Canada Consulting Inc, an international student services firm dedicated to guiding students and families through every stage of the overseas education journey. Since 2008, Ling has helped international students and families confidently navigate their education journey. She works closely with parents, students, and schools to ensure every child finds the right learning environment. Ling also supports the ISP program of school districts and serves as a trusted bridge between schools, students, teachers, and families, making the process clear, supportive, and stress-free for parents.",
    extended_bio: ["With extensive experience in academic consulting and international admissions strategy, Ling founded Brightway Education Consulting to address the growing need for ethical, transparent, and personalized education guidance. Her vision is to help students make informed decisions that align with their academic strengths, long-term goals, and personal values, rather than following one-size-fits-all pathways.",
      "Under Ling’s leadership, Brightway Education Consulting has supported students pursuing secondary and post-secondary education across major international destinations. The company  is known for its student-first approach, meticulous planning, and strong understanding of systems, admissions requirements, and cross-cultural transitions.",
      "Ling is deeply committed to education as a tool for empowerment and social mobility. She works closely with students and parents, offering hands-on support in school selection, application strategy, academic planning, and transition preparation. Her leadership has shaped Brightway’s reputation for professionalism, integrity, and long-term student success. Ling believes every student can reach their goal. The customized learning plans suggested by Brightway to Canada have consistently led to strong student outcomes and numerous success stories.",
      "As Founder & CEO, Ling continues to lead Brightway Education Consulting with a clear mission: to illuminate the path forward for international students and help them build confident, successful futures through education."
    ],
    categories: ["founder", "advising"],
    hierarchyLevel: 1, // Add hierarchy level
    hierarchyCategory: "founder" // Add hierarchy category
  },
  {
    id: 2,
    name: "Jonathan Tang",
    slug: "jonathan-tang",
    role: "Frontend Developer & Technical lead",
    image: placeHolderImage,
    description: "Jonathan Tang is the Technical Lead at Brightway to Canada and a former student who directly benefited from Ling’s guidance since a young age. Now studying engineering at the University of Toronto, he leads the technical development of the company’s digital platform, combining firsthand student experience with strong engineering and programming expertise to build reliable, student-focused systems.",
    extended_bio: ["Jonathan Tang is a key contributor in shaping the technical foundation of Brightway to Canada. As the architect behind the website framework, he is responsible for the platform’s structure, functionality, and long-term scalability. His work ensures that the site remains stable, efficient, and to optimize usability for students and families navigating the Canadian education system.", "A former student supported by Ling, Jonathan brings a unique perspective to his role. Having experienced the challenges of academic planning firsthand, he is deeply committed to building systems that are clear, dependable, and genuinely helpful. Known for his reliability, attention to detail, and great experience with UI design, he approaches technical challenges methodically and follows through consistently, making him a trusted leader on the technical side of the company.", "Jonathan began developing his programming skills through computer science courses in high school and has continued building his expertise through university-level coursework, including fundamentals of deep learning. He is experienced in Python, C++, C, and JavaScript, and applies this technical background to both front-end and back-end development.", "Outside of Professional work and academics, Jonathan is passionate about badminton and plays regularly. He is also deeply involved in music, playing guitar and piano and producing music in his free time."],
    hierarchyLevel: 5,
    hierarchyCategory: "administration",
    extended_expertise: ["Video Editing", "Graphic Design", "Music Production"]
  },
  {
    id: 3,
    name: "Jay Zang",
    slug: "jay-zang",
    role: "STEM Tutor & Technical Support",
    image: placeHolderImage,
    description: "Jay Zang is a tutor and designer at Brightway to Canada, leveraging his background in Astronomy and Information Systems to support students in math and science. His dual role gives him a unique edge in creating clear and engaging educational experiences tailored to individual academic goals.",
    categories: ["tutor_stem", "development", "design"],
    tutor_expertise: ["Math", "Science"],
    extended_bio: ["Drawing on a unique blend of academic expertise and creative skill, Jay Zang provides multifaceted support to students at Brightway to Canada. Holding a Bachelor's degree in Astronomy and currently completing his Master's in Information Systems, he bridges the gap between complex scientific concepts and intuitive, accessible learning.",
      "His direct experience as an international student gives him firsthand insight into the challenges of navigating a new academic system and adapting to life in Canada. This allows him to offer students not just academic tutoring, but also empathetic guidance through the unique hurdles they may face.",
      "In his tutoring role for math and science (Grades 8-12), Jay moves beyond standard instruction. He focuses intently on individual student goals, whether that involves boosting a grade, preparing for a crucial exam, or breaking down a persistent conceptual barrier.",
      "His impact is further amplified by his parallel role as a designer for Brightway to Canada, where he helps shape the company's website and visual assets. This dual perspective enables him to craft educational experiences that are not only clear and effective but also visually rich.",
      "Driven by a personal passion for demystifying science, Jay harbors a long-term dream of building an easy-to-understand visualization system for public science education. This goal fuels his everyday work and is reflected in his approach to both tutoring and design. Further honing his visual communication skills, he is also an avid video and photo editing hobbyist, continuously exploring new ways to make ideas come alive."
    ],
    hierarchyLevel: 3,
    hierarchyCategory: "tutor_stem",
    extended_expertise: ["Video Editing", "Graphic Design"]
  },
  {
    id: 4,
    name: "Peter Stevens",
    slug: "peter-stevens",
    role: "Professional Science Instructor",
    image: peterImage,
    description: "Peter Stevens is a highly experienced math, physics, and chemistry tutor with nearly 20 years of expertise and a master’s in mathematics. He helps students in grades 8 through university achieve measurable progress by emphasizing deep understanding over memorization. Known for his clear, supportive, and tailored approach, Peter empowers students to build lasting confidence and skills.",
    categories: ["tutor_stem"],
    tutor_expertise: ["Math", "Science"],
    extended_bio: ["Peter Stevens has been helping students achieve strong results in math, physics, and chemistry. With nearly 20 years of tutoring experience and a master’s degree in mathematics from York University, he has helped hundreds of students raise grades, pass courses, and build confidence.",
      "Students who work with Peter often see significant improvement in their performance because he focuses on why things work, not just how to get the answers. His sessions are structured, supportive, and tailored to each student’s goals.",
      "Known for his quick wit, clear explanations, and student-centered teaching  style, Peter works with students from Grade 8 through first-year  university. Many have worked with him long-term and recommend him to  friends and family. His goal is simple: measurable progress, lasting  understanding, and students who feel capable on their own.",
      "When he isn’t working, he’s often powerlifting in the gym or concocting new recipes in the kitchen."
    ],
    hierarchyLevel: 3,
    hierarchyCategory: "tutor_stem"
  },
  {
    id: 5,
    name: "Don Standing",
    slug: "don-standing",
    role: "Professional English Instructor",
    image: donImage,
    description: "Don Standing is a veteran writing tutor with decades of teaching experience. He holds a BA in History, a B.Ed, and an M.Ed, and taught in British Columbia secondary schools for more than 30 years. Since 2017, he has dedicated himself to one-on-one tutoring. He has two core philosophies: having something meaningful to say and knowing how to say it. He prioritizes helping students clarify and justify their own ideas through discussion, then guides them to structure their reasoning with purpose. He also focuses on polishing rhetorical and grammatical technique and believes all motivated students can improve their writing through this tailored, experience-guided journey.",
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    extended_bio: ["Most of my students come to me because they want to improve their writing. Good writing, to me, is the result of two things: having something to say and knowing how to say it. The former is the hardest problem to solve. Many students have never been pushed to justify, examine or explain their beliefs or opinions. This is reflected in their writing: they can state their position, but cannot explain it to others as they have never done it  even to themselves. Discussion and Socratic questioning, therefore, can take up a significant amount of time in my teaching of writing. Only when the student has something interesting to say and actually realises that, can they start to improve their writing.",
      "The next step is recognising the inherent structure in their reasoning. Teenagers tend to jump from idea to idea as those ideas occur rather than doing the thinking first, gathering their ideas and then deciding how best to present them. During this phase it is often important to discuss purpose. Students often write simply because they’ve been told to produce a certain number of words. Once they understand that they need a purpose for their writing can we address the final piece.",
      "After realising they have something to say and seeing how their thoughts interrelate and then deciding on the purpose of the product, we can start to polish. Rhetorical and grammatical flourishes - the tricks of the trade that can change the merely competent into the memorable.",
      "Results, of course, vary. Some students move more quickly than others. Some have an affinity for the work that others lack, but all students can improve their writing if they wish to. I can help with that.",
      "My approach is grounded in over four decades of teaching experience. After completing a BA in History and a B.Ed at Queen’s University, I taught English, Social Studies, and French at secondary schools in Revelstoke and Parksville, British Columbia, for more than 30 years. I later earned an M.Ed from the University of Victoria. Since 2017, I have focused solely on one-on-one tutoring, drawing on this extensive background to guide each student’s unique writing journey."],
    hierarchyLevel: 2,
    hierarchyCategory: "tutor_lang"
  },
  {
    id: 6,
    name: "Kathryn Collins",
    slug: "kathryn-collins",
    role: "Former English Teacher & Child Book Author",
    image: kathrynImage,
    description: ["Kathryn Ellis Collins is a dedicated tutor with over 30 years of experience and a Master’s in Education. She helps students from elementary to high school develop a strong command of English by blending literature analysis and writing with an artist’s eye for detail and emotion. Her supportive, adaptive approach fosters vivid self-expression and a genuine love for lifelong learning."
    ],
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    extended_bio: ["Kathryn Ellis Collins has been guiding students to discover the artistry of language and the power of their own written voice. With over 30 years of teaching experience, from kindergarten to grade 12, plus six years specializing in ESL, she possesses a deep and adaptive understanding of how learners build confidence with words.",
    "Holding a Master’s Degree in Education, Kathryn is more than a tutor; she is a mentor who focuses on why language moves us, not just how it functions. Her unique approach often blends English with visual art, sending students on a fine art journey that goes beyond blending texts. Through this creative synthesis, students learn to analyze literature with an artist's eye and craft writing with an illustrator's sense of detail, texture, and emotion.",
    "Kathryn is motivated by a core belief: while change is constant, our ability to adapt and create is a skill we can all cultivate. She understands that students are often overwhelmed by information. In response, she crafts a thoughtful learning environment that provides meaningful, engaging experiences and fosters a genuine love for lifelong learning.",
    "This philosophy is alive in her tutoring and in her work as a published children’s author and illustrator. In her first book, A Rainy Day, she tackles the theme of adapting to change: a principle she applies directly in her sessions. She guides students to see academic and creative challenges not as setbacks, but as opportunities to grow in confidence, self-awareness, and expressive ability.",
    "Students who work with Kathryn don’t just raise their grades; they develop a stronger, more intuitive command of English, more vivid self-expression, and lasting skills for academic and creative success. She works with learners from elementary school through high school and adult ESL. Her goal is simple: measurable progress, deeper understanding, and students who feel capable and inspired in their own abilities.",
    "When she isn’t teaching, Kathryn is immersed in her parallel passion: writing and illustrating children’s books, where she continues to explore the beautiful intersection of story and image."
    ],
    hierarchyLevel: 2,
    hierarchyCategory: "tutor_lang",
    extended_expertise: ["Arts (Visual Arts)", "Children's Literature"]
  },
  {
    id: 7,
    name: "Ray Beraska",
    slug: "ray-beraska",
    role: "English Instructor",
    image: rayImage,
    description: "Ray Bereska is a veteran English language teacher and tutor with over 40 years of experience supporting international students in academic and real-world English. Holding a Master of Education in Educational Leadership and Counselling, he specializes in helping learners build strong communication skills, cultural confidence, and academic readiness through patient, engaging, and personalized instruction.",
    extended_bio: ["Ray Bereska has dedicated more than four decades to teaching English in both classroom and one-on-one settings, working with learners ranging from elementary school to adult graduation programs. He holds a Master of Education from City University of Seattle and a Bachelor of Education from the University of British Columbia, bringing both depth of knowledge and practical teaching experience to every session.", "Throughout his career in School District #68 in Nanaimo and in private and international education settings, Ray has taught all aspects of English language development, including reading, writing, speaking, listening, grammar, pronunciation, and cultural nuance. His lessons are carefully structured yet flexible, allowing him to adapt to different learning styles and proficiency levels while keeping students motivated and emotionally engaged.", "Students and colleagues consistently describe Ray as warm, approachable, and deeply committed to student success. Known for his clear expectations, thoughtful feedback, and sense of humour, he creates a supportive learning environment where students gain confidence and independence. His goal is to ensure students are not only academically prepared, but also comfortable and capable communicating in English-speaking environments."],
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    hierarchyLevel: 2,
    hierarchyCategory: "tutor_lang"
  },
  {
    id: 8,
    name: "Qi Zhu",
    slug: "qi-zhu",
    role: "Marketing Advisor & Mandarin Instructor",
    image: qiImage,
    description: "Qi Zhu is an experienced educator with decades of experience who has more recently specialized in adolescent psychological therapy and cross-cultural subject instruction. Certified as an international therapist and TCSOL instructor, she focuses on preparing high school students for overseas academic success: bridging curriculum gaps, strengthening the foundations, and meeting admission requirements. Skilled in multimedia course design and diverse teaching methods, she provides tailored guidance for students abroad and in-person tutoring for returnees, ensuring sustained academic adaptation and support throughout their international education journey.",
    categories: ["design", "tutor_lang"],
    tutor_expertise: ["Language (Mandarin)"],
    hierarchyLevel: 4,
    hierarchyCategory: "design",
    extended_expertise: ["Content Creation"],
    extended_bio: ["Qi Zhu has decades of dedicated experience in education, with dual core expertise in adolescent psychological therapy and cross-cultural subject instruction. She holds an International Therapist Certification and professional qualifications in Teaching Chinese to Speakers of Other Languages (TCSOL).",
      "Drawing on higher education resources, she specializes in bridging senior high school students to their target overseas majors—addressing gaps between Chinese and foreign academic frameworks, building solid subject foundations, and aligning preparation with overseas admission requirements.",
      "Proficient in multimedia courseware development, she integrates diverse teaching methodologies into curriculum design to match overseas classroom norms. She offers remote academic guidance for international students abroad and customized offline tutoring for returnees, providing full-cycle support to help students overcome academic challenges and adapt to overseas learning rhythms."
    ]
  }
];

export default teamData;
