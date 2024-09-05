 import { useEffect, useState } from 'react';

 export default function Home() {
   const [data, setData] = useState(null);
   const [cacheStatus, setCacheStatus] = useState('MISS');
   const [revalidateIn, setRevalidateIn] = useState(10); // Countdown timer starts at 10 seconds
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     async function fetchData() {
       console.log("Fetching data from API...");
       const response = await fetch('/api/stale');
       const cacheHeader = response.headers.get('X-Cache');
       console.log("Cache Header:", cacheHeader);
       setCacheStatus(cacheHeader);
       const result = await response.json();
       setData(result);
       setLoading(false);
     }

     fetchData();

     const interval = setInterval(() => {
       setRevalidateIn((prev) => {
         if (prev > 1) {
           return prev - 1;
         } else {
           clearInterval(interval); // Stop the countdown when it reaches 0
           return 0;
         }
       });
     }, 1000);

     return () => clearInterval(interval); // Clear interval on component unmount
   }, []);

   if (loading) {
     return <p>Loading...</p>;
   }

   return (
     <div style={styles.container}>
       <h1 style={styles.title}>Random Todo Item Viewer</h1>
       {data ? (
         <div style={styles.card}>
           <h2 style={styles.subtitle}>Todo ID: {data.id}</h2>
           <p style={styles.text}>Title: {data.title}</p>
           <p style={styles.text}>Completed: {data.completed ? 'Yes' : 'No'}</p>
           <div style={styles.status}>
             <p><strong>Cache Status:</strong> {cacheStatus}</p>
             <p><strong>Seconds till Revalidation:</strong> {revalidateIn}</p>
           </div>
         </div>
       ) : (
         <p>No data available.</p>
       )}
     </div>
   );
 }

 const styles = {
   container: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '100vh',
     backgroundColor: '#f0f0f0',
     padding: '20px',
   },
   title: {
     fontSize: '3rem',
     color: '#333',
     marginBottom: '20px',
   },
   card: {
     backgroundColor: '#fff',
     borderRadius: '10px',
     padding: '20px',
     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     textAlign: 'center',
     maxWidth: '400px',
     width: '100%',
   },
   subtitle: {
     fontSize: '2rem',
     color: '#0070f3',
     marginBottom: '10px',
   },
   text: {
     fontSize: '1.25rem',
     color: '#555',
     marginBottom: '10px',
   },
   status: {
     marginTop: '20px',
     fontSize: '1rem',
     color: '#0070f3',
   },
 };

/*import { useEffect, useState } from 'react';

export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Next.js ISR Demo</h1>
      <div style={styles.card}>
        <h2 style={styles.heading}>Fetched To-Do Item:</h2>
        <p style={styles.text}><strong>ID:</strong> {data.id}</p>
        <p style={styles.text}><strong>Title:</strong> {data.title}</p>
        <p style={styles.text}><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
      </div>
      <p style={styles.info}>
        This data is fetched at build time and revalidated every 10 seconds.
        Refresh the page after 10 seconds to see if the data changes.
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + Math.floor(Math.random() * 100));
  const initialData = await res.json();

  return {
    props: {
      initialData,
    },
    revalidate: 10, // Revalidate the data every 10 seconds
  };
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 20px',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '10px',
  },
  info: {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px',
  },
};
*/
