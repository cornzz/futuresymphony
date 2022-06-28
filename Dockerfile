FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y libc-client-dev libkrb5-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl && docker-php-ext-install imap
RUN a2enmod headers \
    && sed -ri -e 's/^([ \t]*)(<\/VirtualHost>)/\1\tHeader set Access-Control-Allow-Origin "*"\n\tHeader set Access-Control-Allow-Credentials "true"\n\tHeader set Access-Control-Allow-Headers "Authorization"\n\1\2/g' /etc/apache2/sites-available/*.conf \
    && service apache2 restart