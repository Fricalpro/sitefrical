// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação interna
import './Header.css'; // Importa os estilos

// --- AJUSTE OS NOMES E EXTENSÕES DOS SEUS ARQUIVOS DE ASSETS AQUI ---
import logoSrc from '../assets/images/logo.png'; // Ex: logo.svg, logo.png
import whatsappIconSrc from '../assets/icons/whatsapp.png'; // Ex: whatsapp.png, whatsapp.svg
// ---------------------------------------------------------

// Array de itens do menu com links internos e externos
const menuItems = [
  {
    name: 'Sobre',
    link: '/sobre/nossa-historia', // Link interno principal da seção
    submenus: [
      { name: 'Nossa História', link: '/sobre/nossa-historia' },
      { name: 'Indústria', link: '/sobre/industria' },
    ],
  },
  {
    name: 'Produtos',
    link: '/produtos', // Link interno principal da seção
    submenus: [
      { name: 'Prime Baby', link: '/produtos/prime-baby' },
      { name: 'Premium Grill', link: '/produtos/premium-grill' },
      { name: 'Tradicional Bovino', link: '/produtos/tradicional-bovino' },
      { name: 'Palatto Bovino', link: '/produtos/palatto-bovino' },
      { name: 'Palatto Suíno', link: '/produtos/palatto-suino' },
      { name: 'Tradicional Suíno', link: '/produtos/tradicional-suino' },
      { name: 'Carcaça Bovina', link: '/produtos/carcaca-bovina' },
      { name: 'Carcaça Suína', link: '/produtos/carcaca-suina' },
      { name: 'Miúdos', link: '/produtos/miudos' },
      { name: 'Pão de Alho', link: '/produtos/pao-de-alho' },
      { name: 'Pão de Queijo', link: '/produtos/pao-de-queijo' },
      { name: 'Industrializados', link: '/produtos/industrializados' },
      { name: 'Vegetais', link: '/produtos/vegetais' },
    ],
  },
  {
    name: 'Blog',
    link: 'URL_EXTERNA_BLOG_PRINCIPAL', // <-- SUBSTITUA PELA URL REAL
    isExternal: true, // Marcador para link externo
    submenus: [
      { name: 'Notícias', link: 'URL_EXTERNA_BLOG_NOTICIAS', isExternal: true }, // <-- SUBSTITUA
      { name: 'Receitas', link: 'URL_EXTERNA_BLOG_RECEITAS', isExternal: true }, // <-- SUBSTITUA
      { name: 'Tendências', link: 'URL_EXTERNA_BLOG_TENDENCIAS', isExternal: true }, // <-- SUBSTITUA
    ],
  },
  {
    name: 'Política de Qualidade',
    link: '/politica-qualidade', // Link interno principal da seção
    submenus: [
      { name: 'Atender e Superar as Necessidades', link: '/politica-qualidade/atender-necessidades' },
      { name: 'Comprometimento com a Melhoria', link: '/politica-qualidade/comprometimento-melhoria' },
      { name: 'Desenvolver e Capacitar Pessoas', link: '/politica-qualidade/desenvolver-pessoas' },
      { name: 'Entregar Alimentos Saudáveis', link: '/politica-qualidade/alimentos-seguros' },
      { name: 'Atender as Normas Aplicáveis', link: '/politica-qualidade/atender-normas' },
    ],
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (index, event) => {
    event.stopPropagation(); // Impede que o clique afete o link pai
    event.preventDefault(); // Impede a navegação padrão (caso o botão esteja dentro de um <a>)
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  // Fecha o menu mobile se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenMobileSubmenu(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Função para fechar menu mobile ao navegar
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  // Função auxiliar para renderizar links internos ou externos
  const renderLink = (item, className) => {
    if (item.isExternal) {
      return (
        <a href={item.link} className={className} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      );
    }
    // Link interno usando React Router
    return (
      <Link to={item.link} className={className} onClick={handleNavLinkClick}>
        {item.name}
      </Link>
    );
  };


  return (
    <header className={`main-header ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`} ref={headerRef}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={handleNavLinkClick}> {/* Link para Home */}
          <img src={logoSrc} alt="Frical Logo" className="logo-img" />
        </Link>

        {/* Botão Hamburger (Mobile/Tablet) */}
        <button className="hamburger-button" aria-label="Abrir menu" onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navegação */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.submenus && item.submenus.length > 0 ? 'has-submenu' : ''} ${openMobileSubmenu === index ? 'mobile-submenu-open' : ''}`}>
                 {/* Link Principal */}
                 {renderLink(item, 'nav-link')}

                {/* Botão para abrir submenu (Mobile) e Seta (Desktop) */}
                {item.submenus && item.submenus.length > 0 && (
                   <button
                     className="submenu-toggle"
                     aria-label={`Abrir submenu ${item.name}`}
                     onClick={(e) => toggleMobileSubmenu(index, e)} // Passa o evento
                   >
                     <span className="arrow-down">▼</span> {/* Visível só no Desktop via CSS */}
                     <span className="plus-icon">+</span> {/* Visível só no Mobile via CSS */}
                   </button>
                )}

                {/* Submenu */}
                {item.submenus && item.submenus.length > 0 && (
                  <ul className="submenu-list">
                    {item.submenus.map((submenu, subIndex) => (
                      <li key={subIndex} className="submenu-item">
                        {/* Renderiza link do submenu */}
                        {renderLink(submenu, 'submenu-link')}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
           {/* Ícone WhatsApp (Dentro da Nav no Mobile para ficar no menu lateral) */}
           <a
            href="https://wa.me/553399198450" // Link externo direto
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon-link mobile-only-within-nav"
            aria-label="Abrir conversa no WhatsApp"
           >
             <img src={whatsappIconSrc} alt="WhatsApp Icon" className="whatsapp-icon" />
           </a>
        </nav>

        {/* Ícone WhatsApp (Desktop - fora da Nav) */}
        <a
          href="https://wa.me/553399198450" // Link externo direto
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon-link desktop-only"
          aria-label="Abrir conversa no WhatsApp"
        >
          <img src={whatsappIconSrc} alt="WhatsApp Icon" className="whatsapp-icon" />
        </a>

      </div>
    </header>
  );
}

export default Header;