import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function ToggleFaq({title , children}) {
    let [toggle, setToggle] = useState(false);
  return (
      <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
          <motion.h2 layout>{title}</motion.h2>
          {toggle ? children : ''}
        <div className="faq-line"></div>
    </motion.div>
  )
}
