'use client'

import Image from 'next/image'
import blogData from '@/data/blogData.json';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Quem tem a Tag APUS by Veloe pode usar o novo sistema de pedágio sem cancela Free Flow',
      excerpt: 'Vai pegar estrada no feriado? Além de diversos benefícios, a Tag apus permite passar direto no pedágio e ainda dá desconto na tarifa.',
      image: '/images/placeholder.png',
    },
    // Repetição mockada para exemplo
    { id: 2, title: 'Quem tem a Tag APUS by Veloe pode usar o novo sistema de pedágio sem cancela Free Flow', image: '/images/placeholder.png' },
    { id: 3, title: 'Quem tem a Tag APUS by Veloe pode usar o novo sistema de pedágio sem cancela Free Flow', image: '/images/placeholder.png' },
  ];

  return (
    <section className="min-h-screen px-4 bg-white py-20">
      <div className='flex flex-col max-w-screen-xl mx-auto md:px-12 py-10 space-y-16'>
        {/* Destaque principal */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-zinc-950 font-medium mb-1">Tem na <strong>APUS Digital</strong></p>
            <h2 className="text-xl text-black font-bold leading-snug mb-2">{blogData[0].title}</h2>
            <p className="text-zinc-950">{blogData[0].excerpt}</p>
          </div>
          <div className="w-full h-48 md:h-60 lg:h-72 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
            <Image
              src={blogData[0].image}
              alt={blogData[0].title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Últimas notícias */}
        <div className="space-y-6">
          <h3 className="text-center text-black text-xl font-light">Veja as últimas notícias</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogData.slice(1).map(post => (
              <div key={post.id} className="space-y-3">
                <div className="w-full h-40 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Post"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-sm text-zinc-950 font-bold">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
