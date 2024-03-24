<?php
// Vérifier si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $objet = $_POST['objet'];
    $message = $_POST['body'];

    // Adresse e-mail où envoyer le message
    $destinataire = "votre@email.com"; // Remplacez par votre adresse e-mail

    // Sujet de l'e-mail
    $sujet = "Nouveau message de $nom $prenom";

    // Construire le corps de l'e-mail
    $contenu = "Nom: $nom\n";
    $contenu .= "Prénom: $prenom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Objet: $objet\n\n";
    $contenu .= "Message:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $nom $prenom <$email>";

    // Envoyer l'e-mail
    if (mail($destinataire, $sujet, $contenu, $headers)) {
        // Si l'e-mail est envoyé avec succès, rediriger vers une page de confirmation
        header("Location: confirmation.php");
        exit(); // Assurez-vous de terminer le script après la redirection
    } else {
        // Si l'e-mail n'est pas envoyé, afficher un message d'erreur
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
}
?>
