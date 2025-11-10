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

  // scroll always start at left
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  const projects = [
    {
      title: 'Go-Badminton!',
      desc: `Go-Badminton! is a modern web platform for badminton enthusiasts that makes booking and managing courts effortless. With a clean and intuitive interface, users can view real-time schedules, check court availability, and make instant reservations with ease. It also features a complete internationalization (i18n) system, allowing users to seamlessly switch between Indonesian (ID) and English (EN) for a more inclusive and accessible experience.`,
      detail: `Go-Badminton! makes it easy for players to reserve courts, check availability, and manage their game schedules effortlessly. With real-time updates, responsive design, and a built-in internationalization (i18n) system, users can switch between Indonesian (ID) and English (EN) seamlessly, ensuring a smooth experience for everyone.`,
      thumb: '/Assets/GB2.png',
      images: [
        '/Assets/GB1.png', '/Assets/GB2.png', '/Assets/GB3.png',
        '/Assets/GB4.png'
      ],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      repo: 'https://github.com/BoviliusMeidi/go-badminton',
    },
    {
      title: 'Song Extractor - Classical Music Sharing and Sheet Viewer App',
      desc: `Song Extractor is a music-focused application designed for classical music enthusiasts. It allows users to browse, view, and share music sheets while also enabling them to post their own compositions or performances. The app combines a clean, elegant interface with features that support musicians in studying, practicing, and connecting through classical music content.`,
      detail: `Song Extractor is a classical music application that allows users to view digital music sheets, explore classical compositions, and share their own performances or posts. The app is designed with a clean and elegant interface to make discovering and studying classical music both accessible and inspiring.`,
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
      desc: `This application is built to record and monitor the company’s production and stock activities in real time. It tracks the quantities of raw materials, roll fiber, plastic cups, and recycled products, ensuring transparent and efficient inventory management. The system also includes automated error-rate analysis between production stages to help reduce material waste and improve operational accuracy.`,
      detail: `This application is designed to record and monitor the stock of raw materials, roll fiber, plastic cups, and recycled products in real-time. The system also automatically calculates error rates between production processes, helping to minimize mistakes and improve material management efficiency.`,
      thumb: '/Assets/Project2.png',
      images: [
        '/Assets/Project1.png', '/Assets/Project2.png', '/Assets/Project3.png',
        '/Assets/Project4.png', '/Assets/Project5.png', '/Assets/Project6.png',
      ],
      tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'Electron', 'Figma'],
      repo: 'https://github.com/IGALAN9/Stockflow.git',
    },
    {
      title: 'PakanMoo',
      desc: `PakanMoo is a mobile application concept designed to help farmers efficiently manage cattle feeding and nutrition schedules. It simplifies the process of tracking feed portions, feeding times, and livestock health through an intuitive and visually engaging interface. The UI/UX design emphasizes clarity, warmth, and accessibility — combining friendly farm-inspired visuals with functional layouts to make daily management tasks easier and more enjoyable for users.`,
      detail: `PakanMoo is a UI/UX design project for a mobile application that helps farmers efficiently manage cattle feeding schedules. The interface emphasizes simplicity and friendly visuals, featuring farm-themed elements such as barns, fences, and cows to create an engaging user experience. The design focuses on clarity and usability, making it easy for users to monitor feed portions, feeding times, and livestock conditions.`,
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
    <section className="flex flex-col bg-white text-gray-900">
      {/* Hilangkan padding kanan-kiri yang bikin offset */}
      <div className="px-0 md:px-0 lg:px-0">
        {/* Scroll container rata kiri */}
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
                  <div className="overflow-hidden border border-gray-300 rounded-xl mb-4">
                    <Image
                      src={project.thumb}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.desc}</p>

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
                    Detail
                  </button>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition"
                  >
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
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
