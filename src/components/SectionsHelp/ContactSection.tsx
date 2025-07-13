import { title } from "process"

const info = [
  {
    title: 'Central de Atendimento Odontoprev (Plano Dental):',
    desc: [
      {text: 'Beneficiários de planos individuais:'},
      {text: 'Central de relacionamento'},
      {text: '0800 602 3332'},
      {text: 'Atendimento 24 horas, 7 dias por semana'}
    ]
  },
  {
    title: 'Deficiente auditivo ou de fala',
    desc: [
      {text: '0800 722 2191'}
    ]
  },
  {
    title: 'Beneficiários de planos individuais e empresariais:',
    desc: [
      {text: 'SAC Dental'},
      {text: '0800 600 2894'}
    ]
  },
  {
    title: 'Reclamações, cancelamentos e informações gerais 24horas, 7 dias por semana',
    desc: [
      {text: 'Deficiente auditivo ou de fala'},
      {text: '0800 722 2191'}
    ]
  },
  {
    title: 'Reclamações, cancelamentos e informações gerais 24horas, 7 dias por semana',
    desc: [
      {text: 'Ouvidoria Dental'},
      {text: '0800 772 2073'}
    ]
  },
  {
    title: '',
    desc: [
      {text: 'Elogios, sugestões e reclamações –'},
      {text: 'de segunda a sexta (exceto feriados) das 08:00 às 18:00'}
    ]
  },
];


export default function ContactSection() {
  return (
    <section className="h-screen flex flex-col items-center bg-[#FFA415] text-black py-10">
      <div className="container flex flex-col h-full justify-center px-4 gap-4">
        {info.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-lg font-bold lg:text-2xl ">
              {item.title}
            </p>
            <div className="flex flex-col text-black text-md">
              {item.desc.map((descItem, descIndex) => (
                <p key={descIndex} className="text-md lg:text-lg">{descItem.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}