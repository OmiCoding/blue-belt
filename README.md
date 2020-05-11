Initial setup without SSL:

Make sure you have that the docker-compose.yml has this line:

command: certonly --webroot --webroot-path=/var/www/html --email email@email.com --agree-tos --no-eff-email --staging -d blubelt.com -d www.blubelt.com

sudo docker-compose up -d

---

---

With SSL:

--- docker-compose.yml
Add "443:443" to ports in the webserver service (nginx service)

Map dhparam directory to "/etc/ssl/certs" in the webserver service (nginx service)
Ex: "dhparam:/etc/ssl/certs"

command: certonly --webroot --webroot-path=/var/www/html --email email@email.com --agree-tos --no-eff-email --force-renewal -d blubelt.com -d www.blubelt.com

--- cli command
sudo docker-compose up -d --force-recreate --no-deps webserver
