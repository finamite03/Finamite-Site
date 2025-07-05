import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '500+', label: 'Happy Clients' },
    { number: '25+', label: 'Countries Served' },
  ]

  const services = [
    {
      icon: 'fas fa-users',
      title: 'Business Consulting',
      description: 'Strategic guidance to transform your business operations and drive sustainable growth.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Profit Coaching',
      description: 'Personalized coaching to maximize your business profitability and efficiency.',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training Programs',
      description: 'Comprehensive training solutions to upskill your team and enhance performance.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Implementation Support',
      description: 'End-to-end support to implement business systems and processes effectively.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to"
        subtitle="Finamite Solutions"
        description="Empowering businesses with innovative solutions and transformative technologies that drive sustainable growth and success."
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3"
        showButtons={true}
      />

      {/* About Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Transforming Businesses Through Innovation
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                At Finamite Solutions, we believe in transforming businesses through innovative solutions and strategic thinking. Our journey began with a vision to help SMEs achieve their full potential and create lasting impact in their industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Expert Business Consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Proven Implementation Strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Continuous Support & Growth</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/img/arshsir's image.png"
                alt="Arsh Gaur - Founder"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto float-animation"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm">Businesses Transformed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className="text-5xl font-bold mb-2 text-accent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-light-color">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions designed to accelerate your business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonial Section */}
      <section className="py-20 gradient-bg text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "At Finamite Solutions, we believe in transforming businesses through innovative solutions and strategic thinking. Our journey began with a vision to help SMEs achieve their full potential and create lasting impact in their industries."
              </blockquote>
              <div>
                <h3 className="text-xl font-semibold mb-1">Arsh Gaur</h3>
                <p className="text-white/80">Founder & Business Profit Coach</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/img/arshsir's image.png"
                alt="Arsh Gaur"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl float-animation"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their operations with our proven strategies and expert guidance.
          </p>
          <motion.a
            href="https://thesalesrevolution.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block text-lg px-12 py-4"
          >
            Get Started Today
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Home