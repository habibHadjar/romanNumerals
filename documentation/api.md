### API

Il s'agit d'une api REST:

Méthode: "POST"
Route: "/api/convertToArabe/"
Corps: "{'roman': 'string'}"
Réponse: "{
            "success": boolean,
            "result": {"param": string, "result": integer} | null,
            "error": null|string
        }"