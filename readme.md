FORM API PROJECT

Environnement local
avoir docker ! + docker-compose up -d --build



1- Run mongodb with docker

docker run -d \
 -p 27017:27017 \
 --name mongodb \
 -v data-vol:/data/db \
 mongo:latest

url : 'mongodb://localhost:27017'



For this project I did not secure the routes 
Authorization: Bearer @AUTH_TOKEN


db will have no collection when you start using it

docker exec -it mongodb mongosh
show dbs

DB_URL=

En local chez moi j'ai installé

la création d’un questionnaire avec plusieurs questions.
la récupération du questionnaire avec ces questions
la réponse aux questions du questionnaire par un utilisateur
la récupération des réponses aux questions par utilisateur pour ce questionnaire

REST CLIENT VS CODE OR POSTMAN
1- Install REST CLIENT vscode extension
2- Launch the app on you local
3- In the demo.rest you can send the different request and view responses / headers ...

MONGO DB

Collection : forms

    ID : Identifiant unique du questionnaire (généré automatiquement par MongoDB).
    title : Titre du questionnaire.
    questions : Un tableau d'objets représentant les questions du questionnaire. Chaque objet peut avoir des propriétés telles que questionText, questionType, etc.

    {

"\_id": ObjectId("id_form_123"),
"title": "Questionnaire sur la satisfaction client",
"questions": [
{
"questionText": "Comment évaluez-vous notre service client?",
"questionType": "rating"
},
{
"questionText": "Quels sont les points que nous devrions améliorer?",
"questionType": "text"
}
// ... autres questions
]
}

Collection : results

    ID : Identifiant unique de la réponse (généré automatiquement par MongoDB).
    formId : ID du questionnaire auquel la réponse est associée.
    answers : Un tableau d'objets représentant les réponses de l'utilisateur pour chaque question du questionnaire.

{
"\_id": ObjectId("id_result_456"),
"formId": ObjectId("id_form_123"),
"answers": [
{
"questionId": ObjectId("id_question_1"),
"answerText": "4"
},
{
"questionId": ObjectId("id_question_2"),
"answerText": "Les délais de livraison peuvent être améliorés."
}
// ... autres réponses
]
}

ou avec user ID

Collection : results

    ID : Identifiant unique de la réponse (généré automatiquement par MongoDB).
    formId : ID du questionnaire auquel la réponse est associée.
    userId : ID de l'utilisateur qui a répondu au questionnaire.
    answers : Un tableau d'objets représentant les réponses de l'utilisateur pour chaque question du questionnaire.

Exemple :

json

{
"\_id": ObjectId("id_result_456"),
"formId": ObjectId("id_form_123"),
"userId": ObjectId("id_user_789"),
"answers": [
{
"questionId": ObjectId("id_question_1"),
"answerText": "4"
},
{
"questionId": ObjectId("id_question_2"),
"answerText": "Les délais de livraison peuvent être améliorés."
}
// ... autres réponses
]
}

Avec cette modification, chaque résultat sera associé à un utilisateur spécifique, ce qui permettra de suivre les réponses individuelles.

#MONGODB_URI='mongodb+srv://form-api-test:8FK1WQXixN8hymuw@form-api-test.qokgbkt.mongodb.net/?retryWrites=true&w=majority'
