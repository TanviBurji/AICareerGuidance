import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Briefcase } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    profession: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-white mb-8">AI Career Advisor</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200 h-5 w-5" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-indigo-200"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200 h-5 w-5" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-indigo-200"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200 h-5 w-5" />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-indigo-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200 h-5 w-5" />
            <input
              type="text"
              placeholder="Current Profession"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-indigo-200"
              value={formData.profession}
              onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}