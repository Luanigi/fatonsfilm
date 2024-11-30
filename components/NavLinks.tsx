import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa6";

const links = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/#about' },
  { name: 'portfolio', href: '/#projekte' },
  { name: 'contact', href: '/#contact' },
]

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, color: 'text-[#849cc8]', href: '#' },
  { name: 'Twitter', icon: FaTwitter, color: 'text-[#2596be]', href: '#' },
  { name: 'Facebook', icon: FaFacebookF, color: 'text-[#d4bb47]', href: '#' },
  { name: 'TikTok', icon: FaTiktok, color: 'text-[#d87474]', href: '#' },
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

const socialVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6, // Shortened delay for smoother animation
      staggerChildren: 0.15 // Reduced stagger for smoother sequence
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function NavLinks() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-4 px-6 space-y-4"
    >
      <motion.ul
        className="py-4 space-y-4"
      >
        {links.map((link) => (
          <motion.li key={link.name} variants={itemVariants}>
            <a
              href={link.href}
              className="text-white hover:text-neutral-200 transition duration-300 text-lg block"
            >
              {link.name.charAt(0).toUpperCase() + link.name.slice(1).toLowerCase()}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.hr variants={itemVariants} className="w-1/2 mx-auto" />

      <motion.div
        transition={{ type: "spring" }}
        className="grid grid-cols-4 mt-4 w-2/4 mx-auto"
        initial="hidden"
        animate="visible"
        variants={socialVariant}
      >
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.href} passHref>
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold flex justify-center text-5xl hover:bg-white/20 transition duration-300 rounded-md py-2 items-center ${link.color}`}
              aria-label={link.name}
            >
              <link.icon className="w-8 h-8" />
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}
