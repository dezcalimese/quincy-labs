"use client";

import { useState } from "react";
import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaCalendarDays, FaEnvelope, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageLayout
      title="Contact"
      description="Let's build the future together"
    >
      <div className="space-y-12">
        {/* Quick Contact Options */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="https://calendly.com/yuma-omoprotocol/30min"
              target="_blank"
              className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all text-center"
            >
              <FaCalendarDays className="w-8 h-8 mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Schedule a Call</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Book a 30-minute discussion about collaboration opportunities
              </p>
            </Link>

            <Link
              href="mailto:contact@quincy-labs.com"
              className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all text-center"
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-3 text-green-500 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send us a message for general inquiries or partnerships
              </p>
            </Link>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center gap-4 mb-3">
                <Link 
                  href="https://x.com/Quincy_Labs"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaXTwitter className="w-8 h-8" />
                </Link>
                <Link 
                  href="https://linkedin.com/company/quincy-labs"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin className="w-8 h-8" />
                </Link>
              </div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stay updated on our latest research and announcements
              </p>
            </div>
          </div>
        </section>

        {/* Partner Form */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Partner With Us</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                              bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                              bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                              bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                              bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="investment">Investment / VC</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="media">Media / Press</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                            bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your interest in Quincy Labs and how we might work together..."
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                            transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Specific Partnership Types */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">For Investors</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                We're selectively raising capital to accelerate our research and product development. 
                If you're interested in backing transformative AI and blockchain infrastructure, we'd 
                love to hear from you.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Seed and Series A opportunities</li>
                <li>• Deep tech focus with clear path to commercialization</li>
                <li>• Strong IP portfolio and technical moat</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">For Researchers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Join us in pushing the boundaries of what's possible. We collaborate with academic 
                institutions and independent researchers on cutting-edge projects.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Joint research initiatives</li>
                <li>• Grant collaborations</li>
                <li>• Publication opportunities</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">For Enterprises</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Deploy our technology in your organization. We offer enterprise solutions for AI 
                integration, blockchain infrastructure, and healthcare systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Custom implementations</li>
                <li>• Professional services</li>
                <li>• Enterprise support</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">For Developers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Build on our open-source tools and contribute to the ecosystem. We support developers 
                with documentation, grants, and technical assistance.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Developer grants</li>
                <li>• Technical mentorship</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}