document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
  });

  // Smooth scroll para links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              // Fechar menu mobile se estiver aberto
              if (nav.classList.contains('active')) {
                  nav.classList.remove('active');
              }
          }
      });
  });

  // Carregar produtos dinamicamente
  const products = [
      {
          name: "Mel Puro",
          description: "Mel 100% natural, colhido de forma sustentável.",
          price: "R$ 25,00",
          image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
          name: "Geleia Artesanal",
          description: "Geleia caseira feita com frutas da estação.",
          price: "R$ 18,00",
          image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
          name: "Pão Caseiro",
          description: "Pão feito com farinha integral e fermentação natural.",
          price: "R$ 12,00",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
          name: "Queijo Colonial",
          description: "Queijo artesanal feito com leite fresco.",
          price: "R$ 35,00",
          image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
          name: "Café Especial",
          description: "Café torrado na hora, grãos selecionados.",
          price: "R$ 28,00",
          image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
          name: "Biscoitos Integrais",
          description: "Biscoitos feitos com ingredientes naturais.",
          price: "R$ 15,00",
          image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
  ];

  const productGrid = document.querySelector('.product-grid');
  
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      
      productCard.innerHTML = `
          <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="product-price">${product.price}</p>
          </div>
      `;
      
      productGrid.appendChild(productCard);
  });

  // Formulário de contato
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envio do formulário
      alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
      this.reset();
  });
});