import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7fafc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '18px', color: '#4a5568' }}>
          We would love to hear from you! Please fill out the form below.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

