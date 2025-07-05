import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import GlassCard from '../components/GlassCard'
import DemoRequestForm from '../components/DemoRequestForm'

const InventoryManagement = () => {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI Copilot',
      description: 'Intelligent AI assistant that helps optimize inventory decisions',
      details: ['Demand forecasting', 'Stock optimization', 'Automated reordering', 'Trend analysis']
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'ERP Integration',
      description: 'Seamless integration with popular ERP systems',
      details: ['SAP integration', 'Oracle compatibility', 'QuickBooks sync', 'Custom API connections']
    },
    {
      icon: 'fas fa-clock',
      title: 'Real-time Updates',
      description: 'Live inventory tracking across all locations',
      details: ['Live stock levels', 'Instant notifications', 'Multi-location sync', 'Real-time reporting']
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Sales & Purchase Management',
      description: 'Complete sales and purchase workflow management',
      details: ['Order processing', 'Invoice generation', 'Purchase orders', 'Payment tracking']
    },
    {
      icon: 'fas fa-bell',
      title: 'Vendor Notifications',
      description: 'Automated vendor communication and alerts',
      details: ['Low stock alerts', 'Reorder notifications', 'Vendor performance', 'Delivery tracking']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and business intelligence',
      details: ['Performance dashboards', 'Profit analysis', 'Trend reports', 'Custom metrics']
    }
  ]

  const aiFeatures = [
    {
      icon: 'fas fa-brain',
      title: 'Predictive Analytics',
      description: 'AI predicts future demand patterns and suggests optimal stock levels'
    },
    {
      icon: 'fas fa-magic',
      title: 'Smart Recommendations',
      description: 'Get intelligent suggestions for inventory optimization and cost reduction'
    },
    {
      icon: 'fas fa-search',
      title: 'Anomaly Detection',
      description: 'Automatically detect unusual patterns and potential issues in your inventory'
    },
    {
      icon: 'fas fa-comments',
      title: 'Natural Language Queries',
      description: 'Ask questions about your inventory in plain English and get instant answers'
    }
  ]

  const integrations = [
    { name: 'SAP', icon: 'fas fa-database' },
    { name: 'Oracle', icon: 'fas fa-server' },
    { name: 'QuickBooks', icon: 'fas fa-calculator' },
    { name: 'Shopify', icon: 'fab fa-shopify' },
    { name: 'WooCommerce', icon: 'fab fa-wordpress' },
    { name: 'Amazon', icon: 'fab fa-amazon' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 bg-white/10 backdrop-blur-2xl border-white/20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Inventory Management System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                AI-powered inventory management with built-in ERP integration and real-time updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setShowDemoForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <i className="fas fa-robot mr-2"></i>
                  Try AI Copilot
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              AI-Powered Intelligence
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our built-in AI copilot transforms how you manage inventory with intelligent insights and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full bg-white/60 backdrop-blur-xl border-white/30 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Feature Set
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to manage inventory efficiently and profitably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <i className="fas fa-check text-accent mr-2"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ERP Integration
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Seamlessly connect with your existing ERP systems and e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto mb-16">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <GlassCard className="p-6 text-center bg-light-color/50 backdrop-blur-sm border-white/30">
                  <i className={`${integration.icon} text-3xl text-primary mb-3`}></i>
                  <p className="text-sm font-medium text-text-secondary">{integration.name}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 bg-light-color/50 backdrop-blur-sm border-white/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-text-secondary">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">< 1 sec</div>
                  <div className="text-text-secondary">Sync Speed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-text-secondary">Support Available</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-light-color to-white">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="p-12 bg-white/60 backdrop-blur-xl border-white/30 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Transform Your Inventory Management
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join hundreds of businesses that have optimized their inventory with our AI-powered solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowDemoForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-calendar mr-2"></i>
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
              >
                <i className="fas fa-robot mr-2"></i>
                Try AI Copilot
              </motion.button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Demo Request Form */}
      <AnimatePresence>
        {showDemoForm && (
          <DemoRequestForm
            productName="Inventory Management System"
            onClose={() => setShowDemoForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default InventoryManagement