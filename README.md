# SAE.301

https://prod.liveshare.vsengsaas.visualstudio.com/join?1310920E7D314B789661B0F0389C1C9A7D63



<IfModule mod_rewrite.c>
  RewriteEngine On

  # Some hosts may require you to use the `RewriteBase` directive.
  # Determine the RewriteBase automatically and set it as environment variable.
  # If you are using Apache aliases to do mass virtual hosting or installed the
  # project in a subdirectory, the base path will be prepended to allow proper
  # resolution of the index.php file and to redirect to the correct URI. It will
  # work in environments without path prefix as well, providing a safe, one-size
  # fits all solution. But as you do not need it in this case, you can comment
  # the following 2 lines to eliminate the overhead.
  
  #RewriteCond %{REQUEST_URI}::$1 ^(/.+)/(.*)::\2$
  #RewriteRule ^(.*) - [E=BASE:%1]
  
  # If the above doesn't work you might need to set the `RewriteBase` directive manually, it should be the
  # absolute physical path to the directory that contains this htaccess file.
  # RewriteBase /

  #RewriteCond %{REQUEST_FILENAME} !-f
  #RewriteRule ^ index.php [QSA,L]
  
  RewriteRule .* index.php
</IfModule>

# Header set Access-Control-Allow-Origin "*" # à modifier en fonction de votre configuration
#Header set Access-Control-Allow-Methods "GET, POST, DELETE, PATCH, OPTIONS"
#Header set Access-Control-Allow-Headers "Content-Type, Authorization"
