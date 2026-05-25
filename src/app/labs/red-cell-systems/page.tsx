import PageLayout from "@/app/_components/PageLayout";
import { FaUserShield, FaStethoscope, FaFlask, FaChartLine, FaBrain, FaDna } from "react-icons/fa6";

const products = [
  {
    title: "Red Cell Patient",
    icon: <FaUserShield className="w-8 h-8" />,
    description: "AI-powered patient intelligence platform for chronic disease management and personalized health insights.",
    features: [
      "Health timeline and longitudinal tracking",
      "Lab result interpretation",
      "Symptom and medication monitoring",
      "Personalized AI insights",
      "Research and treatment updates",
      "Appointment preparation and care planning",
    ],
    color: "text-red-500",
  },
  {
    title: "Red Cell Clinical",
    icon: <FaStethoscope className="w-8 h-8" />,
    description: "Clinical intelligence platform that helps providers synthesize patient information and improve care coordination.",
    features: [
      "Unified patient profiles",
      "Biomarker trend analysis",
      "Clinical summaries",
      "Risk identification",
      "Research recommendations",
      "Care coordination tools",
    ],
    color: "text-blue-500",
  },
  {
    title: "Red Cell Research",
    icon: <FaFlask className="w-8 h-8" />,
    description: "Biomedical research intelligence that transforms medical literature and clinical data into structured, searchable knowledge.",
    features: [
      "Literature ingestion and summarization",
      "Knowledge graph exploration",
      "Clinical trial discovery",
      "Relationship mapping",
      "Research monitoring",
      "Cohort and outcome analysis",
    ],
    color: "text-purple-500",
  },
  {
    title: "Red Cell Insights",
    icon: <FaChartLine className="w-8 h-8" />,
    description: "Population health and outcomes analytics for healthcare organizations, foundations, and advocacy groups.",
    features: [
      "Population health dashboards",
      "Outcome tracking",
      "Program effectiveness reporting",
      "Biomarker analytics",
      "Care gap detection",
      "Longitudinal disease monitoring",
    ],
    color: "text-emerald-500",
  },
];

const platformCapabilities = [
  "Biomedical knowledge graphs",
  "Medical literature intelligence",
  "Longitudinal patient data",
  "Biomarker analytics",
  "AI reasoning systems",
  "Predictive health models",
];

export default function RedCellSystemsPage() {
  return (
    <PageLayout
      title="Red Cell Systems"
      description="Building the intelligence layer for healthcare — connecting patient data, biomedical knowledge, and AI to improve outcomes and accelerate discovery"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Healthcare Intelligence Platform</h2>
            <p className="text-lg opacity-90 mb-4">
              Red Cell Systems is an AI-powered healthcare intelligence company that helps patients, 
              clinicians, researchers, and healthcare organizations transform fragmented medical 
              information into actionable understanding.
            </p>
            <p className="text-base opacity-80">
              Beginning with sickle cell disease, Red Cell Systems is building a disease-focused 
              intelligence platform that combines patient data, biomedical knowledge, and advanced AI 
              to improve chronic disease management, accelerate research, and enable more proactive healthcare.
            </p>
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-2xl font-lora mb-8">Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              >
                <div className={`${product.color} mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2 mt-0.5">&bull;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence Engine */}
        <section>
          <h2 className="text-2xl font-lora mb-6">The Red Cell Intelligence Engine</h2>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All products are powered by the Red Cell Intelligence Engine — a unified platform that 
              continuously connects patient experiences, clinical knowledge, and biomedical research 
              into a system that becomes more useful as more information is integrated.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platformCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg p-4"
                >
                  <FaBrain className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disease Focus */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Initial Focus: Sickle Cell Disease</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sickle cell disease affects millions globally, with healthcare data fragmented 
                  across EHRs, lab results, clinical notes, and patient experiences. Traditional 
                  management is reactive, and patients lack tools to understand their own health 
                  trajectories.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Red Cell Systems unifies these data sources into a single intelligence layer — 
                  giving patients longitudinal tracking and personalized insights, clinicians 
                  synthesized profiles and trend analysis, and researchers structured knowledge 
                  for accelerating discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <FaDna className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p className="text-lg font-lora text-gray-700 dark:text-gray-300">
              Transform healthcare information into healthcare intelligence.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
