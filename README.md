# Email_Survery
To run Dev: 
run ngrok using ngrok http 5000 
run in server directory npm run dev
-sendGrid Must update: Settings->mail settings->event webhook-> http post url to the url in ngrok

To run Prod:
run from server directory railway up
to end run railway down
-sendGrid Must update: Settings->mail settings->event webhook-> http post url: https://legal-finger-production.up.railway.app/api/surveys/webhooks
