FROM php:8.2-apache

# Instala dependências necessárias (para PostgreSQL, se usado no formulario.php)
RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql \
    && apt-get clean  # Adicionado de volta para otimizar tamanho da imagem

# Habilita mod_rewrite
RUN a2enmod rewrite

# Copia o config customizado do Apache para substituir o default
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Copia todos os arquivos do site para o diretório web
WORKDIR /var/www/html
COPY . /var/www/html

# Permissões (garante que Apache leia tudo)
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

# Expoe a porta (Render usa 80 por default, mas confirme)
EXPOSE 80

# Comando de start (default do Apache)
CMD ["apache2-foreground"]