<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import ExperienceItem from "./components/ExperienceItem.vue";
import ProjectCard from "./components/ProjectCard.vue";
import SkillItem from "./components/SkillItem.vue";
import TestimonyItem from "./components/TestimonyItem.vue";

import { computed, onMounted, ref } from "vue";
import EmojiEffect from "./components/EmojiEffect.vue";

const showEmojis = ref(false);
const scrollProgress = ref(0);

const triggerAnimation = () => {
    if (!showEmojis.value) {
        showEmojis.value = true;
        setTimeout(() => (showEmojis.value = false), 6000);
    }
};

const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.value = scrollPercent;
};

const searchedSkill = ref("");

const skills = [
    "React Native",
    "React",
    "Angular",
    "Node.js",
    "Vue.js",
    "AdonisJS",
    "Spring",
    "Spring Boot",
    "Symfony",
    "Javascript",
    "Typescript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
    "PHP",
    "Java",
    "C",
    "Bash",
    "Python",
    "Solidity",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "MariaDB",
    "Git",
    "GitLab CI/CD",
    "Docker",
    "WordPress",
    "Elementor",
    "Swagger",
    "n8n",
    "Zend Framework 2",
    "Laminas",
    "Web3.js",
    "Socket.io",
    "Prisma",
    "Express",
    "Vite",
];

const filteredSkills = computed(() => {
    return skills.filter((skill) =>
        skill.toLowerCase().includes(searchedSkill.value.toLowerCase())
    );
});

onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((section) => {
        observer.observe(section);
    });

    window.addEventListener("scroll", updateScrollProgress);

    window.addEventListener(
        "scroll",
        () => {
            document.body.setAttribute("data-scrolled", "true");
        },
        { once: true }
    );
});
</script>

