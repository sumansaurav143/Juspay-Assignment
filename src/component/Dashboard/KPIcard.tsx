import { motion } from 'framer-motion';
import '../../App.css'; // Import custom styles

export default function KPIcard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  const isPositive = change.startsWith('+');

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="kpi-card"
    >
      <span className="kpi-title">{title}</span>
      <span className="kpi-value">{value}<span className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
        {change}
      </span></span>
      
    </motion.div>
  );
}
