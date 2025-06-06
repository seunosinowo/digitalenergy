"use client"
import { motion } from "framer-motion"
import { Shield, Award, Scale, FileCheck, Users, Building2, Target } from "lucide-react"

const governanceValues = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We maintain open and honest communication with all stakeholders",
  },
  {
    icon: Award,
    title: "Accountability",
    description: "We take responsibility for our actions and decisions",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "We treat all stakeholders with respect and without favoritism",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "We adhere to all applicable laws, regulations, and standards",
  },
]

const boardMembers = [
  {
    name: "Simon Chukwunweluwa Ugwuoke",
    position: "MD & CEO",
    image: "/src/assets/simon.png",
    bio: "Simon is a serial entrepreneur and a leader per excellence with experience spanning decades. He is a graduate of the University of Nigeria Nsukka and has obtained several other certifications and trainings both locally and internationally. Simon directs the day to day affairs of the Digital Energy business"
  },
  {
    name: "Engr. Olutayo Ajayi",
    position: "ED, Technical Services",
    image: "/src/assets/tayo.png",
    bio: "He is a seasoned mechanical engineer with a B.Sc. degree in Mechanical Engineering and over 28 years of global experience in managing complex projects in the power, oil, and gas sectors. A COREN registered Engineer and member of Nigerian Society of Engineers (MNSE), he boasts a proven track record of delivering multi-million-dollar projects."
  },
  {
    name: "Mr. Fredrick Okeagu",
    position: "ED, HR & Management Services",
    image: "/src/assets/fred.png",
    bio: "Global Speaker, a Certified Management Consultant and HR professional with over 15 years experience. He is a doctoral student (Ph.D) in IRHRM, an MSc graduate in IHRM, and holds a PGD in Guidance & Counselling. He is Certified with CIPM, Nigeria, KPI Institute- Australia and a member of the Africa HR Confederation (AHRC)."
  }
]

const OurGovernance = () => {
  const committees = [
    {
      title: "Audit Committee",
      description: "Oversees financial reporting, internal controls, and risk management",
      members: ["Dr. James Wilson", "Maria Rodriguez"],
    },
    {
      title: "Nomination Committee",
      description: "Handles board composition, succession planning, and governance",
      members: ["David Chen", "Dr. James Wilson"],
    },
    {
      title: "Remuneration Committee",
      description: "Manages executive compensation and performance evaluation",
      members: ["Maria Rodriguez", "David Chen"],
    },
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">

          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/src/assets/pic_3.png"
                alt="Governance"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
            </div>
            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block bg-blue-700/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
              >
                <p className="text-sm font-medium">Corporate Governance</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Excellence in <span className="text-orange-400">Leadership</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                At Digital Energy, we maintain the highest standards of corporate governance, ensuring transparency, 
                accountability, and ethical business practices.
              </motion.p>
      </div>
          </motion.div>

          {/* Board of Directors Section */}
      <div>
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Board of Directors
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Experienced leaders guiding our strategic vision
              </motion.p>
            </div>
        <div className="grid md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {member.position}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
            </motion.div>
          ))}
        </div>
      </div>

          {/* Core Values */}
      <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Core Values
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Fundamental principles guiding our decision-making
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governanceValues.map((value, index) => (
            <motion.div
                  key={value.title}
              initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
              </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

          {/* Governance Structure */}
          <div className="bg-gradient-to-br from-blue-50 to-white py-16 rounded-2xl">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Governance Structure
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  A robust framework ensuring effective oversight
                </motion.p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Board of Directors</h4>
                  <p className="text-gray-600 mb-4">
                    Experienced professionals providing strategic guidance
                  </p>
                  <div className="w-8 h-0.5 bg-orange-400 rounded-full" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Executive Management</h4>
                  <p className="text-gray-600 mb-4">
                    Skilled leaders driving operational excellence
                  </p>
                  <div className="w-8 h-0.5 bg-orange-400 rounded-full" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Committees</h4>
                  <p className="text-gray-600 mb-4">
                    Specialized teams ensuring compliance
                  </p>
                  <div className="w-8 h-0.5 bg-orange-400 rounded-full" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Committees Section */}
          <div className="bg-white py-16 rounded-2xl">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Board Committees
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  Specialized committees supporting effective governance
                </motion.p>
              </div>
              
              <div className="space-y-6">
                {committees.map((committee, index) => (
                  <motion.div
                    key={committee.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <FileCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{committee.title}</h4>
                        <p className="text-gray-600">{committee.description}</p>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-700">Members: </span>
                          <span className="text-sm text-gray-600">{committee.members.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OurGovernance