#/bin/bash
ng build --aot
#upload files
s3cmd --exclude '.git/*' sync --delete-removed ./dist/ s3://test-dot-sdc-webportal-hosting/
#set content type of css files
s3cmd --recursive modify --add-header='content-type':'text/css' --exclude '' --include '.css' s3://test-dot-sdc-webportal-hosting/
#make everything public
s3cmd setacl s3://test-dot-sdc-webportal-hosting --acl-public --recursive
