// Déclaration les variables utilisateur dans un "tableau" (objet)
const utilisateur = {
  nom: "",
  prenom: "",
  email: "",
  age: "",
};

function validerNom(n) {
  return n !== null && n.trim() !== "";
}

function validerPrenom(n) {
  return n !== null && n.trim() !== "";
}

function validerEmail(e) {
  if (e === null) return false;
  const email = e.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email !== "" && regex.test(email);
}

function validerAge(a) {
  if (a === null) return false;
  const num = Number(a);
  return Number.isInteger(num) && num > 0;
}

function formulaireValidation() {
  alert("Bienvenue dans le formulaire de validation de saisie !");
  alert(
    "Ce formulaire va te demander ton nom, ton prenom , ton adresse e-mail et ton âge."
  );
  alert("Assure-toi de fournir des informations valides pour chaque question.");

  if (!confirm("Es-tu prêt à commencer ?")) {
    alert("D'accord, à la prochaine fois !");
    return;
  }

  // Nom
  let nom;
  do {
    nom = prompt("Quel est ton nom ?");
    if (nom === null) {
      alert("Opération annulée.");
      return;
    }
    if (!validerNom(nom)) {
      alert("Tu dois entrer un nom valide !");
    }
  } while (!validerNom(nom));
  utilisateur.nom = nom.trim();

  // Prenom
  let prenom;
  do {
    prenom = prompt("Quel est ton prenom ?");
    if (prenom === null) {
      alert("Operation annulee.");

      return;
    }

    if (!validerPrenom(prenom)) {
      alert("Tu dois entrer un prenom valide !");
    }
  } while (!validerPrenom(prenom));
  utilisateur.prenom = prenom.trim();

  // E-mail
  let email;
  do {
    email = prompt("Quel est ton adresse e-mail ?");
    if (email === null) {
      alert("Opération annulée.");
      return;
    }
    if (!validerEmail(email)) {
      alert("Tu dois entrer une adresse e-mail valide !");
    }
  } while (!validerEmail(email));
  utilisateur.email = email.trim();

  // Âge
  let age;
  do {
    age = prompt("Quel est ton âge ? (entier positif)");
    if (age === null) {
      alert("Opération annulée.");
      return;
    }
    if (!validerAge(age)) {
      alert("Tu dois entrer un âge entier positif valide !");
    }
  } while (!validerAge(age));
  utilisateur.age = String(Number(age));

  // Résultat
  alert(
    "Merci ! Voici le récapitulatif :\nNom : " +
      utilisateur.nom +
      "\nPrenom: " +
      utilisateur.prenom +
      "\nE-mail : " +
      utilisateur.email +
      "\nÂge : " +
      utilisateur.age +
      " ans."
  );
  console.log("Utilisateur:", utilisateur);
}
