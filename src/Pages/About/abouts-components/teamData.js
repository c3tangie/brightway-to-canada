
import placeHolderImage from '../../../assets/about_us_assets/placeholder_img.jpg';
import peterImage from '../../../assets/about_us_assets/peter_prof_img2.jpg';
import kathrynImage from '../../../assets/about_us_assets/kathryn_prof_img2.jpg';
import donImage from '../../../assets/about_us_assets/don_prof_img2.jpg';
import rayImage from '../../../assets/about_us_assets/ray_prof_img2.jpg';
import lingImage from '../../../assets/about_us_assets/ling_prof_img2.jpg';

const teamData = [
  {
    id: 1,
    name: "Ling Wang",
    slug: "ling-wang",
    role: "Founder & CEO",
    image: lingImage,
    description: "Ling Wang is the founder and CEO of Brightway to Canada, a company dedicated to helping international students navigate the Canadian education system.",
    categories: ["founder", "advising"],
    hierarchyLevel: 1, // Add hierarchy level
    hierarchyCategory: "founders" // Add hierarchy category
  },
  {
    id: 2,
    name: "Jonathan Tang",
    slug: "jonathan-tang",
    role: "Technical Support",
    image: placeHolderImage,
    description: "Jonathan Tang.",
    categories: ["development", "design"],
    hierarchyLevel: 5,
    hierarchyCategory: "administration",
    extended_expertise: ["Video Editing", "Graphic Design"]
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
    extended_bio: ["Jay Zang is a tutor and designer at Brightway to Canada, wearing multiple hats to support students from every angle. With a Bachelor's degree in Astronomy and currently completing a Master's degree in Information Systems, he brings not only fresh, up-to-date academic knowledge but also a deep understanding of how students interact with and navigate learning materials.",
      "In tutoring sessions for math and science (from Grade 8 through 12), Jay focuses on tailoring to individual goals, whether it's improving a grade, preparing for an exam, or overcoming a specific hurdle. Because he also helps shape the company's website and artistic assets, he has a unique perspective on creating clear, engaging, and effective educational experiences.",
      "Outside of his dual role in tutoring and design, Jay is also a video/photo editing hobbyist."
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
    description: "Don Standing.",
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    extended_bio: ["Born and raised in Ottawa; BA (Hon) majoring in History from Queen's University (Kingston) 1979; B.Ed 1980 Queen's; M.Ed from University of Victoria 1990. Taught English, Social Studies and French at Revelstoke Secondary School (Revelstoke, BC) 1981-1989; taught English, Social Studies and French at Ballenas Secondary School (Parksville, BC) 1991-2016. English tutor 2017- present."],
    hierarchyLevel: 2,
    hierarchyCategory: "tutor_lang"
  },
  {
    id: 6,
    name: "Kathryn Collins",
    slug: "kathryn-collins",
    role: "Former English Teacher & Child Book Author",
    image: kathrynImage,
    description: ["Kathryn Ellis Collins is a dedicated tutor and mentor with over 30 years of teaching experience, from kindergarten to grade 12, including ESL. Holding a Master’s in Education, she fosters a genuine love for lifelong learning by blending English with visual art, teaching students to analyze literature and craft writing with an artist’s eye for detail and emotion.",
      " Her work is guided by the core belief that adapting to change is a skill we can all cultivate. This philosophy is alive in her tutoring and in her role as a published children’s author and illustrator. Her first book, A Rainy Day, tackles the theme of adapting to change—a principle she applies directly in her sessions. Kathryn’s students develop a stronger command of English, more vivid self-expression, and lasting skills for academic and creative success."
    ],
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    extended_bio: ["Kathryn Ellis Collins has been guiding students to discover the artistry of language and the power of their own written voice. With over 30 years of teaching experience—from kindergarten to grade 12, plus six years specializing in ESL—she possesses a deep and adaptive understanding of how learners build confidence with words.",
    "Holding a Master’s Degree in Education, Kathryn is more than a tutor; she is a mentor who focuses on why language moves us, not just how it functions. Her unique approach often blends English with visual art, sending students on a fine art journey that goes beyond blending texts. Through this creative synthesis, students learn to analyze literature with an artist's eye and craft writing with an illustrator's sense of detail, texture, and emotion.",
    "Kathryn is motivated by a core belief: while change is constant, our ability to adapt and create is a skill we can all cultivate. She understands that students are often overwhelmed by information. In response, she crafts a thoughtful learning environment that provides meaningful, engaging experiences and fosters a genuine love for lifelong learning.",
    "This philosophy is alive in her tutoring and in her work as a published children’s author and illustrator. In her first book, A Rainy Day, she tackles the theme of adapting to change—a principle she applies directly in her sessions. She guides students to see academic and creative challenges not as setbacks, but as opportunities to grow in confidence, self-awareness, and expressive ability.",
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
    description: "Ray Beraska.",
    categories: ["tutor_lang"],
    tutor_expertise: ["Language (ESL)"],
    hierarchyLevel: 2,
    hierarchyCategory: "tutor_lang"
  },
  {
    id: 8,
    name: "Qi Zhu",
    slug: "qi-zhu",
    role: "Content Creator & Marketing Advisor & Mandarin Instructor",
    image: placeHolderImage,
    description: "Qi Zhu.",
    categories: ["design", "tutor_lang"],
    tutor_expertise: ["Language (Mandarin)"],
    hierarchyLevel: 4,
    hierarchyCategory: "design",
    extended_expertise: ["Content Creation"]
  }
];

export default teamData;
