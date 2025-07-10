'use client'

import '@/styles/header.css'
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex w-full justify-center bg-white text-black border-b border-zinc-800 fixed z-50 shadow-xl/30 shadow-white">
      <div className="flex items-center w-full min-h-18 mx-4 lg:mx-12 flex-row">
        <div className="relative flex flex-col h-full w-4/12 lg:w-2/12 justify-center">
          <img 
            src="/images/logo.png"
            alt='Logo Apus'
            className='absolute logo'
            style={{}}
          />
        </div>

        <nav className="hidden lg:flex w-6/12 lg:w-8/12 justify-center">
          <ul className="flex gap-2">
            <li className="text-base font-normal lg:text-md px-3"><a href="/Products">Produtos</a></li>
            <li className="text-base font-normal lg:text-md px-3"><a href="">Benefícios</a></li>
            <li className="text-base font-normal lg:text-md px-3"><a href="">Sobre cartão</a></li>
            <li className="text-base font-normal lg:text-md px-3"><a href="">Sobre Nós</a></li>
            <li className="text-base font-normal lg:text-md px-3"><a href="">Ajuda</a></li>
            <li className="text-base font-normal lg:text-md px-3"><a href="">Blog</a></li>
          </ul>
        </nav>

         <div className="w-full gap-6 lg:w-2/12 flex justify-end items-center">
          {/* Botão hambúrguer só aparece em telas menores */}
           <div className="">
            <button 
              className="flex items-center justify-center py-4 px-4 bg-gray-950 text-white text-sm xl:text-lg xl:px-6 rounded-lg"
              onClick={() => console.log('Abrir a conta')}
            >
              Abrir minha conta
            </button>
          </div>

          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
            {menuOpen && (
              <div className="absolute top-20 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 z-50 lg:hidden shadow-md">
                <a href="/Products" className="menuItem">Produtos</a>
                <a href="" className="menuItem">Benefícios</a>
                <a href="" className="menuItem">Sobre cartão</a>
                <a href="" className="menuItem">Sobre Nós</a>
                <a href="" className="menuItem">Ajuda</a>
                <a href="" className="menuItem">Blog</a>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}