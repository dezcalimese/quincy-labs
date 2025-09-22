import PageLayout from "@/app/_components/PageLayout";
import { FaBrain, FaShield, FaChartLine, FaUsers } from "react-icons/fa6";

export default function MonarchPage() {
  return (
    <PageLayout
      title="Monarch AI"
      description="Transforming healthcare with intelligent clinical decision support"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Healthcare Intelligence Platform</h2>
            <p className="text-lg opacity-90">
              Monarch AI empowers healthcare providers with advanced artificial intelligence to improve 
              patient outcomes, reduce costs, and accelerate medical discovery through data-driven insights.
            </p>
          </div>
        </section>

        {/* Platform Features */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaBrain className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clinical Decision Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Real-time AI assistance for diagnosis, treatment planning, and clinical workflows 
                with evidence-based recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Differential diagnosis assistance</li>
                <li>• Treatment recommendation engine</li>
                <li>• Drug interaction checking</li>
                <li>• Clinical guideline integration</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaChartLine className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced machine learning models for patient risk stratification and outcome 
                prediction across multiple conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 30-day readmission risk</li>
                <li>• Disease progression modeling</li>
                <li>• Complication prediction</li>
                <li>• Resource utilization forecasting</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaShield className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Privacy & Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enterprise-grade security with full HIPAA compliance and advanced privacy-preserving 
                technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• HIPAA & GDPR compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Federated learning support</li>
                <li>• Audit trail & logging</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaUsers className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Population Health</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Population-level analytics for identifying at-risk cohorts and optimizing 
                care delivery across patient groups.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Cohort identification</li>
                <li>• Care gap analysis</li>
                <li>• Quality measure tracking</li>
                <li>• Health equity monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clinical Impact */}
        {/* <section>
          <h2 className="text-2xl font-lora mb-6">Clinical Impact</h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">94.7%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Diagnostic Accuracy</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">38%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Earlier Detection</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">27%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reduced Readmissions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$2.1M</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Annual Savings</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Specialties */}
        {/* <section>
          <h2 className="text-2xl font-lora mb-6">Medical Specialties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Hematology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Specialized models for blood disorders including our flagship sickle cell disease management system.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Sickle cell crisis prediction</div>
                <div>• Transfusion optimization</div>
                <div>• Genetic risk assessment</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Cardiology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Advanced cardiovascular risk prediction and intervention planning tools.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Arrhythmia detection</div>
                <div>• Heart failure prediction</div>
                <div>• Intervention planning</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Oncology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Precision oncology support with treatment response prediction and clinical trial matching.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Treatment response modeling</div>
                <div>• Clinical trial matching</div>
                <div>• Progression monitoring</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Radiology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                AI-powered image analysis for faster, more accurate diagnoses.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Automated screening</div>
                <div>• Anomaly detection</div>
                <div>• 3D reconstruction</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Emergency Medicine</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Real-time triage and critical care decision support systems.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Triage optimization</div>
                <div>• Sepsis detection</div>
                <div>• Resource allocation</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Primary Care</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Comprehensive support for preventive care and chronic disease management.
              </p>
              <div className="space-y-1 text-xs text-gray-500">
                <div>• Preventive care alerts</div>
                <div>• Chronic disease tracking</div>
                <div>• Wellness optimization</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Integration */}
        {/* <section>
          <h2 className="text-2xl font-lora mb-6">Seamless Integration</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              Monarch AI integrates seamlessly with existing healthcare infrastructure through 
              standards-based APIs and pre-built connectors for major EHR systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-3">EHR Systems</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">Epic</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">Cerner</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">Allscripts</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">AthenaHealth</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">NextGen</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Standards & Protocols</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">HL7 FHIR</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">DICOM</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">ICD-10</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">SNOMED</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">LOINC</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Case Study */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Case Study: Sickle Cell Management</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Sickle cell disease affects millions globally, with unpredictable pain crises 
                  leading to frequent emergency visits and hospitalizations. Traditional management 
                  approaches are reactive rather than preventive.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Solution</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monarch AI's predictive models analyze patient data to forecast crisis events 
                  up to 72 hours in advance, enabling preventive interventions aiming to reduce 
                  hospitalizations and improve quality of life.
                </p>
              </div>
            </div>
            {/* <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>Result:</strong> 42% reduction in crisis-related hospitalizations, 
                $850K annual savings per 100 patients, 3.2x improvement in patient-reported outcomes.
              </p>
            </div> */}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}