import { motion } from 'framer-motion'

const links = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/#about' },
  { name: 'portfolio', href: '/#projekte' },
  { name: 'contact', href: '/#contact' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function NavLinks() {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-4 px-6 space-y-4"
    >
      {links.map((link) => (
        <motion.li key={link.name} variants={itemVariants}>
          <a
            href={link.href}
            className="text-white hover:text-neutral-200 transition-colors duration-300 text-lg block"
          >
            {link.name.charAt(0).toUpperCase() + link.name.slice(1).toLowerCase()}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}

