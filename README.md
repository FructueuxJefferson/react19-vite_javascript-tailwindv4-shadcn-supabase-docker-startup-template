# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Create a supabase project and inside the frontend folder, create a .env file with :

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=



## Test without docker

* npm install
* npm run dev


## Test with docker

#### In dev context

If the app is currently up, down is first ?

```
docker-compose -f docker-compose-dev.yml down
docker-compose -f docker-compose-prod.yml up -d --build
```

##### In prod context

```
docker-compose -f docker-compose-prod.yml down
docker-compose -f docker-compose-prod.yml up -d --build
```


Dockerization source : https://www.innokrea.com/dockerizing-the-frontend-do-it-right-with-react-js-vite/
