# Formulaire d'enregistrement d'une offre LoCoMiam

Page web d'exemple permettant l'enregistrement d'une offre collaborative sur la plateforme LoCoMiam.

## Paramètres obligatoires

Les paramètres ci-dessous sont nécessaires pour définir préalablement à l'offre l'origine de la demande et son délai d'expiration (en général la date et heure limite de passage des commandes).

Parameter Name | Description
-- | --
partnerId | Identifiant du partenaire (fournit par LoCoMiam).
partnerDeadline | Date au format ISO 8601 (https://www.w3.org/TR/NOTE-datetime) de fin de validité de l'offre.

### Exemple d'utilisation

    index.html?partnerId=BestPartner&partnerDeadline=2017-07-06T18:00:00.000Z


## Paramètres facultatifs

Les paramètres facultatifs ont pour objectif de faciliter le parcours de l'utilisateur qui poste une offre (en renseignant certains champs du formulaire).

Parameter Name | Description
-- | --
partnerName | Nom du partenaire ou du point de vente.
partnerVisit | Date de visite du point de vente par l'utilisateur au format YYYY-MM-DD (= date de retrait de la commande).
firstname | Prénom de l'utilisateur.
lastname | Nom de l'utilisateur.
email | Adresse email de l'utilisateur.
phone | Numéro de téléphone de l'utilisateur.
address | Adresse (rue / lieu dit) du point de retrait des commandes.
postal_code | Code postal du point de retrait des commandes.
city | Ville du point de retrait des commandes.

### Exemple d'utilisation

    index.html?partnerName=BestPartner&partnerVisit=2017-06-14&firstname=Jerome&lastname=Dumas&city=Nantes
