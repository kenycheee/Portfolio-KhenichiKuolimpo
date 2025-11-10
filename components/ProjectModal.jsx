/**
 * @fileoverview
 * This file defines the `ProjectsModal` component.
 * It displays a horizontally scrollable gallery of project cards, each containing
 * a preview image, short description, technology tags, and external links.
 * Users can click a project thumbnail to open a modal with more details
 * and an image carousel.
 *
 * Features:
 * - Smooth horizontal scroll with responsive design.
 * - Modal viewer with navigable image carousel.
 * - Navbar hides automatically when the modal is open.
 *
 * Built with Next.js, React hooks, Tailwind CSS, and Next/Image optimization.
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * The `ProjectsModal` component renders a portfolio showcase.
 *
 * Each project card presents a thumbnail, short description, and tech tags.
 * Clicking the thumbnail opens a modal displaying detailed project info and
 * a navigable image carousel.
 *
 * @returns {JSX.Element} A section containing the scrollable project list and modal viewer.
 */
export default function ProjectsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.display = isOpen ? 'none' : '';
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, []);

  const projects = [
    {
      title: 'Go-Badminton!',
      desc: `A modern web platform for badminton enthusiasts to easily book courts, manage schedules, and switch between Indonesian and English.`,
      detail: `Go-Badminton! makes it easy for players to reserve courts, check availability, and manage their game schedules effortlessly. With real-time updates, responsive design, and a built-in internationalization (i18n) system, users can switch between Indonesian (ID) and English (EN) seamlessly, ensuring a smooth experience for everyone.`,
      thumb: '/Assets/GB2.png',
      images: ['/Assets/GB1.png', '/Assets/GB2.png', '/Assets/GB3.png', '/Assets/GB4.png'],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      repo: 'https://github.com/BoviliusMeidi/go-badminton',
    },
    {
      title: 'Song Extractor',
      desc: `A clean, elegant app for exploring, viewing, and sharing classical music sheets and performances.`,
      detail: `Song Extractor is a classical music application that allows users to view digital music sheets, explore classical compositions, and share their own performances or posts. The app is designed with a clean and elegant interface to make discovering and studying classical music both accessible and inspiring.`,
      thumb: '/Assets/SE1.jpg',
      images: [
        '/Assets/SE1.jpg',
        '/Assets/SE2.jpg',
        '/Assets/SE3.jpg',
        '/Assets/SE4.jpg',
        '/Assets/SE5.jpg',
        '/Assets/SE6.jpg',
        '/Assets/SE7.jpg',
        '/Assets/SE8.jpg',
      ],
      tags: ['Figma', 'Flutter', 'Firebase'],
      repo: 'https://github.com/kenycheee/SongExtractor.git',
    },
    {
      title: 'PT. Hanica Sukses Makmur',
      desc: `A desktop system for monitoring production, stock, and error analysis in a plastic manufacturing company.`,
      detail: `This application is designed to record and monitor the stock of raw materials, roll fiber, plastic cups, and recycled products in real-time. The system also automatically calculates error rates between production processes, helping to minimize mistakes and improve material management efficiency.`,
      thumb: '/Assets/Project2.png',
      images: [
        '/Assets/Project1.png',
        '/Assets/Project2.png',
        '/Assets/Project3.png',
        '/Assets/Project4.png',
        '/Assets/Project5.png',
        '/Assets/Project6.png',
      ],
      tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'Electron', 'Figma'],
      repo: 'https://github.com/IGALAN9/Stockflow.git',
    },
    {
      title: 'PakanMoo',
      desc: `A friendly mobile UI design to help farmers manage cattle feeding schedules with ease.`,
      detail: `PakanMoo is a UI/UX design project for a mobile application that helps farmers efficiently manage cattle feeding schedules. The interface emphasizes simplicity and friendly visuals, featuring farm-themed elements such as barns, fences, and cows to create an engaging user experience.`,
      thumb: '/Assets/Pakanmoo.png',
      images: [
        '/Assets/Pakanmoo.png',
        '/Assets/Pakanmoo1.png',
        '/Assets/Pakanmoo2.png',
        '/Assets/Pakanmoo3.png',
        '/Assets/Pakanmoo4.png',
      ],
      tags: ['Figma'],
      repo: 'https://www.figma.com/proto/1fyFyWjSS6ydeYp1JyRqkf/Untitled?node-id=10-3&starting-point-node-id=1%3A5&t=w93SWpOyYyfwSvYT-1',
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setCurrentSlide(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const changeSlide = (n) => {
    if (!activeProject) return;
    const total = activeProject.images.length;
    setCurrentSlide((prev) => (prev + n + total) % total);
  };

  return (
    <section className="flex flex-col bg-white text-gray-900">
      <div className="px-0">
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex flex-row justify-start items-stretch gap-8 min-w-max ml-8 md:ml-20 lg:ml-28 mr-12 md:mr-24 lg:mr-32">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl w-[350px] h-auto flex flex-col justify-between transition-transform hover:scale-[1.03] border border-gray-200"
              >
                <div>
                  <div
                    className="overflow-hidden border border-gray-300 rounded-xl mb-4 cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <Image
                      src={project.thumb}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => window.open(activeProject.repo)}
                    className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                  >
                    Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isOpen && activeProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-8 rounded-2xl relative w-[90%] max-w-4xl shadow-2xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center">{activeProject.title}</h3>

            <div className="relative overflow-hidden rounded-xl mb-6">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Image
                  src={activeProject.images[currentSlide]}
                  alt="project image"
                  fill
                  className="object-contain transition-all"
                />
              </div>

              <button
                onClick={() => changeSlide(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 text-gray-800 px-3 py-1 rounded-full hover:bg-white"
              >
                &#10094;
              </button>
              <button
                onClick={() => changeSlide(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 text-gray-800 px-3 py-1 rounded-full hover:bg-white"
              >
                &#10095;
              </button>
            </div>

            <p className="text-gray-700 whitespace-pre-line mb-6">
              {activeProject.detail}
            </p>

            <div className="flex justify-center">
              <a
                href={activeProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
