document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const item = document.getElementById('item').value;
    const condition = document.getElementById('condition').value;
  
    const message = `Hi, I'm interested in selling:\n\nName: ${name}\nPhone: ${phone}\nItem: ${item}\nCondition: ${condition}`;
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappURL = `https://wa.me/917272989292?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  });
  