apt-get -y install git nginx
apt update
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get -y install nodejs
npm install yarn -g
yarn global add pm2

rm -f /etc/nginx/sites-enabled/default
rm -f /etc/nginx/sites-available/default

ln -s -f /root/index/index.nginx /etc/nginx/sites-enabled/index
# chmod -R o+rwx /var/www/index

service nginx restart
yarn run start
