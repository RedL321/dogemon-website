// Enhanced JavaScript with mobile-friendly interactions
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const heroOrderButton = document.getElementById('heroOrderButton');
  const heroLearnMore = document.getElementById('heroLearnMore');
  const preOrderButton = document.getElementById('preOrderButton');
  const orderButton = document.getElementById('orderButton');
  const orderModal = document.getElementById('orderModal');
  const closeModal = document.querySelector('.close-modal');
  const orderForm = document.getElementById('orderForm');

  // Hero Order Now button opens the pre-order form
  heroOrderButton.addEventListener('click', () => {
    orderModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Hero Learn More button scrolls to features
  heroLearnMore.addEventListener('click', () => {
    document.querySelector('.combined-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  // Pre-order button opens the form
  preOrderButton.addEventListener('click', () => {
    orderModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Original order button redirects to website
  orderButton.addEventListener('click', () => {
    alert('🐾 Thank you! Redirecting to Dogemon\'s official site...');
    window.location.href = 'https://www.dogemon.jp';
  });

  // Modal functionality
  closeModal.addEventListener('click', () => {
    orderModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && orderModal.style.display === 'flex') {
      orderModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Form submission
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const model = document.getElementById('model').value;
    
    // Validate form
    if (!name || !email || !model) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! Your pre-order for ${model} has been received. We'll contact you at ${email} with further details.`);
    
    // Reset form and close modal
    orderForm.reset();
    orderModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Add click event to dog cards for more interactivity
  const dogCards = document.querySelectorAll('.dog-card');
  dogCards.forEach(card => {
    card.addEventListener('click', () => {
      const caption = card.querySelector('.caption').textContent;
      const desc = card.querySelector('.dog-desc').textContent;
      alert(`You selected: ${caption} - ${desc}! Learn more about this Dogemon model on our website.`);
    });
  });

  // Add touch-friendly hover effects for mobile
  if ('ontouchstart' in window) {
    const cards = document.querySelectorAll('.card, .dog-card, .price-box, .order-box');
    cards.forEach(card => {
      card.addEventListener('touchstart', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('touchend', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Simple animation on scroll for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for animation
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(15px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });

  // Add a simple counter for visitors (local storage)
  let visitCount = localStorage.getItem('dogemonVisitCount');
  if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
  } else {
    visitCount = 1;
  }
  localStorage.setItem('dogemonVisitCount', visitCount);
  
  console.log(`Welcome! You've visited Dogemon ${visitCount} time(s).`);
});