'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProjectsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.display = isOpen ? 'none' : '';
  }, [isOpen]);

  const projects = [
    {
      title: 'SongExtractor',
      desc: `A music-focused app for classical music lovers — browse, view, and share sheet music and performances.`,
      detail: `Song Extractor allows users to explore digital classical music sheets, discover timeless compositions, 
      and share their own performances. Designed with a clean, elegant interface to make studying music simple and inspiring.`,
      thumb: '/Assets/SE1.jpg',
      images: [
        '/Assets/SE1.jpg', '/Assets/SE2.jpg', '/Assets/SE3.jpg',
        '/Assets/SE4.jpg', '/Assets/SE5.jpg', '/Assets/SE6.jpg',
        '/Assets/SE7.jpg', '/Assets/SE8.jpg'
      ],
      tags: ['Figma', 'Flutter', 'Firebase'],
      repo: 'https://github.com/kenycheee/SongExtractor.git',
    },
    {
      title: 'PT. Hanica Sukses Makmur',
      desc: `A real-time monitoring system for production and stock management.`,
      detail: `This application records and monitors the stock of raw materials, roll fiber, plastic cups, 
      and recycled products in real-time. It automatically calculates error rates between production processes 
      to minimize mistakes and improve material management efficiency.`,
      thumb: '/Assets/Project1.png',
      images: [
        '/Assets/Project1.png', '/Assets/Project2.png', '/Assets/Project3.png',
        '/Assets/Project4.png', '/Assets/Project5.png', '/Assets/Project6.png',
      ],
      tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'Electron'],
      repo: 'https://github.com/IGALAN9/Stockflow.git',
    },
    {
      title: 'PakanMoo',
      desc: `A mobile app concept for managing cattle feeding schedules and nutrition.`,
      detail: `PakanMoo is a UI/UX mobile app concept designed to help farmers manage cattle feeding efficiently. 
      It uses a clean, farm-inspired design to create a simple and friendly experience for users.`,
      thumb: '/Assets/Pakanmoo.png',
      images: [
        '/Assets/Pakanmoo.png', '/Assets/Pakanmoo1.png', '/Assets/Pakanmoo2.png',
        '/Assets/Pakanmoo3.png', '/Assets/Pakanmoo4.png',
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
    <section className="flex flex-col min-h-screen bg-white text-gray-900 py-28">
      {/* Bungkus biar padding tetap stabil */}
      <div className="pl-8 md:pl-20 lg:pl-28 pr-6">
        {/* Kontainer proyek scrollable */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <div className="flex flex-row gap-8 min-w-max">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl w-[350px] h-[480px] flex flex-col justify-between transition-transform hover:scale-[1.03] border border-gray-200"
              >
                <div>
                  <div className="overflow-hidden rounded-xl mb-4">
                    <Image
                      src={project.thumb}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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

                <div className="flex gap-3 mt-6 justify-end">
                  <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                  >
                    View
                  </button>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition"
                  >
                    Repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && activeProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-8 rounded-2xl relative w-[90%] max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto">
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

            <p className="text-gray-700 whitespace-pre-line">{activeProject.detail}</p>
          </div>
        </div>
      )}
    </section>
  );
}
