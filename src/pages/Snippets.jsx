import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import { Search, Copy, Check } from 'lucide-react';
import { pythonSnippets, dsaSnippets, aiMlSnippets, jsSnippets, reactSnippets, sqlSnippets, mongoSnippets } from '../data/gfgSnippets';
import './Snippets.css';

export default function Snippets() {
  const [activeSubject, setActiveSubject] = useState('Python');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  const sourceSnippets = activeSubject === 'Python' ? pythonSnippets 
    : activeSubject === 'DSA' ? dsaSnippets 
    : activeSubject === 'AI' ? aiMlSnippets 
    : activeSubject === 'JS' ? jsSnippets 
    : activeSubject === 'React' ? reactSnippets 
    : activeSubject === 'SQL' ? sqlSnippets 
    : mongoSnippets;
  const categories = ['All', ...new Set(sourceSnippets.map(s => s.category))];

  const filteredSnippets = sourceSnippets.filter(s => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubjectChange = (subject) => {
    setActiveSubject(subject);
    setActiveCategory('All');
    setSearchQuery('');
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [filteredSnippets]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="snippets-page">
      <div className="container" style={{maxWidth: '1200px'}}>
        <header className="page-header" style={{marginBottom: '2rem'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1>Code Reference Snippets</h1>
              <p>Curated coding concepts and Data Structures from Beginner to Advanced. (Ref: GeeksforGeeks)</p>
            </div>
            <div className="subject-tabs" style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.3rem', borderRadius: '12px' }}>
              <button 
                onClick={() => handleSubjectChange('Python')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'Python' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'Python' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                Python Core
              </button>
              <button 
                onClick={() => handleSubjectChange('DSA')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'DSA' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'DSA' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                DSA in Python
              </button>
              <button 
                onClick={() => handleSubjectChange('AI')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'AI' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'AI' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                AI & ML
              </button>
              <button 
                onClick={() => handleSubjectChange('JS')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'JS' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'JS' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                JavaScript
              </button>
              <button 
                onClick={() => handleSubjectChange('React')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'React' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'React' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                ReactJS
              </button>
              <button 
                onClick={() => handleSubjectChange('SQL')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'SQL' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'SQL' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                SQL
              </button>
              <button 
                onClick={() => handleSubjectChange('Mongo')}
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: activeSubject === 'Mongo' ? '#8b5cf6' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: activeSubject === 'Mongo' ? 'bold' : 'normal', transition: 'all 0.2s' }}
              >
                MongoDB
              </button>
            </div>
          </div>
        </header>

        <div className="snippets-layout">
          {/* Sidebar */}
          <aside className="snippets-sidebar">
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search topics..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <nav className="category-nav">
              <h3 className="nav-title">Categories</h3>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="snippets-content">
            {filteredSnippets.length === 0 ? (
              <div className="no-snippets-found">
                <p>No snippets found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="snippets-grid">
                {filteredSnippets.map(snippet => (
                  <article key={snippet.id} className="snippet-card">
                    <div className="snippet-header">
                      <div>
                        <span className="snippet-category">{snippet.category}</span>
                        <h2 className="snippet-title">{snippet.title}</h2>
                        <p className="snippet-desc">{snippet.description}</p>
                      </div>
                      <button 
                        className="btn-copy" 
                        onClick={() => handleCopy(snippet.id, snippet.code)}
                        title="Copy Code"
                      >
                        {copiedId === snippet.id ? <Check size={18} color="#22c55e" /> : <Copy size={18} />}
                      </button>
                    </div>
                    <div className="snippet-code-container">
                      <pre>
                        <code className="language-python">{snippet.code}</code>
                      </pre>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
