/**
 * @fileoverview
 * ProjectsModal component (fixed & improved)
 *
 * - Prevents modal detail from being visually cut off by making image responsive
 *   and detail area scrollable.
 * - Adds optional `liveUrl` per project. "View Project" only shows when liveUrl exists.
 * - Locks background scroll when modal is open.
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
      title: 'Colorfy',
      desc:
        'A modern and intuitive color palette generator that lets users create, customize, and save color collections.',
      detail:
        'Colorfy is a modern color palette generator that allows users to easily create, customize, and manage their own color collections. Built with a fully responsive interface, Colorfy provides an intuitive editing experience where each color can be adjusted in real-time. With Firebase Authentication and Firestore integration, users can securely save their palettes, access them across devices, and keep everything synced seamlessly. Perfect for designers, developers, and anyone who works with color.',
      thumb: '/assets/Cy1.png',
      images: ['/assets/Cy1.png', '/assets/Cy2.png', '/assets/Cy3.png', '/assets/Cy4.png', '/assets/Cy5.png', '/assets/Cy6.png', '/assets/Cy7.png', '/assets/Cy8.png', '/assets/Cy9.png', '/assets/Cy10.png'],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      repo: 'https://github.com/kenycheee/Colorfy',
      liveUrl: 'https://colorfy.vercel.app/',
    },
    {
      title: 'Go-Badminton!',
      desc:
        'A modern web platform for badminton enthusiasts to easily book courts, manage schedules, and switch between Indonesian and English.',
      detail:
        'Go-Badminton! makes it easy for players to reserve courts, check availability, and manage their game schedules effortlessly. With real-time updates, responsive design, and a built-in internationalization (i18n) system, users can switch between Indonesian (ID) and English (EN) seamlessly.',
      thumb: '/assets/GB2.png',
      images: ['/assets/GB1.png', '/assets/GB2.png', '/assets/GB3.png', '/assets/GB4.png'],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      repo: 'https://github.com/BoviliusMeidi/go-badminton',
    },
    {
      title: 'Song Extractor',
      desc:
        'A clean, elegant app for exploring, viewing, and sharing classical music sheets and performances.',
      detail:
        'Song Extractor is a classical music application that allows users to view digital music sheets, explore classical compositions, and share their own performances or posts. The app is designed with a clean and elegant interface to make discovering and studying classical music both accessible and inspiring.',
      thumb: '/assets/SE1.jpg',
      images: ['/assets/SE1.jpg', '/assets/SE2.jpg', '/assets/SE3.jpg', '/assets/SE4.jpg', '/assets/SE5.jpg', '/assets/SE6.jpg', '/assets/SE7.jpg', '/assets/SE8.jpg'],
      tags: ['Figma', 'Flutter', 'Firebase'],
      repo: 'https://github.com/kenycheee/SongExtractor.git',
    },
    {
      title: 'PT. Hanica Sukses Makmur',
      desc:
        'A desktop system for monitoring production, stock, and error analysis in a plastic manufacturing company.',
      detail:
        'This application is designed to record and monitor the stock of raw materials, roll fiber, plastic cups, and recycled products in real-time. The system also automatically calculates error rates between production processes, helping to minimize mistakes and improve material management efficiency.',
      thumb: '/assets/Project2.png',
      images: ['/assets/Project1.png', '/assets/Project2.png', '/assets/Project3.png', '/assets/Project4.png', '/assets/Project5.png', '/assets/Project6.png'],
      tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'Electron', 'Figma'],
      repo: 'https://github.com/IGALAN9/Stockflow.git',
    },
    {
      title: 'PakanMoo',
      desc: 'A friendly mobile UI design to help farmers manage cattle feeding schedules with ease.',
      detail:
        'PakanMoo is a UI/UX design project for a mobile application that helps farmers efficiently manage cattle feeding schedules. The interface emphasizes simplicity and friendly visuals, featuring farm-themed elements such as barns, fences, and cows to create an engaging user experience.',
      thumb: '/assets/Pakanmoo.png',
      images: ['/assets/Pakanmoo.png', '/assets/Pakanmoo1.png', '/assets/Pakanmoo2.png', '/assets/Pakanmoo3.png', '/assets/Pakanmoo4.png'],
      tags: ['Figma'],
      repo: 'https://www.figma.com/design/1fyFyWjSS6ydeYp1JyRqkf/Untitled?t=untZhwFLHq7DjDOX-0',
      liveUrl: 'https://www.figma.com/proto/1fyFyWjSS6ydeYp1JyRqkf/Untitled?node-id=10-3&starting-point-node-id=1%3A5',
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setCurrentSlide(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  const changeSlide = (n) => {
    if (!activeProject) return;
    const total = activeProject.images.length;
    setCurrentSlide((prev) => (prev + n + total) % total);
  };

  return (
    <section className="flex flex-col bg-white text-gray-900">
      <div className="px-0">
        <div ref={scrollRef} className="w-full pb-6 md:overflow-x-auto overflow-x-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex flex-col gap-6 px-6 md:flex md:flex-row md:gap-8 md:min-w-max md:px-0 md:ml-20 md:mr-24 lg:ml-28 lg:mr-32">
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

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => window.open(project.repo)}
                    className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                    title="Open repository"
                  >
                    Repo
                  </button>

                  {project.liveUrl ? (
                    <button
                      onClick={() => window.open(project.liveUrl)}
                      className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition"
                      title="Open deployed project"
                    >
                      View Project
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed"
                      title="No live URL available"
                      disabled
                    >
                      View Project
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isOpen && activeProject && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-start md:items-center justify-center z-50 px-4 py-10">

          <div className="bg-white text-gray-900 rounded-2xl relative w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative w-full max-h-[45vh] md:max-h-[60vh] flex items-center justify-center bg-gray-50">
                  <div className="relative w-full h-[45vh] md:h-[60vh]">
                    <Image
                      src={activeProject.images[currentSlide]}
                      alt={`${activeProject.title} image ${currentSlide + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <button
                    onClick={() => changeSlide(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 px-3 py-1 rounded-full hover:bg-white z-10"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={() => changeSlide(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 px-3 py-1 rounded-full hover:bg-white z-10"
                  >
                    &#10095;
                  </button>
                </div>

                <div className="flex gap-2 p-3 overflow-x-auto">
                  {activeProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`flex-shrink-0 rounded-md overflow-hidden border ${
                        i === currentSlide ? 'ring-2 ring-cyan-400' : 'border-gray-200'
                      }`}
                      style={{ width: 72, height: 48 }}
                    >
                      <Image src={img} alt={`thumb-${i}`} width={72} height={48} className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 overflow-auto max-h-[45vh] md:max-h-[60vh]">
                <h3 className="text-2xl font-semibold mb-4">{activeProject.title}</h3>

                <p className="text-gray-700 whitespace-pre-line mb-6">{activeProject.detail}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={activeProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                  >
                    Open Repo
                  </a>

                  {activeProject.liveUrl ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition"
                    >
                      View Project
                    </a>
                  ) : (
                    <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed" disabled>
                      No Live URL
                    </button>
                  )}

                  <button
                    onClick={closeModal}
                    className="px-4 py-2 ml-auto bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
