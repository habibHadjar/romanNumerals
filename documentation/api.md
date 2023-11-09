### API

Il s'agit d'une api REST:

Méthode: "POST"
Route: "/api/convertToArabe/"
Corps: "{'roman': 'string'}"
Réponse: "{
            "success": boolean,
            "results": {"roman": integer},
            "errors": null|array
        }"