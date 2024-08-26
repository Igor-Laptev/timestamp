'use client';
import styles from './TimestampDisplay.module.css';

interface TimestampDisplayProps {
  label: string;
  timestamp: number;
}

const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};

const TimestampDisplay: React.FC<TimestampDisplayProps> = ({
  label,
  timestamp,
}) => (
  <p className={styles.timestamp}>
    {label} timestamp: {formatTimestamp(timestamp)}
  </p>
);

export default TimestampDisplay;
