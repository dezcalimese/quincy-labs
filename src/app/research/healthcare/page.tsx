import PageLayout from "@/app/_components/PageLayout";
import { FaHeartPulse, FaDna, FaBrain, FaChartLine } from "react-icons/fa6";

const researchTopics = [
  {
    title: "Monarch AI Platform",
    icon: <FaBrain className="w-6 h-6" />,
    description: "Comprehensive AI platform for healthcare diagnostics and treatment planning",
    areas: [
      "Clinical decision support",
      "Patient risk stratification",
      "Treatment optimization",
      "Outcome prediction models"
    ]
  },
  {
    title: "Sickle Cell Research",
    icon: <FaDna className="w-6 h-6" />,
    description: "Advanced analytics and prediction models for sickle cell disease management",
    areas: [
      "Crisis prediction algorithms",
      "Personalized treatment protocols",
      "Genomic analysis integration",
      "Quality of life metrics"
    ]
  },
  {
    title: "Medical Imaging AI",
    icon: <FaChartLine className="w-6 h-6" />,
    description: "Deep learning models for medical image analysis and interpretation",
    areas: [
      "Automated diagnosis systems",
      "Anomaly detection",
      "3D reconstruction",
      "Real-time analysis"
    ]
  },
  {
    title: "Predictive Healthcare",
    icon: <FaHeartPulse className="w-6 h-6" />,
    description: "Machine learning models for early disease detection and prevention",
    areas: [
      "Disease progression modeling",
      "Risk factor identification",
      "Preventive care optimization",
      "Population health management"
    ]
  }
];

export default function HealthcarePage() {
  return (
    <PageLayout
      title="Healthcare AI Research"
      description="Transforming healthcare through intelligent systems and data-driven insights"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our healthcare research combines cutting-edge AI with clinical expertise to develop 
            solutions that improve patient outcomes, reduce healthcare costs, and advance medical 
            understanding. We focus on creating accessible, interpretable AI systems that augment 
            healthcare providers' capabilities.
          </p>
        </section>

        {/* Research Topics */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Research Focus Areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchTopics.map((topic) => (
              <div 
                key={topic.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-red-500 dark:text-red-400">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold">{topic.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {topic.description}
                </p>
                
                <ul className="space-y-2">
                  {topic.areas.map((area) => (
                    <li key={area} className="flex items-start text-sm text-gray-500 dark:text-gray-500">
                      <span className="mr-2 mt-1">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Monarch AI Showcase */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Monarch AI: Healthcare Intelligence Platform</h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Care Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monarch AI integrates multiple data streams to provide holistic patient insights, 
                  from electronic health records to genomic data, creating a complete picture for 
                  personalized care delivery.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">HIPAA-compliant architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Real-time clinical decision support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Explainable AI recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Multi-modal data integration</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Impact Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Diagnostic Accuracy</span>
                    <span className="font-mono text-sm">94.7%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Early Detection Rate</span>
                    <span className="font-mono text-sm">+38%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Treatment Optimization</span>
                    <span className="font-mono text-sm">+27%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">Cost Reduction</span>
                    <span className="font-mono text-sm">-22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Clinical Partnerships</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              We collaborate with leading medical institutions and research centers to validate our 
              models and ensure clinical relevance. Our partnerships focus on translating research 
              into practical solutions that can be deployed in real healthcare settings.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-500">12+</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Hospital Partners</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-500">50K+</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Patients Analyzed</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-500">8</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Active Clinical Trials</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}