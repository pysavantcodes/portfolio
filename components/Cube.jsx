import { motion } from 'framer-motion';

const Cube = () => {
    return (
      <motion.div
        whileHover={{ rotateY: 180 }}
        style={{
          width: '100px',
          height: '100px',
          background: 'blue',
          transformStyle: 'preserve-3d',
          perspective: '500px',
          transition: 'transform 0.5s',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'red',
            transform: 'translateZ(50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'yellow',
            transform: 'rotateY(90deg) translateZ(50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'green',
            transform: 'rotateY(-90deg) translateZ(50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'orange',
            transform: 'rotateX(90deg) translateZ(50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'purple',
            transform: 'rotateX(-90deg) translateZ(50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'pink',
            transform: 'translateZ(-50px) rotateY(45deg) rotateX(-45deg)',
          }}
        />
      </motion.div>
    );
  };
  
  
  
  
  

export default Cube;