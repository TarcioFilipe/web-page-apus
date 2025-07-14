'use client'

import { useModal } from '@/context/ModalContext';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';


import '@/styles/modalForm.css';

export default function ModalContato() {
  const { isOpen, closeModal } = useModal();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    telefone: '',
    termo1: false,
    termo2: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('formData');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };

    setFormData(newData);
    localStorage.setItem('formData', JSON.stringify(newData));
  };

  const isValidCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '');
    if (cleaned.length !== 11 || /^(\d)\1+$/.test(cleaned)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cleaned[i]) * (10 - i);
    let firstCheck = (sum * 10) % 11;
    if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;
    if (firstCheck !== parseInt(cleaned[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cleaned[i]) * (11 - i);
    let secondCheck = (sum * 10) % 11;
    if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;
    return secondCheck === parseInt(cleaned[10]);
  };

  const isValidTelefone = (telefone: string) => {
    const cleaned = telefone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const lastSubmission = localStorage.getItem('formSubmittedAt');
    const now = Date.now();

    if (lastSubmission && now - parseInt(lastSubmission) < 86400000) {
      toast.error('Você já enviou este formulário recentemente. Tente novamente em 24 horas.');
      return;
    }

    if (!isValidCPF(formData.cpf)) return toast.error('CPF inválido');
    if (!isValidTelefone(formData.telefone)) return toast.error('Telefone inválido');;

    try {
      setLoading(true);
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success('Formulário enviado com sucesso!');
        localStorage.setItem('formSubmittedAt', now.toString());
        localStorage.removeItem('formData');
        closeModal();
      } else {
        toast.error('Erro ao enviar formulário: ' + result.error);
      }
    } catch (err) {
      console.error('Erro ao enviar:', err);
      toast.error('Erro de ao enviar formulario.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-amber-500/25 backdrop-blur-sm">
      <div className="bg-[#FFA415] rounded-xl px-6 py-8 w-full max-w-lg shadow-xl relative text-black">
        <button onClick={closeModal} className="absolute top-3 right-4 text-2xl cursor-pointer hover:text-white transition">×</button>
        <h2 className="text-2xl font-bold mb-1">Abra sua conta</h2>
        <p className="text-lg mb-6">em segundos</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="nome"
            type="text"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            className="bg-white p-2 px-5 rounded-full"
            required
          />

          <div className='flex gap-2'>
            <input
              name="cpf"
              type="text"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              className="bg-white p-2 px-5 rounded-full w-7/12"
              required
            />
            <input
              name="nascimento"
              type="date"
              value={formData.nascimento}
              onChange={handleChange}
              className="bg-white p-2 px-4 rounded-full w-5/12"
              required
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white p-2 px-5 rounded-full"
            required
          />

          <input
            name="telefone"
            type="tel"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="bg-white p-2 px-5 rounded-full"
            required
          />

          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="termo1"
                checked={formData.termo1}
                onChange={handleChange}
                className="border mt-1 bg-[#FFA415]"
              />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="termo2"
                checked={formData.termo2}
                onChange={handleChange}
                className="mt-1"
              />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-white text-black text-center mt-2 py-3 rounded-full font-medium text-lg cursor-pointer hover:bg-black hover:text-white transition flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              'Confirmar'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
