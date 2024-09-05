import { useCryptoPrices } from '../lib/wsClient';

export default function Home() {
    const prices = useCryptoPrices();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Cryptocurrency Prices (Real-Time)</h1>
            <div style={styles.grid}>
                {Object.keys(prices).map((asset) => (
                    <div key={asset} style={styles.gridItem}>
                        <h2 style={styles.assetName}>{asset.toUpperCase()}</h2>
                        <p style={styles.price}>${parseFloat(prices[asset]).toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Styles for the real-time price display
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '10px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        cursor: 'pointer',
    },
    gridItemHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    assetName: {
        fontSize: '1.75rem',
        color: '#0070f3',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    price: {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: '600',
    },
};
 
// pages/index.js
//import { gql, useQuery } from '@apollo/client';

// Define the GraphQL query
/* const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            name
            code
            emoji
        }
    }
`;

export default function Home() {
    // Use the useQuery hook to fetch data
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    // Handle loading state
    if (loading) return <p style={styles.loading}>Loading...</p>;
    // Handle error state
    if (error) return <p style={styles.error}>Error: {error.message}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Countries of the World</h1>
            <div style={styles.grid}>
                {data.countries.map((country) => (
                    <div key={country.code} style={styles.gridItem}>
                        <span style={styles.emoji}>{country.emoji}</span>
                        <span style={styles.countryName}>{country.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Styles for the page components
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    loading: {
        fontSize: '1.5rem',
        color: '#0070f3',
        textAlign: 'center',
        marginTop: '20px',
    },
    error: {
        fontSize: '1.5rem',
        color: '#d9534f',
        textAlign: 'center',
        marginTop: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    emoji: {
        fontSize: '3rem',
        marginBottom: '10px',
    },
    countryName: {
        fontSize: '1.25rem',
        color: '#555',
    },
};*/

