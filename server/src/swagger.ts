export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lila API",
      version: "1.0.0",
      description: "Information about all endpoints in Lila application."
    },
    servers: [
      {
        url: "http://localhost:5000/api"
      }
    ],
    paths: {
      "/users": {
        "get": {
          "summary": "Returns the list of all users",
          "description": "Gets all users",
          "tags": [
            "Users"
          ],
          "responses": {
            "200": {
              "description": "Gets an array of users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/users/{id}": {
        "get": {
          "summary": "Returns user",
          "description": "Gets a users",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The user ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a user",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
    },
    components: {
      "schemas": {
        "User": {
          "properties": {
            "_id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        },
      }
    },
    tags: [
      {
        "name": "Users",
        "description": "Working with users"
      }
    ]
},
apis: ["./routes/api/*.ts"]
}
