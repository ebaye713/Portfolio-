import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, User, AtSign, Briefcase, MessageSquare, Facebook, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '../data/socials';

export const ContactSection: React.FC = () => {
  const email = "ebayepatience@gmail.com";
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const opportunities = [
    "Web development opportunities",
    "Freelance client projects",
    "Technology & AI collaborations",
    "Robotics & engineering tournaments",
    "Business partnerships & ventures",
    "Learning & networking opportunities"
  ];

  const projectTypes = [
    { id: "Web Development", label: "Web Development", desc: "Responsive websites & web apps" },
    { id: "Robotics & Innovation", label: "Robotics & Engineering", desc: "Hardware prototypes & tournaments" },
    { id: "Freelance Project", label: "Freelance Project", desc: "Business platforms & digital tools" },
    { id: "Business Partnership", label: "Business Partnership", desc: "Joint digital ventures & tech consulting" },
    { id: "Learning & Networking", label: "Learning & Mentorship", desc: "Tech fellowship & networking" }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Please enter your name to continue.";
    } else if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = "Please enter your email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    } else if (currentStep === 4) {
      if (!formData.message.trim()) newErrors.message = "Please write a brief message about your project.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) return;
    setDirection('next');
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setDirection('prev');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Direct AJAX submission straight to ebayepatience@gmail.com (no page redirect)
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message from ${formData.name} (${formData.projectType})`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      setFormSubmitted(true);
    } catch (err) {
      console.error('Direct mail dispatch failed:', err);
      setSubmitError(
        `Could not deliver automatically right now. Please try again or email ${email} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setSubmitError(null);
    setCurrentStep(1);
    setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400">07. LET&apos;S CONNECT</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Meaningful Together.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Whether you have a commercial web project, a robotics engineering venture, or want to discuss an innovative idea, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Opportunities List & Quick Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* What I'm Open To */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Areas of Collaboration:</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {opportunities.map((opp) => (
                  <li key={opp} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Email Card */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="space-y-1">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Direct Email Contact</p>
                <p className="text-lg font-bold text-white font-mono break-all">{email}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
                >
                  {copied ? <Check size={14} className="text-slate-950" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${email}?subject=Collaboration%20Inquiry`}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                >
                  <span>Open Mail App</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Social Profiles</p>
                <div className="flex flex-wrap items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-slate-950 bg-slate-950 hover:bg-amber-400 rounded-xl border border-slate-800 hover:border-amber-400 transition-colors"
                    >
                      {social.id === 'facebook' && <Facebook size={14} />}
                      {social.id === 'linkedin' && <Linkedin size={14} />}
                      {social.id === 'twitter' && <Twitter size={14} />}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Step-by-Step Animated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Top Step Progress Indicator */}
              {!formSubmitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-amber-400 font-semibold">Step {currentStep} of 5</span>
                    <span className="text-slate-400">
                      {currentStep === 1 && "Your Identity"}
                      {currentStep === 2 && "Email Address"}
                      {currentStep === 3 && "Project Category"}
                      {currentStep === 4 && "Your Message"}
                      {currentStep === 5 && "Review & Send"}
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-400 ease-out"
                      style={{ width: `${(currentStep / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Form Content Steps with Transition Animations */}
              {formSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Directly!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been sent straight to <span className="font-mono text-amber-400">{email}</span> without leaving this page. Ebaye will respond to you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
                  >
                    Start New Inquiry
                  </button>
                </div>
              ) : (
                <div className="min-h-[290px] flex flex-col justify-between">
                  
                  {/* Step 1: Name */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                        <User size={14} />
                        <span>Question 01</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        What should I call you?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Please enter your full name or company name.
                      </p>
                      <div className="pt-2">
                        <input
                          type="text"
                          autoFocus
                          placeholder="e.g. Kenneth Uche / Solar Partners"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({});
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNextStep();
                            }
                          }}
                          className="w-full px-4 py-3.5 text-base rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 mt-2 font-medium">{errors.name}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Email */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                        <AtSign size={14} />
                        <span>Question 02</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        What is your email address, {formData.name.split(' ')[0]}?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400">
                        I&apos;ll use this address to respond to your project inquiry.
                      </p>
                      <div className="pt-2">
                        <input
                          type="email"
                          autoFocus
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({});
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNextStep();
                            }
                          }}
                          className="w-full px-4 py-3.5 text-base rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-2 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Type */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                        <Briefcase size={14} />
                        <span>Question 03</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        What kind of collaboration is this?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Choose the primary discipline that matches your request.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, projectType: type.id });
                            }}
                            className={`p-3.5 rounded-2xl text-left border transition-all ${
                              formData.projectType === type.id
                                ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                            }`}
                          >
                            <p className="text-sm font-bold text-white flex items-center justify-between">
                              <span>{type.label}</span>
                              {formData.projectType === type.id && (
                                <Check size={14} className="text-amber-400" />
                              )}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{type.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Message */}
                  {currentStep === 4 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                        <MessageSquare size={14} />
                        <span>Question 04</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Tell me about your idea or project
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Share any details, goals, timelines, or questions you have.
                      </p>
                      <div className="pt-2">
                        <textarea
                          rows={4}
                          autoFocus
                          placeholder="Describe the scope, objectives, or challenge you want to tackle together..."
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({});
                          }}
                          className="w-full px-4 py-3.5 text-sm rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                        />
                        {errors.message && (
                          <p className="text-xs text-rose-400 mt-2 font-medium">{errors.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Summary & Confirmation */}
                  {currentStep === 5 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                        <Sparkles size={14} />
                        <span>Review & Send</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Ready to Connect!
                      </h3>
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <div className="flex justify-between border-b border-slate-900 pb-2">
                          <span className="text-slate-400">Name:</span>
                          <span className="font-semibold text-white">{formData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-900 pb-2">
                          <span className="text-slate-400">Email:</span>
                          <span className="font-semibold text-white">{formData.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-900 pb-2">
                          <span className="text-slate-400">Focus:</span>
                          <span className="font-semibold text-amber-400">{formData.projectType}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 block mb-1">Message:</span>
                          <p className="text-slate-300 italic line-clamp-3 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                            &ldquo;{formData.message}&rdquo;
                          </p>
                        </div>
                      </div>
                      {submitError && (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                          {submitError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons for Steps */}
                  <div className="pt-8 border-t border-slate-800/80 flex items-center justify-between gap-4 mt-6">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white rounded-xl transition-colors"
                      >
                        <ArrowLeft size={14} />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 5 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm shadow-amber-400/20 active:scale-[0.98]"
                      >
                        <span>Continue</span>
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleFinalSubmit}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/20 active:scale-[0.98] disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send size={14} />
                      </button>
                    )}
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
