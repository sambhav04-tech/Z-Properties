// Sample dealer data
let dealers = [
    {
        name: "Premium Properties Ltd.",
        contact: "+1 (555) 123-4567",
        email: "contact@premiumproperties.com",
        area: "Downtown & Suburbs",
        experience: "8+ years",
        specialization: "Luxury Residential",
        rating: "4.8/5"
    },
    {
        name: "Metro Real Estate",
        contact: "+1 (555) 234-5678", 
        email: "info@metrorealestate.com",
        area: "Metropolitan Area",
        experience: "12+ years",
        specialization: "Commercial & Residential",
        rating: "4.7/5"
    },
    {
        name: "Elite Property Solutions",
        contact: "+1 (555) 345-6789",
        email: "sales@eliteproperties.com", 
        area: "City Center & Outskirts",
        experience: "15+ years",
        specialization: "All Property Types",
        rating: "4.9/5"
    }
];

// Function to hide all sections
function hideAll() {
    const sections = ['home-page', 'customer-auth', 'customer-dashboard', 'dealer-contacts', 'dealer-auth', 'dealer-dashboard'];
    sections.forEach(id => document.getElementById(id).classList.add('hidden'));
}

function showHome() {
    hideAll();
    document.getElementById('home-page').classList.remove('hidden');
}

function showCustomerAuth() {
    hideAll();
    document.getElementById('customer-auth').classList.remove('hidden');
    document.getElementById('customer-choice').classList.remove('hidden');
    document.getElementById('customer-login-form').classList.add('hidden');
    document.getElementById('customer-signup-form').classList.add('hidden');
}

function showDealerAuth() {
    hideAll();
    document.getElementById('dealer-auth').classList.remove('hidden');
    document.getElementById('dealer-choice').classList.remove('hidden');
    document.getElementById('dealer-login-form').classList.add('hidden');
    document.getElementById('dealer-signup-form').classList.add('hidden');
}

function showCustomerLogin() {
    document.getElementById('customer-choice').classList.add('hidden');
    document.getElementById('customer-signup-form').classList.add('hidden');
    document.getElementById('customer-login-form').classList.remove('hidden');
}

function showCustomerSignup() {
    document.getElementById('customer-choice').classList.add('hidden');
    document.getElementById('customer-login-form').classList.add('hidden');
    document.getElementById('customer-signup-form').classList.remove('hidden');
}

function showDealerLogin() {
    document.getElementById('dealer-choice').classList.add('hidden');
    document.getElementById('dealer-signup-form').classList.add('hidden');
    document.getElementById('dealer-login-form').classList.remove('hidden');
}

function showDealerSignup() {
    document.getElementById('dealer-choice').classList.add('hidden');
    document.getElementById('dealer-login-form').classList.add('hidden');
    document.getElementById('dealer-signup-form').classList.remove('hidden');
}

function customerLogin(event) {
    event.preventDefault();
    showCustomerDashboard();
}

function customerSignup(event) {
    event.preventDefault();
    showCustomerDashboard();
}

function showCustomerDashboard() {
    hideAll();
    document.getElementById('customer-dashboard').classList.remove('hidden');
}

function showBuyProperty() {
    hideAll();
    document.getElementById('dealer-contacts').classList.remove('hidden');
    document.getElementById('action-title').textContent = 'Property Dealers - Buy Properties';
    loadDealers('buy');
}

function showSellProperty() {
    hideAll();
    document.getElementById('dealer-contacts').classList.remove('hidden');
    document.getElementById('action-title').textContent = 'Property Dealers - Sell Properties';
    loadDealers('sell');
}

function loadDealers(action) {
    const dealersList = document.getElementById('dealers-list');
    dealersList.innerHTML = '';
    
    dealers.forEach((dealer, index) => {
        const dealerCard = document.createElement('div');
        dealerCard.className = 'contact-info';
        dealerCard.innerHTML = `
            <h4>${dealer.name}</h4>
            <p><strong>📞 Phone:</strong> ${dealer.contact}</p>
            <p><strong>📧 Email:</strong> ${dealer.email}</p>
            <p><strong>📍 Area:</strong> ${dealer.area}</p>
            <p><strong>⭐ Rating:</strong> ${dealer.rating}</p>
            <p><strong>🎯 Specialization:</strong> ${dealer.specialization}</p>
            <p><strong>📅 Experience:</strong> ${dealer.experience}</p>
            <div style="margin-top: 15px;">
                <button class="btn btn-dark" onclick="contactDealer('${dealer.name}', '${dealer.contact}')">Contact Now</button>
                <button class="btn btn-secondary" style="margin-left: 10px;">View Properties</button>
            </div>
        `;
        dealersList.appendChild(dealerCard);
    });
}

function contactDealer(name, contact) {
    alert(`Connecting you with ${name}\nPhone: ${contact}\n\nYou can now call or message them directly!`);
}

function dealerLogin(event) {
    event.preventDefault();
    showDealerDashboard();
}

function dealerSignup(event) {
    event.preventDefault();
    const form = event.target;
    const newDealer = {
        name: form.elements['business-name'].value,
        contact: form.elements['phone'].value,
        email: form.elements['email'].value,
        area: form.elements['city'].value,
        experience: form.elements['experience'].value,
        specialization: form.elements['specialization'].value,
        rating: "New Dealer"
    };
    
    dealers.push(newDealer);
    showDealerDashboard();
}

function showDealerDashboard() {
    hideAll();
    document.getElementById('dealer-dashboard').classList.remove('hidden');
}

function logout() {
    showHome();
}

function showAbout() {
    alert('ZÜ Properties - Premium Real Estate Platform\n\nConnecting property buyers, sellers, and professional dealers in a secure, premium environment.\n\nFeatures:\n• Verified dealer network\n• Secure transactions\n• Premium property listings\n• Direct communication tools');
}

// Initialize the website
showHome();