<template>
    <SpeedInsights />
    <Analytics />
    <EmojiEffect :isActive="showEmojis" />
    <div class="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div
            class="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 transition-all duration-150 ease-out"
            :style="{
                width: '100%',
                clipPath: `inset(0 ${100 - scrollProgress}% 0 0)`,
            }"
        ></div>
    </div>
    <main
        class="min-h-screen flex flex-col space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6 antialised font-sans"
    >
        <section id="heading" class="fade-in-section">
            <div class="flex flex-row gap-2 justify-between">
                <div
                    class="flex flex-col flex-1 items-start justify-start space-y-1.5"
                >
                    <span
                        class="inline-block text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                        >Julian Forme</span
                    >
                    <span class="inline-block md:text-xl"
                        >Software engineer & project manager.</span
                    >
                    <div class="flex flex-row gap-2 justify-between">
                        <a
                            href="https://www.linkedin.com/in/julianforme/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-icon
                                name="co-linkedin-in"
                                fill="#000"
                                scale="1.5"
                                :hover="true"
                                animation="wrench"
                            />
                        </a>
                        <a
                            href="https://github.com/imjxlian/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-icon
                                name="bi-github"
                                fill="#000"
                                scale="1.5"
                                :hover="true"
                                animation="wrench"
                            />
                        </a>
                        <a
                            href="https://www.root-me.org/imjxlian?lang=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-icon
                                name="gi-skull-crack"
                                fill="#000"
                                scale="1.5"
                                :hover="true"
                                animation="wrench"
                            />
                        </a>
                    </div>
                </div>
                <div class="group" @mouseenter="triggerAnimation">
                    <span
                        class="relative flex shrink-0 overflow-hidden rounded-full size-32 border"
                    >
                        <img
                            src="/assets/memoji-julian.jpg"
                            alt="Julian Forme"
                            class="aspect-square w-full h-full transition-all duration-200 transform group-hover:scale-x-[-1]"
                        />
                    </span>
                </div>
            </div>
            <div class="flex flex-row items-center justify-start mt-4 gap-2">
                <div class="relative">
                    <div class="h-3 w-3 bg-green-500 rounded-full"></div>
                    <div
                        class="absolute inset-0 h-3 w-3 bg-green-500 rounded-full animate-ping"
                    ></div>
                </div>
                <span class="text-md font-medium"
                    >Open to new opportunities for September 2025</span
                >
            </div>
        </section>
        <section id="about" class="fade-in-section">
            <div class="flex flex-col">
                <h2 class="text-xl font-bold">About me</h2>
                <div
                    class="prose max-w-full text-pretty font-sans text-sm text-neutral-500 dark:prose-invert"
                >
                    <p>
                        I'm a software engineer and project manager with a
                        passion for creating and managing digital products. I
                        have a strong background in web development, and I'm
                        always looking for new challenges and opportunities to
                        learn.
                    </p>
                </div>
            </div>
        </section>
        <section id="experience" class="fade-in-section">
            <div class="flex flex-col gap-y-3">
                <h2 class="text-xl font-bold">Professional experience</h2>
                <ExperienceItem
                    href="https://nightpass.fr"
                    logoSrc="/assets/nightpass-logo.png"
                    companyName="NightPass"
                    period="2024 - Now"
                    role="Freelance/Volunteer • Software engineer"
                />
                <ExperienceItem
                    href="https://orange.com"
                    logoSrc="/assets/orange.png"
                    companyName="Orange DTSI/SI"
                    period="2022 - Now"
                    role="Intern • Apprenticeship • Software engineer"
                />
                <ExperienceItem
                    href="https://sejours-linguistiques-volontariat.fr/mission-volontariat/fr/"
                    logoSrc="/assets/svi.png"
                    companyName="International Volunteer Service (Belgium)"
                    period="2023"
                    role="Intern • Full-stack developer"
                />
            </div>
        </section>
        <section id="education" class="fade-in-section">
            <div class="flex flex-col gap-y-3">
                <h2 class="text-xl font-bold">Education</h2>
                <ExperienceItem
                    href="https://enseirb-matmeca.bordeaux-inp.fr/fr"
                    logoSrc="/assets/enseirb.jpeg"
                    companyName="ENSEIRB-MATMECA"
                    period="2022 - Now"
                    role="Master’s Degree in Network and Computer Engineering"
                />
                <ExperienceItem
                    href="https://www.iut.u-bordeaux.fr/info/"
                    logoSrc="/assets/iut.jpg"
                    companyName="Computer Science UIT"
                    period="2020 - 2022"
                    role="Two-year University Degree in Computer Science (3rd/70)"
                />
                <ExperienceItem
                    href="http://www.citescolaireriberac.com/"
                    logoSrc="/assets/lycee.jpg"
                    companyName="Arnaud Daniel High School"
                    period="2017 - 2020"
                    role="Scientific Baccalaureate with honors"
                />
            </div>
        </section>
        <section id="languages" class="fade-in-section">
            <div class="flex flex-col gap-y-3">
                <h2 class="text-xl font-bold">Languages</h2>
                <ExperienceItem
                    href="https://en.wikipedia.org/wiki/English_language"
                    logoSrc="/assets/english.jpg"
                    companyName="English"
                    period="C1 level"
                />
                <ExperienceItem
                    href="https://en.wikipedia.org/wiki/Spanish_language"
                    logoSrc="/assets/spain.jpg"
                    companyName="Spanish"
                    period="B1 level"
                />
            </div>
        </section>
        <section id="skills" class="fade-in-section">
            <div class="flex flex-col gap-y-3">
                <div class="flex flex-row justify-between items-center">
                    <h2 class="text-xl font-bold">Technical skills</h2>
                    <input
                        type="text"
                        v-model="searchedSkill"
                        class="w-1/3 px-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent"
                        placeholder="Search for a skill"
                    />
                </div>
                <div class="flex flex-wrap gap-1">
                    <SkillItem
                        v-for="skill in filteredSkills"
                        :key="skill"
                        :skill="skill"
                    />
                </div>
                <span class="text-neutral-500 text-xs"
                    >and more to come...</span
                >
            </div>
        </section>
        <section id="projects" class="fade-in-section">
            <div class="space-y-12 w-full py-12">
                <div
                    class="flex flex-col items-center justify-center space-y-2 text-center"
                >
                    <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                        Check out my latest work
                    </h2>
                    <p
                        class="text-neutral-500 text-base md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed"
                    >
                        I was able to work on a variety of projects during my
                        studies and in my free time. Here are some examples of
                        projects I have worked on.
                    </p>
                </div>
                <div
                    class="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto"
                >
                    <ProjectCard
                        title="NightPass"
                        period="August 2024 - Now"
                        description="I fully developed the website for the project and designed the mobile application. I also closely follow the project with the developers to ensure its smooth progress and alignment with the initial vision."
                        imageSrc="/assets/nightpass.jpg"
                        imageAlt="NightPass"
                        projectHref="https://download.nightpass.fr"
                        :technologies="[
                            'React Native',
                            'AdonisJS',
                            'PostgreSQL',
                            'TailwindCSS',
                            'Expo',
                            'Typescript',
                            'Elementor',
                            'WordPress',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://download.nightpass.fr',
                                text: 'App',
                            },
                            {
                                href: 'https://nightpass.fr',
                                text: 'Website',
                            },
                        ]"
                        :badge-text="'NEW'"
                    />
                    <ProjectCard
                        title="StrikEth"
                        period="Developed in a week (2025) - Vibe coding"
                        description="Fully developed an interactive online roulette website for fun and experience, integrating blockchain for enhanced transparency and security. Led the web design and closely followed development to ensure alignment with the initial vision."
                        imageSrc="/assets/striketh.jpg"
                        imageAlt="StrikEth"
                        projectHref="https://striketh.com"
                        :technologies="[
                            'React',
                            'Typescript',
                            'PostgreSQL',
                            'TailwindCSS',
                            'Express',
                            'Socket.io',
                            'Web3.js',
                            'Prisma',
                            'Docker',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://striketh.com',
                                text: 'Website',
                            },
                        ]"
                    />
                    <ProjectCard
                        title="Portfolio"
                        period="January 2025"
                        description="Presenting my portfolio on my portfolio? Yes! It’s a fun and clean project that showcases what I can do. Built entirely with Vue 3 and Vite on the frontend, styled with TailwindCSS, and enriched with smooth animations."
                        imageSrc="/assets/portfolio.jpg"
                        imageAlt="Portfolio Julian"
                        projectHref="https://jxlian.cloud"
                        :technologies="[
                            'Vue.js',
                            'Vite',
                            'Typescript',
                            'TailwindCSS',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://jxlian.cloud',
                                text: 'Website',
                            },
                        ]"
                    />
                    <ProjectCard
                        title="Stak'Eirb"
                        period="October 2023 - December 2023"
                        description="Designed and developed a web application that replicates an online casino platform, working closely with a classmate as part of a school project. The project involved implementing key features such as user registration, games simulation, and interactive interfaces to provide an engaging user experience."
                        imageSrc="/assets/stakeirb.jpg"
                        imageAlt="Stakeirb"
                        projectHref="https://github.com/imjxlian/stakeirb"
                        :technologies="[
                            'Node.js',
                            'Vue.js',
                            'Socket.io',
                            'Express',
                            'SQLite',
                            'Javascript',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://github.com/imjxlian/stakeirb',
                                text: 'GitHub',
                            },
                        ]"
                    />
                    <ProjectCard
                        title="IP Locator"
                        period="April 2024"
                        description="Developed a web application that pinpoints the geographic location of an IP address. Built using JavaScript and several key dependencies, this tool provides users with accurate location data while integrating APIs to enhance its functionality."
                        imageSrc="/assets/iplocator.jpg"
                        imageAlt="IP Locator"
                        projectHref="https://github.com/imjxlian/ip-locator"
                        :technologies="[
                            'Node.js',
                            'Vue.js',
                            'Express',
                            'MongoDB',
                            'Swagger',
                            'Javascript',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://github.com/imjxlian/ip-locator',
                                text: 'GitHub',
                            },
                        ]"
                    />
                    <ProjectCard
                        title="SuperSeries"
                        period="December 2021 - January 2022"
                        description="Designed and developed a web application for streaming series, similar to Netflix. This project was completed in collaboration with a classmate during my Computer Science degree program. Our goal was to create a user-friendly platform that allows users to browse, search, and watch a variety of series, showcasing our skills in web development and teamwork."
                        imageSrc="/assets/superseries.jpg"
                        imageAlt="SuperSeries"
                        projectHref="https://github.com/imjxlian/SuperSeries"
                        :technologies="[
                            'PHP',
                            'Symfony',
                            'MySQL',
                            'PhpMyAdmin',
                            'Doctrine',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://github.com/imjxlian/SuperSeries/',
                                text: 'GitHub',
                            },
                        ]"
                    />
                </div>
            </div>
        </section>
        <section id="testimonials" class="fade-in-section">
            <div class="space-y-12 w-full pb-12">
                <div
                    class="flex flex-col items-center justify-center space-y-2 text-center"
                >
                    <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                        What people say about me
                    </h2>
                </div>
                <div
                    class="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto"
                >
                    <TestimonyItem
                        testimony="Julian is an exceptionally talented developer and a great friend. We've worked on many projects together, and he's always willing to go the extra mile to get the job done. His positive attitude and collaborative spirit make him a valuable team member in any project."
                        :starCount="5"
                        author="Jules Royet"
                        role="Classmate & Colleague"
                    />
                    <TestimonyItem
                        testimony="Working with Julian is a real pleasure. He is a quick learner and a highly talented developer with a true engineering mindset. Always ready to help and share his knowledge, he brings great value to any team. I highly recommend him for any project."
                        :starCount="5"
                        author="Anonymous"
                        role="Orange Colleague"
                    />
                </div>
            </div>
        </section>
        <section id="contact" class="fade-in-section">
            <div class="space-y-12 w-full pb-12">
                <div
                    class="flex flex-col items-center justify-center space-y-2 text-center"
                >
                    <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                        Get in touch
                    </h2>
                    <p
                        class="text-neutral-500 text-base md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed"
                    >
                        If you have any questions or would like to work
                        together, feel free to reach out to me on
                        <a
                            href="https://www.linkedin.com/in/julianforme/"
                            class="text-slate-950 hover:underline font-medium"
                            >LinkedIn</a
                        >
                        or via
                        <a
                            href="mailto:jforme.pro@gmail.com"
                            class="text-slate-950 hover:underline font-medium"
                            >E-mail</a
                        >.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Délais uniquement pour le chargement initial */
@media (prefers-reduced-motion: no-preference) {
    body:not([data-scrolled]) {
        #heading.fade-in-section.is-visible {
            transition-delay: 0s;
        }
        #about.fade-in-section.is-visible {
            transition-delay: 0.2s;
        }
        #experience.fade-in-section.is-visible {
            transition-delay: 0.4s;
        }
        #education.fade-in-section.is-visible {
            transition-delay: 0.6s;
        }
        #languages.fade-in-section.is-visible {
            transition-delay: 0.8s;
        }
        #skills.fade-in-section.is-visible {
            transition-delay: 1s;
        }
        #projects.fade-in-section.is-visible {
            transition-delay: 1.2s;
        }
        #testimonials.fade-in-section.is-visible {
            transition-delay: 1.4s;
        }
        #contact.fade-in-section.is-visible {
            transition-delay: 1.6s;
        }
    }
}
</style>
