'use client';

import TimestampDisplay from '../components/common/TimestampDisplay';
import { useTimestamp } from '../hooks/useTimestamp';

interface TimestampClientProps {
  initialTimestamp: number;
}

const TimestampClient: React.FC<TimestampClientProps> = ({
  initialTimestamp,
}) => {
  const { clientTimestamp, countdown } = useTimestamp(initialTimestamp);

  return (
    <div>
      <TimestampDisplay label='Client' timestamp={clientTimestamp} />
      <p>Next update in: {countdown} seconds</p>
    </div>
  );
};

export default TimestampClient;
