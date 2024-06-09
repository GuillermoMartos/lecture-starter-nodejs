# NodeJS starter

## Installation

Run commands

```
cd client
npm install
npm run build
cd ..
npm install
npm start
```

Open [http://localhost:3333](http://localhost:3333)

# ROUTES AND PROTECTED ROUTES:
See wich routes are protected and follow instructions for using them.

    USER:
        GET /api/users
        GET /api/users/:id (PROTECTED)
        POST /api/users
        PATCH /api/users/:id (PROTECTED)
        DELETE /api/users/:id (PROTECTED)

    FIGHTER
        GET /api/fighters (PROTECTED)
        GET /api/fighters/:id (PROTECTED)
        POST /api/fighters (PROTECTED)
        PATCH /api/fighters/:id (PROTECTED)
        DELETE /api/fighters/:id (PROTECTED)

PROTECTED ROUTES: to use any of this protected routes, an x-user-id and an x-access-token are requested. Once (registered and) logged, you can find this headers key and values in the response headers. To use the protected keys, copy these headers to your following protected routes requests.