
Fonte: https://tiagomichaelsousa.dev/articles/oauth-api-and-next-app-in-5-mins

Install Laravel with Sail

curl -s "https://laravel.build/api?with=mysql" | bash

Install boilerplate for NextJs and Breeze

git clone git@github.com:laravel/breeze-next.git app && cd app && rm -rf .github

cd api && sail up

Install laravel/breeze

sail composer require laravel/breeze

sail artisan breeze:install api

ajustar as seeds e rodar

sail artisan migrate --seed


cd app

echo "NEXT_PUBLIC_BACKEND_URL=http://localhost" >> .env.development

yarn install

yarn run dev


Some Socialite would be nice!
https://tiagomichaelsousa.dev/articles/oauth-api-and-next-app-in-5-mins#Some Socialite would be nice!


sail composer require laravel/socialite


sail artisan make:model OAuthProvider -mcf --api



