```
alias cde='cd /home/esg/projects/website/elsavanoort'
alias de='cde;docker-compose -f ./docker-compose.yml up -d'
alias be='cde;docker exec -ti elsavanoort /bin/bash'
alias ge='cde;./node_modules/.bin/gulp'
```