export function loadAbout() {

    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    const h1=document.createElement('h1')
    h1.textContent='About us'

    const p = document.createElement('p');
    p.textContent = 'KingsBurger was founded in 2024 with a simple mission: to serve the best burgers in town. Our ingredients are locally sourced and our recipes are crafted with passion.';



    const aboutdiv=document.createElement('div')
    aboutdiv.className='about'


    const h2=document.createElement('h2')
    h2.textContent="contact us"

    const contact_text=document.createElement('p')
    contact_text.textContent='Phone: (555) 123-4567\nEmail: info@kingsburger.com\nAddress: 123 Burger Street, Food City';


    aboutdiv.appendChild(h2)
    aboutdiv.appendChild(contact_text)

    content.appendChild(h1); 
    content.appendChild(p)
    content.appendChild(aboutdiv)


}