// Créer un événement au scroll
let lastScroll = 0;

window.addEventListener("scroll", () => {
// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte
  if (window.scrollY < lastScroll) {  // Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu 
    navbar.style.top= 0;
  } else {
    navbar.style.top = "-60px";

    lastScroll = window.scrollY; // Connaitre niveau de scroll (window.scrollY)
  }
});

 



