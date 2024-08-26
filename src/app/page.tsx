import styles from './page.module.css';
import TimestampDisplay from '../components/common/TimestampDisplay';
import PostsList from '../components/posts/PostsList';
import TimestampClient from '../components/TimestampClient';
import { fetchTimestamp } from '../services/api';

export default async function Home() {
  const initialTimestamp = await fetchTimestamp();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Timestamp and Posts App</h1>
      </header>
      <section className={styles.timestampSection}>
        <TimestampDisplay label='Server' timestamp={initialTimestamp} />
        <TimestampClient initialTimestamp={initialTimestamp} />
      </section>
      <section className={styles.postsSection}>
        <PostsList />
      </section>
    </div>
  );
}
