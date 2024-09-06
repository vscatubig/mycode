import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    style={{
      backgroundColor: '#007BFF',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    {children}
  </motion.button>
);

export default AnimatedButton;

