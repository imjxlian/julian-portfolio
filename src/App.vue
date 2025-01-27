<script setup lang="ts">
import ExperienceItem from "./components/ExperienceItem.vue";
import ProjectCard from "./components/ProjectCard.vue";
import SkillItem from "./components/SkillItem.vue";
import TestimonyItem from "./components/TestimonyItem.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
    <main
        class="min-h-screen flex flex-col space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6 antialised font-sans"
    >
        <section id="heading">
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
                                hover="true"
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
                                hover="true"
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
                                hover="true"
                                animation="wrench"
                            />
                        </a>
                    </div>
                </div>
                <div class="group">
                    <span
                        class="relative flex shrink-0 overflow-hidden rounded-full size-32 border"
                    >
                        <img
                            src="/assets/memoji-julian.jpg"
                            alt="Julian Forme"
                            class="aspect-square w-full h-full transition-all duration-200 [transform-style:preserve-3d] group-hover:scale-x-[-1]"
                        />
                    </span>
                </div>
            </div>
        </section>
        <section id="about">
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
        <section id="experience">
            <div class="flex flex-col gap-y-3">
                <h2 class="text-xl font-bold">Professional experience</h2>
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
        <section id="education">
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
        <section id="languages">
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
        <section id="skills">
            <div class="flex flex-col gap-y-3">
                <h2 class="text-xl font-bold">Technical skills</h2>
                <div class="flex flex-wrap gap-1">
                    <SkillItem skill="React Native" />
                    <SkillItem skill="React" />
                    <SkillItem skill="Angular" />
                    <SkillItem skill="Node.js" />
                    <SkillItem skill="Vue.js" />
                    <SkillItem skill="AdonisJS" />
                    <SkillItem skill="Spring" />
                    <SkillItem skill="Spring Boot" />
                    <SkillItem skill="Symfony" />
                    <SkillItem skill="Javascript" />
                    <SkillItem skill="Typescript" />
                    <SkillItem skill="HTML5" />
                    <SkillItem skill="CSS3" />
                    <SkillItem skill="PHP" />
                    <SkillItem skill="Java" />
                    <SkillItem skill="C" />
                    <SkillItem skill="Bash" />
                    <SkillItem skill="Python" />
                    <SkillItem skill="Solidity" />
                    <SkillItem skill="MySQL" />
                    <SkillItem skill="MongoDB" />
                    <SkillItem skill="PostgreSQL" />
                    <SkillItem skill="MariaDB" />
                    <SkillItem skill="Git" />
                    <SkillItem skill="GitLab CI/CD" />
                    <SkillItem skill="Docker" />
                    <SkillItem skill="WordPress" />
                    <SkillItem skill="Swagger" />
                </div>
                <span class="text-neutral-500 text-xs"
                    >and more to come...</span
                >
            </div>
        </section>
        <section id="projects">
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
                        description="Design, development, and maintenance of a mobile app for booking reservations at bars and nightclubs, offering users exclusive deals. This project was created with friends to enhance the nightlife experience by simplifying the booking process."
                        imageSrc="/assets/nightpass.jpg"
                        imageAlt="NightPass"
                        projectHref="https://github.com/imjxlian/night-pass-app"
                        :technologies="[
                            'React Native',
                            'AdonisJS',
                            'PostgreSQL',
                            'TailwindCSS',
                            'Expo',
                            'Typescript',
                        ]"
                        :socialLinks="[
                            {
                                href: 'https://github.com/imjxlian/night-pass-app',
                                text: 'GitHub',
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
        <section id="testimonials">
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
                </div>
            </div>
        </section>
        <section id="contact">
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
        <SpeedInsights />
        <Analytics />
    </main>
</template>

<style scoped></style>
