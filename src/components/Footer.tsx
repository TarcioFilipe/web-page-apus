'use client'

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Image
            src="/images/logo_branca.png"
            alt="Logo Apus"
            width={120}
            height={40}
            className="mb-4"
          />
          <h4 className="text-sm font-semibold mb-2">NOSSAS REDES</h4>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">NOSSOS PRODUTOS</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:underline">Benefícios</Link></li>
            <li><Link href="#" className="hover:underline">Sobre Cartões</Link></li>
            <li><Link href="#" className="hover:underline">Seguros</Link></li>
            <li><Link href="#" className="hover:underline">Empréstimos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">DÚVIDAS</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:underline">FAQ</Link></li>
            <li><Link href="#" className="hover:underline">Quem Somos</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">APLICATIVOS</h4>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={160}
                height={50}
              />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={160}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10"></div>
    </footer>
  );
}
