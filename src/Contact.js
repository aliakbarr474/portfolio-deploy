import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [msg, setMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send.email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          msg,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent!");
        setName("");
        setContact("");
        setMsg("");
      } else {
        alert("Failed to send");
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="work-header">
          <span className="work-tag">Initialize Connection</span>
          <h2 className="work-title">Open Channels.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-meta-card">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <p className="code-comment">// Awaiting incoming transmission...</p>

              <div className="meta-block">
                <span className="meta-key">const</span> <span className="meta-var">location</span> = <span className="meta-string">"Quetta, PK"</span>;
              </div>

              <div className="meta-block">
                <span className="meta-key">const</span> <span className="meta-var">status</span> = <span className="meta-string">"Accepting Client Projects"</span>;
              </div>

              <div className="meta-block">
                <span className="meta-key">const</span> <span className="meta-var">email</span> = <span className="meta-string">"aliakbarr474@gmail.com"</span>;
              </div>

              <div className="social-links">
                <a href="https://github.com/aliakbarr474" target="_blank" rel="noreferrer" className="social-link">[ GitHub ]</a>
                <a href="https://www.linkedin.com/in/ali-akbar-8592b1241/" target="_blank" rel="noreferrer" className="social-link">[ LinkedIn ]</a>
              </div>
            </div>
          </div>

          <form className="contact-form glass-panel">
            <div className="form-group">
              <label htmlFor="name">System.Identifier (Name)</label>
              <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Return.Address (Email || Phone)</label>
              <input type="email" id="email" placeholder="Enter your email or phone" onChange={(e) => setContact(e.target.value)} value={contact} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Transmission.Payload (Message)</label>
              <textarea id="message" rows="5" placeholder="Project details or inquiry..." onChange={(e) => setMsg(e.target.value)} value={msg} required></textarea>
            </div>

            <button type="submit" className="btn-submit" onClick={handleSubmit} disabled={loading}>
              {loading ? "..." : "Execute Transmission →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;