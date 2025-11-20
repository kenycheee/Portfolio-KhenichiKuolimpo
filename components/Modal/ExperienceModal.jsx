/**
 * @fileoverview
 * This file defines the `ProjectsModal` component.
 * It displays a horizontally scrollable gallery of experience cards, each containing
 * a preview image, short description, and external links.
 * Users can click an experience thumbnail to open a modal with more details
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

export default function ProjectsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.display = isOpen ? 'none' : '';
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, []);

  const experiences = [
    {
      title: 'PT. Perfect Companion Indonesia (PCG) — IIPE 2025',
      desc: `Sales Representative & Booth Attendant — Promoted Me-O and SmartHeart products at the IIPE 2025 event.`,
      detail: `Represented PT. Perfect Companion Indonesia during the IIPE 2025 event, promoting Me-O and SmartHeart products. Served as a sales representative and booth attendant, engaging visitors through interactive games and product demonstrations to enhance brand awareness and customer experience.`,
      thumb: '/assets/meo.jpg',
      images: ['/assets/meo.jpg'],
    },
    {
      title: 'PT. Madusari Nusaperdana (Kimbo) — PRJ 2025',
      desc: `PRJ Team Leader (2025) — Supervised team performance and event execution.`,
      detail: `Promoted to Team Leader for Kimbo’s participation in PRJ 2025. Managed daily team schedules, ensured smooth booth operations, and maintained high engagement with visitors through promotional activities and games, strengthening leadership and organizational skills.`,
      thumb: '/assets/PRJ 2025.jpeg',
      images: ['/assets/PRJ 2025.jpeg'],
    },
    {
      title: 'PT. Madusari Nusaperdana (Kimbo) — PRJ 2024',
      desc: `PRJ Senior Team Member (2024) — Assisted in booth management and coordination.`,
      detail: `Returned to the Jakarta Fair (PRJ) 2024 as a senior team member, taking on a more active role in organizing booth operations and coordinating with the event management team. Enhanced leadership, adaptability, and customer engagement strategies.`,
      thumb: '/assets/PRJ 2024.jpeg',
      images: ['/assets/PRJ 2024.jpeg'],
    },
    {
      title: 'PT. Madusari Nusaperdana (Kimbo) — PRJ 2023',
      desc: `PRJ Team Member (2023) — Supported brand promotion and product sampling.`,
      detail: `Participated in the Jakarta Fair (PRJ) 2023 as part of the Kimbo promotional team. Engaged visitors through live demonstrations, assisted with sampling activities, and supported brand awareness efforts while developing strong teamwork and communication skills.`,
      thumb: '/assets/PRJ 2023.jpeg',
      images: ['/assets/PRJ 2023.jpeg'],
    },
  ];

  const openModal = (exp) => {
    setActiveExperience(exp);
    setCurrentSlide(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const changeSlide = (n) => {
    if (!activeExperience) return;
    const total = activeExperience.images.length;
    setCurrentSlide((prev) => (prev + n + total) % total);
  };

  return (
    <section className="flex flex-col bg-white text-gray-900">
      <div className="px-0">
        <div ref={scrollRef} className="w-full pb-6 md:overflow-x-auto overflow-x-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex flex-col gap-6 px-6 md:flex md:flex-row md:gap-8 md:min-w-max md:px-0 md:ml-20 md:mr-24 lg:ml-28 lg:mr-32">
            {experiences.map((experience, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl w-[350px] h-auto flex flex-col justify-between transition-transform hover:scale-[1.03] border border-gray-200"
              >
                <div>
                  <div
                    className="overflow-hidden border border-gray-300 rounded-xl mb-4 cursor-pointer"
                    onClick={() => openModal(experience)}
                  >
                    <Image
                      src={experience.thumb}
                      alt={experience.title}
                      width={400}
                      height={250}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{experience.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{experience.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isOpen && activeExperience && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-8 rounded-2xl relative w-[90%] max-w-4xl shadow-2xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center">{activeExperience.title}</h3>

            <div className="relative overflow-hidden rounded-xl mb-6">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Image
                  src={activeExperience.images[currentSlide]}
                  alt="experience image"
                  fill
                  className="object-contain transition-all"
                />
              </div>

              {activeExperience.images.length > 1 && (
                <>
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
                </>
              )}
            </div>

            <p className="text-gray-700 whitespace-pre-line mb-6">
              {activeExperience.detail}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
