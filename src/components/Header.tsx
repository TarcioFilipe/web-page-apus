'use client'

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import '@/styles/header.css';
import { useModal } from '@/context/ModalContext';

export default function Header() {
  const { openModal } = useModal();
  const pathname = usePathname();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { label: 'Produtos', href: '/Products' },
    { label: 'Benefícios', href: '/Products#benefits' },
    { label: 'Sobre cartão', href: '/Sobre-cartao' },
    { label: 'Sobre Nós', href: '/AboutUs' },
    { label: 'Ajuda', href: '/Help' },
    { label: 'Blog', href: '/Blog' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="flex w-full justify-center bg-white text-black border-b border-zinc-800 fixed z-50 shadow-xl/30 shadow-white">
      <div className="flex items-center w-full min-h-18 mx-4 flex-row lg:mx-12">
        <div className="relative flex flex-col h-full w-4/12 justify-center lg:w-2/12">
          <Link href="/">
            <img 
              src="/images/logo.png"
              alt='Logo Apus'
              className='absolute logo cursor-pointer logoPosition'
              style={{}}
            />
          </Link>
        </div>

        <nav className="hidden h-full w-6/12 lg:flex lg:items-center lg:justify-center lg:w-8/12 overflow-hidden">
           <ul className="flex h-full items-center gap-2">
            {links.map(({ label, href }) => {
              const [linkPath, linkHash] = href.split('#');
              const isActive = pathname === linkPath && (linkHash ? currentHash === `#${linkHash}` : true);
              
              return (
                <li key={href} 
                  className={`${isActive ? 'min-w-[120px]' : 'hover:text-blue-400'} relative h-full items-center justify-center transition flex text-base font-normal lg:text-md px-3`}
                >
                  {isActive && (
                    <div className='absolute'>
                      <motion.div
                        layoutId="highlight-shape"
                        layout="position"
                        className="parallelogram-container absolute z-0"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        <div className="parallelogram"></div>
                      </motion.div>
                    </div>
                  )}
                  <Link href={href} className='z-10'>{label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

         <div className="w-full gap-6 lg:w-2/12 flex justify-end items-center" ref={menuRef}>
           <div className="">
            <button 
              className="flex items-center justify-center py-4 px-4 bg-gray-950 text-white text-sm rounded-lg cursor-pointer xl:text-lg xl:px-6 hover:bg-zinc-800"
              onClick={openModal}
            >
              Abrir minha conta
            </button>
          </div>

          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <motion.div
              initial={false}
              animate={menuOpen ? 'open' : 'closed'}
              className="w-6 h-6 relative"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.2 }}
                className="absolute h-[2px] w-full bg-black left-0 top-1"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="absolute h-[2px] w-full bg-black left-0 top-3"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -10 },
                }}
                transition={{ duration: 0.2 }}
                className="absolute h-[2px] w-full bg-black left-0 top-5"
              />
            </motion.div>
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-18 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 z-50 lg:hidden shadow-md"
              >
                {links.map(({ label, href }) => {
                  const isActive = pathname === href || (href.includes('#') && pathname === '/');
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`menuItem ${isActive ? 'font-semibold bg-[#FFA415]' : ''} w-full text-center`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}